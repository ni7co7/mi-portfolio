import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 m-8 py-16 px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Contact info */}
        <div className="text-center md:text-left space-y-8">
          <p>📞 <a href="tel:+5493518527641" className="text-2xl hover:text-violet-400 transition">+54 9 351 8527641</a></p>
          <p>✉️ <a href="mailto:nicolasgianfelici84@gmail.com" className=" text-2xl hover:text-violet-400 transition">nicolasgianfelici84@gmail.com</a></p>
        </div>

        {/* Frase */}
        <p className="italic max-w-md text-center md:text-left">
          “Technology is best when it brings people together.” — Matt Mullenweg
        </p>

        {/* Iconos sociales */}
        <div className="flex space-x-6 text-2xl">
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
    </footer>
  );
}
