import Navbar from "../components/Navbar";
import "./global.css";
export default function RootLayout({children}){
    return <html>
        <head>
            <title>My App</title>
        </head>
        <body>
            <Navbar />
            {children}
        </body>


    </html>
}