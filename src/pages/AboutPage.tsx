import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to Cloud-based Pathogen Analysis! This platform is designed to provide advanced tools for pathogen detection, genome analysis, and public health insights.
      </p>
      <p className="text-lg mb-4">
        Our mission is to empower researchers, public health officials, and medical professionals with accessible and powerful bioinformatics tools to combat infectious diseases effectively.
      </p>
      <h2 className="text-3xl font-bold mt-8 mb-4">Our Team</h2>
      <p className="text-lg mb-4">
        This project was developed by a dedicated team of engineers and scientists. I am currently a 2nd-year graduate student in NMAMIT Nitte, passionate about developing innovative solutions in bioinformatics and cloud computing.
      </p>
      <p className="text-lg mb-4">
        Feel free to explore the various features of this application, including NCBI searches, virus and bacteria search, and AI-powered predictions.
      </p>
    </div>
  );
};

export default AboutPage;