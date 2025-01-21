import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    console.log(
      process.env.EMAIL_USER,
      'EMAIL_USER',
      'EMAIL_PASSWORD',
      process.env.EMAIL_PASSWORD
    );
    const { fullName, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: {
        name: fullName,
        address: email, // User's email as the sender
      },
      replyTo: email, // Allows replying directly to the sender
      to: 'santhoshakash1145@gmail.com',
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
Name: ${fullName}
Email: ${email}
Message: ${message}

This email was sent from your portfolio contact form.
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong> ${message}</p>
<br>
<p style="color: #666; font-size: 0.9em;">This email was sent from your portfolio contact form.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email.........:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
