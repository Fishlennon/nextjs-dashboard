import { acme } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${acme.className} antialiased`}>
        <h1>Afuera de children, el page</h1>
        
        {children}

        
        </body>
    </html>
  );
}
