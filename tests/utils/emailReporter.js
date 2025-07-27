const nodemailer = require("nodemailer");
const path = require("path");

async function sendEmailReport() {
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_SENDER,
        to: process.env.EMAIL_RECEIVER,
        subject: "✅ Playwright Test Report",
        text: "Attached is the latest Allure report.",
        attachments: [
        {
            filename: "allure-report.zip",
            path: path.resolve("./allure-report.zip"),
        },
        ],
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("📬 Email sent with report!");
    } catch (error) {
        console.error("❌ Failed to send email:", error);
        process.exit(1);
    }
}

sendEmailReport();
