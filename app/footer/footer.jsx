
import { FaGithub, FaLinkedin } from "react-icons/fa";
// app/footer/footer.jsx
import { myCustomFont } from '@/app/fontSquare';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 m-8 py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Contact info */}
        <div className="text-center ">

          <h1 className="  text-center mb-18 text-8xl font-bold">Get in Touch!</h1>
          <p>📞 <a href="tel:+5493518527641" className=" italic text-center text-1xl hover:text-violet-400 transition">+54 9 351 8527641</a></p>
          <p>✉️ <a href="mailto:nicolasgianfelici84@gmail.com" className="italic text-center text-1xl hover:text-violet-400 transition">nicolasgianfelici84@gmail.com</a></p>
        </div>

        <div className="border-l border-gray-700 p-6">
          <p className="italic  text-center text-3xl mb-8">
            “Technology is best when it brings people together.” — Matt Mullenweg
          </p>
           <p className="mt-19 ml-20 italic" >Develop by:</p>
            <h2 className={`ml-22 p-8 text-9xl font-bold ${myCustomFont.className}`}>LOBO</h2>
            <div className=" m-16 ml-42 text-center flex space-x-16 text-3xl">
              <p >Córdoba, Argentina</p>
             <a
               href="https://github.com/tuusuario"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-violet-400 transition"
               aria-label="GitHub"
             >
               <FaGithub />
             </a>
             <a
               href="https://linkedin.com/in/tuusuario"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-violet-400 transition"
               aria-label="LinkedIn"
             >
               <FaLinkedin />
             </a>
            </div>
        </div>
          
      </div>
    </footer>
  );
}
