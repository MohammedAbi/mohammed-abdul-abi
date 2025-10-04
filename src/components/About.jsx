import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-left mb-6 text-gray-900 dark:text-white animate-fade-in">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a Front-End Developer with 4+ years of experience building
              responsive, user-friendly web apps. My journey started when I put
              together my first PC from scratch, and ever since, I've been
              hooked on creating digital experiences that actually make a
              difference for people.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I focus on JavaScript/TypeScript, React, Node.js, and the latest
              web technologies. I may not know everything, but I’m always
              learning and love figuring out new tools to build better, smoother
              web experiences.
            </p>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              alt="Professional headshot"
              className="rounded-lg shadow-xl w-5/6 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
