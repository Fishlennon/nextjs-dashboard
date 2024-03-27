import { acme, montserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${acme.className} antialiased`}>
        <h1>Afuera de children, children es el primer page, la landing</h1>
        
        {children}
          <footer>
            esto es el footer 
          </footer>
        
        </body>
    </html>
  );
}
