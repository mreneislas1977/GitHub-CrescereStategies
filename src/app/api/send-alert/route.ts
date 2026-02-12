import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { clientEmail, testType } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mrene@crescere-strat.com', 
        pass: 'zgqfjxknratpsaca', 
      },
      connectionTimeout: 10000, 
    });

    const mailOptions = {
      from: '"Crescere System" <mrene@crescere-strat.com>',
      to: 'mreneislas@crescere-strat.com',
      subject: `🚨 CONSULTATION REQUEST: ${testType}`,
      text: `
        A client has reviewed their results and requested a full consultation.
        
        Client Email: ${clientEmail}
        Assessment Type: ${testType}
        Timestamp: ${new Date().toLocaleString()}
        
        Action: Please follow up with the client to schedule their formal analysis session.
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, error: error.message }, 
      { status: 500 }
    );
  }
}
