import nodemailer from 'nodemailer';
import fs from 'fs';

export async function sendEmailReport() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const html = fs.readFileSync('allure-report/index.html', 'utf8');

    const mailOptions = {
        from: `"Test Report" <${process.env.EMAIL_SENDER}>`,
        to: 'recipient@example.com',
        subject: '📊 Playwright Test Report',
        html: html,
        attachments: [
            {
                filename: 'report.html',
                path: 'allure-report/index.html',
            },
        ],
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent:', info.response);
    } catch (error) {
        console.error('❌ Failed to send email:', error);
    }
}
