
import { useState } from "react";
import CTA from "../components/CTA";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  // Portfolio projects
  const projects = [
    {
      title: "Smile Care Dental Clinic",
      category: "dental",
      description: "A modern website for a dental practice with online appointment booking and patient portal.",
      results: "50% increase in new patient appointments within 3 months.",
      image: "/lovable-uploads/3fff1e0f-72bc-4084-b7fe-364f6328ce51.png",
    },
    {
      title: "Metro Health Hospital",
      category: "healthcare",
      description: "A comprehensive website for a hospital with doctor directories and patient information.",
      results: "Improved user engagement by 65% and reduced phone inquiries by 40%.",
      image: "/lovable-uploads/33570772-7434-4610-adac-fc92ecd19ffa.png",
    },
    {
      title: "Hope Foundation",
      category: "ngo",
      description: "An inspiring website for an NGO with donation portal and volunteer sign-up.",
      results: "30% increase in online donations and 45% more volunteer applications.",
      image: "/lovable-uploads/d277afc3-613a-48c9-b9c1-2a820ec5be1f.png",
    },
    {
      title: "Local Cafe",
      category: "local",
      description: "A vibrant website for a local cafe with menu, location, and online ordering.",
      results: "25% increase in walk-in customers and 35% growth in online orders.",
      image: "/lovable-uploads/48157cec-1150-40d5-8c7d-2bf6b496c874.png",
    },
    {
      title: "Wellness Dental",
      category: "dental",
      description: "A patient-focused website for a dental clinic with virtual tour and service information.",
      results: "60% increase in website traffic and 45% growth in service inquiries.",
      image: "/lovable-uploads/1b124c57-4e05-422a-bb8e-4fd76ab40de5.png",
    },
    {
      title: "Community Hospital",
      category: "healthcare",
      description: "A user-friendly website for a community hospital with emergency information and patient resources.",
      results: "Reduced patient information calls by 50% and improved online form submissions by 70%.",
      image: "/lovable-uploads/90bb3264-7082-4eea-baf0-d8d85843d1bd.png",
    },
    {
      title: "Environmental Trust",
      category: "ngo",
      description: "A compelling website for an environmental NGO with donation system and impact reporting.",
      results: "40% increase in recurring donations and 65% more newsletter subscribers.",
      image: "/lovable-uploads/a5e63c67-9512-4b35-ac21-132a268705d8.png",
    },
    {
      title: "Downtown Retail Shop",
      category: "local",
      description: "An attractive website for a local retail shop with product catalog and local SEO optimization.",
      results: "35% increase in store visits and 50% growth in online inquiries.",
      image: "/lovable-uploads/d3921895-0318-45b2-8978-84a886830b1e.png",
    },
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-webdevs-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-webdevs-100 mb-10 max-w-3xl mx-auto animate-fade-in">
            Explore our successful projects and see how we've helped businesses transform their online presence.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter("all")} 
              className={`px-6 py-2 rounded-full ${
                filter === "all" 
                  ? "bg-webdevs-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter("dental")} 
              className={`px-6 py-2 rounded-full ${
                filter === "dental" 
                  ? "bg-webdevs-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              Dental
            </button>
            <button 
              onClick={() => setFilter("healthcare")} 
              className={`px-6 py-2 rounded-full ${
                filter === "healthcare" 
                  ? "bg-webdevs-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              Healthcare
            </button>
            <button 
              onClick={() => setFilter("ngo")} 
              className={`px-6 py-2 rounded-full ${
                filter === "ngo" 
                  ? "bg-webdevs-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              NGOs
            </button>
            <button 
              onClick={() => setFilter("local")} 
              className={`px-6 py-2 rounded-full ${
                filter === "local" 
                  ? "bg-webdevs-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              Local Business
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-webdevs-600 text-white text-sm py-1 px-3 rounded-full">
                    {project.category === "dental" && "Dental"}
                    {project.category === "healthcare" && "Healthcare"}
                    {project.category === "ngo" && "NGO"}
                    {project.category === "local" && "Local Business"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-webdevs-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="bg-webdevs-50 p-4 rounded-lg">
                    <p className="font-semibold text-webdevs-800">Results:</p>
                    <p className="text-webdevs-600">{project.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="section-padding bg-webdevs-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl text-webdevs-300 mb-6">"</div>
            <p className="text-xl md:text-2xl mb-8 text-white italic">
              Working with WebDevs was a game-changer for our business. Their team took the time to understand our unique needs and created a website that perfectly represents our brand and services. The results have exceeded our expectations in every way.
            </p>
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/1b124c57-4e05-422a-bb8e-4fd76ab40de5.png" 
                alt="Client" 
                className="w-16 h-16 rounded-full object-cover border-2 border-webdevs-400"
              />
              <div className="ml-4 text-left">
                <p className="font-semibold text-white">Rebecca Thompson</p>
                <p className="text-webdevs-300">CEO, Thompson Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Portfolio;
