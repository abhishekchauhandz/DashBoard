import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidePanel from './components/SidePanel';
import Header from './components/Header';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
          <SidePanel />
        
          <main>
            {children}
          </main>
        
      </body>
    </html>
  );
}
