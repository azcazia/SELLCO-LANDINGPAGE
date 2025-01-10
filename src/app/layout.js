import './globals.css';

export const metadata = {
  title: 'Sellco AI',
  description: 'Transform Your Amazon Advertising with AI-Powered Precision',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans min-h-screen">

        {children}
      </body>
    </html>
  );
}
