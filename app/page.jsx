import Proyects from "./proyects/page"; 
import Technologies from "./technologies/page";
import AboutPage from "./about/page";
import Footer from "./footer/footer";

export default function HomePage(){
    return (
        <div className="p-56">
            <h1 className="text-9xl">Welcome to my personal portfolio</h1>
            <p className="text-slate-500 p-24 text-5xl">
                My name is Nicolás Gianfelici Mornacco. I´m a Software Developer and Systems Analyst.
            </p>
            
            <a
                href="https://drive.google.com/file/d/1tmQevf-HTzeNcPYQeGxtutdA2YzcKnQF/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-violet-500 bg-white text-violet-500 px-6 py-3 text-lg rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 inline-block"
            >
                Resume
            </a>

            <Proyects/>
            <Technologies/>
            <AboutPage />
            <Footer/>
        </div>
    );
}
