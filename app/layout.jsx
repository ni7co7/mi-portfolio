import Navbar from "../components/Navbar";
import { LanguageProvider } from '../context/LanguageContext';
import "./global.css";







export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>LoboDev</title>
            </head>
            <body>
                <LanguageProvider>
                    {/* 1. Ponemos el Navbar arriba para que aparezca en todas las páginas */}
                    <Navbar /> 

                    {/* 2. El children va UNA SOLA VEZ y adentro del Provider */}
                    <main>
                        {children}
                    </main>
                </LanguageProvider>
            </body>
        </html>
    );
}