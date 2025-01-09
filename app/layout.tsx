'use client';

import './globals.css';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-F5GB46KQ9M'
        ></Script>
        <Script id='google-analytics'>
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', 'G-F5GB46KQ9M');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
