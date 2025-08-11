import {
  FaGitAlt,
  FaGithub,
  FaMicrosoft,
  FaJsSquare,
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiSequelize } from "react-icons/si";

export default function Technologies() {
  return (
    <section className="py-20 bg-gray-50" id="technologies">
      <div className="container mx-auto px-6">
        <h2 className="text-9xl font-bold mb-16">Technologies</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* General Tech */}
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-4xl font-semibold mb-4">General Tech</h3>
            <div className="flex justify-center space-x-6 text-5xl text-violet-600 mb-4">
              <FaGitAlt title="Git" />
              <FaGithub title="GitHub" />
              <FaMicrosoft title="Azure DevOps" />
            </div>
            <p className="text-gray-700">
              Git, GitHub y Azure DevOps para control de versiones y CI/CD.
            </p>
          </div>

          {/* Frontend */}
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-4xl font-semibold mb-4">Front End</h3>
            <div className="flex justify-center space-x-6 text-5xl text-green-500 mb-4">
              <FaJsSquare title="JavaScript" />
              <FaVuejs title="Vue.js" />
              <FaReact title="React" />
            </div>
            <p className="text-gray-700">
              JavaScript, Vue.js y React para construir interfaces dinámicas y modernas.
            </p>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-4xl font-semibold mb-4">Back End</h3>
            <div className="flex justify-center space-x-6 text-5xl text-green-700 mb-4">
              <FaNodeJs title="Node.js" />
              <SiExpress title="Express" />
              <SiSequelize title="Sequelize" />
            </div>
            <p className="text-gray-700">
              Node.js, Express y Sequelize para crear APIs robustas y eficientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
