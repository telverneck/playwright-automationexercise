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
        from: `"Playwright Reporter" <${process.env.EMAIL_USER}>`,
        to: 'telverneck@hotmail.com',
        subject: '📬 Hello from Playwright!',
        text: 'This is a test email sent from GitHub Actions.',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent:', info.response);
    } catch (error) {
        console.error('❌ Failed to send email:', JSON.stringify(error, null, 2));

    }
}
