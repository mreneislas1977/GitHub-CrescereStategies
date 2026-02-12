import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

export const sendBriefingNotification = functions.firestore
    .document('briefingRequests/{requestId}')
    .onCreate(async (snap, context) => {
        const data = snap.data();

        // These variables are pulled from your Firebase config
        const smtpUser = functions.config().smtp.user;
        const smtpPass = functions.config().smtp.pass;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        });

        const mailOptions = {
            from: `"Crescere Web Bot" <${smtpUser}>`,
            to: 'mreneislas@crescere-strat.com', 
            subject: `Crescere Strategies LLC| New Briefing Request: ${data.organization}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #c5a059;">
                    <h2 style="color: #1a3c34;">Executive Briefing Request Captured</h2>
                    <p><strong>Full Name:</strong> ${data.fullName}</p>
                    <p><strong>Organization:</strong> ${data.organization}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
                    <hr style="border-top: 1px solid #eee;">
                    <p style="font-size: 12px; color: #666;">This is an automated notification from Crescere Strategies.</p>
                </div>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Notification email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    });
