import React from "react";
import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github, Share2, ArrowLeft } from "lucide-react";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Project not found
        </h2>
        <Link to="/" className="text-blue-600 dark:text-blue-400 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Project link copied to clipboard!");
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
       rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors w-auto"
          >
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </div>

        {/* Image + Brief */}
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white uppercase">
            {project.title}
          </h1>
          <figure className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </figure>
          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.links?.live}
              target="_blank"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={18} className="inline-block mr-2" /> Live Demo
            </a>
            <a
              href={project.links?.github}
              target="_blank"
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg text-center hover:bg-gray-900 transition-colors"
            >
              <Github size={18} className="inline-block mr-2" /> GitHub
            </a>
            <button
              onClick={handleShare}
              className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Share2 size={18} className="inline-block mr-2" /> Share
            </button>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300">
            {project.brief}
          </p>
        </div>

        {/* Two-column grid for all sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "User Stories", items: project.userStories },
            { title: "Pages", items: project.pages },
            { title: "Process", items: project.process },
            { title: "Features", items: project.features },
            { title: "Built With", items: project.builtWith },
          ].map(
            (section) =>
              section.items && (
                <div
                  key={section.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-2xl font-semibold dark:text-white mb-3">
                    {section.title}
                  </h2>
                  {Array.isArray(section.items) ? (
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300">
                      {section.items}
                    </p>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
