'use client';
import { useLanguage } from '../context/LanguageContext';
import Proyects from "./proyects/page"; 
import Technologies from "./technologies/page";
import AboutPage from "./about/page";
import Footer from "./footer/footer";

export default function HomePage(){
    const { t, cambiarIdioma, idioma } = useLanguage();
    
    return (
        // Quitamos el p-56 fijo y usamos padding dinámico: 
        // px-4 en móviles, px-12 en tablets, px-32 en desktop.
        <div className="container mx-auto px-4 md:px-12 lg:px-32 py-10 text-center">

            <div className="flex justify-center md:justify-end">
                <button 
                    onClick={cambiarIdioma}
                    className="mb-10 p-2 border border-violet-500 rounded text-violet-500 hover:bg-violet-50 text-sm md:text-base transition-all"
                >
                    {idioma === 'en' ? 'Pasar a Castellano' : 'Switch to English'}
                </button>
            </div>

            {/* Título: 4xl en móvil, 7xl en tablet, 9xl en desktop */}
            <h1 className="text-4xl md:text-7xl lg:text-9xl text-center md:text-left font-bold leading-tight">
                {t.welcome}
            </h1>

            {/* Párrafo: xl en móvil, 3xl en tablet, 5xl en desktop. Reducimos el padding exagerado. */}
            <p className="text-slate-500 py-12 md:py-24 text-xl md:text-3xl lg:text-5xl leading-relaxed">
                {t.description}
            </p>
            
            {/* Contenedor de botones para que se apilen en móvil */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
                <a
                    href="https://drive.google.com/file/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto border-2 border-violet-500 bg-white text-violet-500 px-8 py-4 text-lg rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300"
                >
                    {t.resumeBtn}
                </a>
                <a
                    href="https://drive.google.com/file/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto border-2 border-violet-500 bg-white text-violet-500 px-8 py-4 text-lg rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300"
                >
                    {t.resumeBtn2}
                </a>
            </div>

            {/* Secciones secundarias */}
            <div className="space-y-20">
                <Proyects/>
                <Technologies/>
                <AboutPage />
                <Footer/>
            </div>
        </div>
    );}