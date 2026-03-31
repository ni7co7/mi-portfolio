'use client';
import { useLanguage } from '../context/LanguageContext';
import Proyects from "./proyects/page"; 
import Technologies from "./technologies/page";
import AboutPage from "./about/page";
import Footer from "./footer/footer";

export default function HomePage(){
    const { t, cambiarIdioma, idioma } = useLanguage();
    return (
        <div className="container mx-auto px-6 p-10 text-center">

            <button 
                onClick={cambiarIdioma}
                className="mb-10 p-2 border border-violet-500 rounded text-violet-500 hover:bg-violet-50"
            >
                {idioma === 'en' ? 'Pasar a Castellano' : 'Switch to English'}
            </button>
            <h1 className="text-9xl text-left p-10 m-10">{t.welcome }</h1>
            <p className="text-slate-500 p-24 text-5xl">
                {t.description}
            </p>
            
            <a
                href="https://drive.google.com/file/d/1ettEV0AQ0pSAEXBsMixfD5yfnpwjtW6J/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 border-2 border-violet-500 bg-white text-violet-500 px-6 py-3 text-lg rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 inline-block"
            >
                {t.resumeBtn}
            </a>
            <a
                href="https://drive.google.com/file/d/1ettEV0AQ0pSAEXBsMixfD5yfnpwjtW6J/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-violet-500 bg-white text-violet-500 px-6 py-3 text-lg rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 inline-block"
            >
                {t.resumeBtn2}
            </a>


            <Proyects/>
            <Technologies/>
            <AboutPage />
            <Footer/>
        </div>
    );
}
