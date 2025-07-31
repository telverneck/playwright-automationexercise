import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';

export async function sendEmailWithAttachment(
    to: string,
    subject: string,
    html: string,
    attachmentPath: string
) {
    const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: 'Playwright Bot <' + process.env.EMAIL_USER + '>',
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
        console.log(`✅ Email sent: ${info.response}`);
    } catch (error) {
        console.error(`❌ Failed to send email: ${error}`);
    }
}
