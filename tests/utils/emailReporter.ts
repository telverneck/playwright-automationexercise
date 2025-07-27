import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

export async function sendEmailReport() {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // ou "hotmail", "outlook"
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const reportPath = path.resolve('./allure-report.zip');

    const mailOptions = {
        from: process.env.EMAIL_SENDER,
        to: process.env.EMAIL_RECEIVER,
        subject: '📊 Playwright Test Report',
        text: 'Attached is the latest test report from Playwright.',
        attachments: [
            {
                filename: 'allure-report.zip',
                path: reportPath,
            },
        ],
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
    } catch (error) {
        console.error('❌ Failed to send email:', error);
    }
}
