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
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_PASSWORD,
        },
        logger: true,
        debug: true,
    });


    const mailOptions = {
        from: 'Playwright Bot <' + process.env.EMAIL_SENDER + '>',
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
        console.log('📨 Attempting to send email...');
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent: ${info.response}`);
    } catch (error) {
        console.error(`❌ Failed to send email: ${error}`);
    }
}
