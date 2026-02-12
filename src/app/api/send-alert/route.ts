import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { clientEmail, testType } = data;

    // --- CREDENTIALS SECTION ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mrene@crescere-strat.com', 
        // PASTE YOUR 16-CHAR APP PASSWORD BELOW (Keep the quotes!)
        pass: zgqfjxknratpsaca, 
      },
    });
    // ---------------------------

    const mailOptions = {
      from: '"Crescere System" <mrene@crescere-strat.com>',
      to: 'mreneislas@crescere-strat.com',
      subject: `🚨 CONSULTATION REQUEST: ${testType}`,
      text: `
        The client has reviewed their results and requested a consultation.
        
        Client Email: ${clientEmail}
        Assessment: ${testType}
        Timestamp: ${new Date().toLocaleString()}
        
        Action: Please contact them to schedule the analysis session.
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Email error:', error);
    // Return the actual error message so we can debug if it fails again
    return NextResponse.json(
      { success: false, error: error.message }, 
      { status: 500 }
    );
  }
}
