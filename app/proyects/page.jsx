'use client';
import { useLanguage } from '@/context/LanguageContext';
export default function Proyects() {

  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-9xl  mb-16">{t.projectsTitle}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 con iframe */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="w-full h-150 overflow-hidden">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7248574495379099648?collapsed=1"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Publicación integrada"
              ></iframe>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-slate-500 text-5xl font-semibold mb-2">MG Studio</h3>
              <p className="text-2xl text-gray-600 mb-4">
                A personal website developed with React.js and Bulma, optimized for SEO.
              </p>
              <a
                href="https://mgdeveloparquitecture.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-violet-500 bg-white text-violet-500 px-4 py-2 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 mt-auto"
              >
                See
              </a>
            </div>
          </div>

          {/* Card 2 con iframe */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="w-full h-150 overflow-hidden">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7172030338368585728?collapsed=1"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Publicación integrada"
              ></iframe>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-slate-500 text-5xl font-semibold mb-2">E-commerce</h3>
              <p className="text-2xl text-gray-600 mb-4">
                Online store built with React and Firebase, featuring a cart and authentication.
              </p>
              <a
                href="https://imaginative-puppy-481d1c.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-violet-500 bg-white text-violet-500 px-4 py-2 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 mt-auto"
              >
                See
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="w-full h-150 overflow-hidden">
              <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7360438179964813312?collapsed=1" 
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Publicación integrada"
              ></iframe>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-slate-500 text-5xl font-semibold mb-2">Techno Precios</h3>
              <p className="text-2xl text-gray-600 mb-4">
                Online Tech store built with Html, Css and JavaScript. Implementes two modals for search and filter products and services using JASON data base.

              </p>
              <a
                href="https://moviledoctor.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-violet-500 bg-white text-violet-500 px-4 py-2 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 mt-auto"
              >
                See
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="w-full h-150 overflow-hidden">
              <iframe
               src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7360490438610317312?collapsed=1" 
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Publicación integrada"
              ></iframe>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-slate-500 text-5xl font-semibold mb-2">El Blog Del Piano</h3>
              <p className="text-2xl text-gray-600 mb-4">
               Html and Css Blog Page for Piano Lessons.
              </p>
              <a
                href="https://effortless-griffin-35696f.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-violet-500 bg-white text-violet-500 px-4 py-2 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 mt-auto"
              >
                See
              </a>
            </div>
          </div>

          {/* Card 5 */}
        


             
             
             
             
             

           


           {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="w-full h-150 overflow-hidden">
             
             <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7443802344120610816?collapsed=1" 
             height="779"
              width="504" 
              frameborder="0" 
              allowfullscreen="" 
              title="Publicación integrada">
             </iframe>
             
             
             
             
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-slate-500 text-5xl font-semibold mb-2">Estanterías Comerciales</h3>
              <p className="text-2xl text-gray-600 mb-4">
                  An app Store + Crud / SQL. Develop in Android Studio. Comercial Industries and Office Shelving business.
                  Implementes radio buttons for select type of material and text inputs for dimension. Calculates prices automatically. Data base manage information of clients, products stock, pay methods and orders.
              </p>
              <a
                href="https://moviledoctor.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-violet-500 bg-white text-violet-500 px-4 py-2 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 mt-auto"
              >
                See
              </a>
            </div>
          </div>
         





          
        </div>
      </div>
    </section>
  );
}
