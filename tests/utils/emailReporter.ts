import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
import fs from 'fs';
import path from 'path';

const options = {
    auth: {
        api_key: process.env.SENDGRID_API_KEY || '',
    },
};

const transporter = nodemailer.createTransport(sgTransport(options));

export async function sendEmailWithAttachment(to: string, subject: string, html: string, attachmentPath: string) {
    const mailOptions = {
        from: 'Playwright Bot <telmo.rodrigues.correa@outlook.com>',
        to,
        subject,
        html,
        attachments: [
        {
            filename: path.basename(attachmentPath),
            content: fs.createReadStream(attachmentPath),
        },
        ],
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent:', info);
    } catch (error) {
        console.error('❌ Failed to send email:', JSON.stringify(error, null, 2));
    }
}
