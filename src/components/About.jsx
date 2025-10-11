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
              I’m a front-end developer with 4+ years of experience building
              responsive, user-friendly web apps. I got into tech after building
              my first PC from scratch, and that curiosity quickly turned into a
              passion for creating digital experiences that actually help
              people.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I focus on JavaScript, TypeScript, React, and Node.js, and I’m
              always looking for ways to improve how I build and think about the
              web. I don’t claim to know everything, but I’m driven to keep
              learning, stay curious, and deliver work I can be proud of.
            </p>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="../about.png"
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
