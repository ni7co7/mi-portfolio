'use client';
import { useLanguage } from '@/context/LanguageContext';
export default function Proyects() {

  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-4 md:px-12 lg:px-32 py-10 text-center" id="projects">
      <div className="container mx-auto px-">
        <h2 className="text-4xl md:text-7xl lg:text-9xl text-center md:text-left font-bold leading-tight">{t.projectsTitle}</h2>

        <div className="grid lg:grid-cols-2 gap-20">
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
              <h3 className=" text-4xl md:text-7xl lg:text-9xl text-slate-500  font-semibold mb-2">MG Studio</h3>
              <p className="text-4xl md:text-7xl lg:text-4xl text-gray-600 mb-4">
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
              <h3 className="text-slate-500 text-4xl md:text-7xl lg:text-9xlfont-semibold mb-2">E-commerce</h3>
              <p className="text-4xl md:text-7xl lg:text-4xl  text-gray-600 mb-4">
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
              <h3 className="text-slate-500 text-4xl md:text-7xl lg:text-9xlfont-semibold mb-2">Techno Precios</h3>
              <p className=" text-4xl md:text-7xl lg:text-4xl  text-gray-600 mb-4">
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
              <h3 className="text-slate-500 text-4xl md:text-7xl lg:text-9xl font-semibold mb-2">El Blog Del Piano</h3>
              <p className="text-4xl md:text-7xl lg:text-4xl text-gray-600 mb-4">
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
              <h3 className="text-slate-500 text-4xl md:text-7xl lg:text-4xl font-semibold mb-2">Estanterías Comerciales</h3>
              <p className=" text-4xl md:text-7xl lg:text-4xl text-gray-600 mb-4">
                  An app Store + Crud / SQL. Develop in Android Studio. Comercial Industries and Office Shelving business.
                  Implementes radio buttons for select type of material and text inputs for dimension. Calculates prices automatically. Data base manage information of clients, products stock, pay methods and orders.
              </p>
              <a
                href="https://www.linkedin.com/posts/nicogian_ugcPost-7443802344120610816-EXau?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54zTsBruuUSFXZJ7rPPqQOFdTZAQsXskU"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-violet-500 bg-white text-violet-500 px-4 py-2 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 mt-auto"
              >
                See
              </a>
            </div>
          </div>



           {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="w-full h-150 overflow-hidden">
                                                                                    
             <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7444121162080665600?collapsed=1" 
             height="442" 
             width="504" 
             frameborder="0" 
             allowfullscreen="" 
             title="Publicación integrada">

             </iframe>        
             
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-slate-500 text-4xl md:text-7xl lg:text-4xl font-semibold mb-2">Apuntador de Acordes</h3>
              <p className=" text-4xl md:text-7xl lg:text-4xl text-gray-600 mb-4">
                  App for practicing piano chords. Develop in Android Studio. You can record any chord and save those armonics sequences you are looking for. 
              </p>
              <a
                href="https://www.linkedin.com/posts/nicogian_activity-7444121194230046720-CIGT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC54zTsBruuUSFXZJ7rPPqQOFdTZAQsXskU"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-violet-500 bg-white text-violet-500 px-4 py-2 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-300 mt-auto"
              >
                See
              </a>
            </div>
          </div>
         
           {/* Card 7 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="w-full h-150 overflow-hidden">
                                                                                    
             
             <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7444147612879974400?collapsed=1" height="442" width="504" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-slate-500 text-4xl md:text-7xl lg:text-9xlfont-semibold mb-2">IAT</h3>
              <p className="text-4xl md:text-7xl lg:text-4xl text-gray-600 mb-4">
                  Desktop App. Implicit Association Test. Develop whith pure Js. You can create your own test with your own categories and stimuli. It calculates the average response time for each category and shows the results in a table.  
              </p>
              <a
                href="https://steady-lolly-4491c1.netlify.app/"
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
