
import CTA from "../components/CTA";
import { Users, Award, Target } from "lucide-react";

const About = () => {
  // Team members data
  {/*const teamMembers = [
    {
      name: "Jane Smith",
      position: "CEO & Lead Designer",
      bio: "Jane has over 15 years of experience in web design and digital marketing.",
      image: "/lovable-uploads/1b124c57-4e05-422a-bb8e-4fd76ab40de5.png", 
    },
    {
      name: "David Wilson",
      position: "Lead Developer",
      bio: "David specializes in frontend and backend development with expertise in React and Node.js.",
      image: "/lovable-uploads/48157cec-1150-40d5-8c7d-2bf6b496c874.png",
    },
    {
      name: "Sarah Johnson",
      position: "SEO Specialist",
      bio: "Sarah helps clients achieve top rankings with her data-driven SEO strategies.",
      image: "/lovable-uploads/33570772-7434-4610-adac-fc92ecd19ffa.png",
    },
    {
      name: "Michael Brown",
      position: "Project Manager",
      bio: "Michael ensures projects are delivered on-time and exceed client expectations.",
      image: "/lovable-uploads/d277afc3-613a-48c9-b9c1-2a820ec5be1f.png",
    },
  ];*/}

  // Awards and certifications
 {/* const awards = [
    {
      title: "Google Partner",
      description: "Certified Google Partner with expertise in Google Ads and Analytics.",
    },
    {
      title: "Clutch Top Developer 2023",
      description: "Recognized as a top web development company.",
    },
    {
      title: "CSS Design Awards",
      description: "Multiple awards for exceptional website design and user experience.",
    },
    {
      title: "Best SEO Agency - East Africa",
      description: "Awarded for outstanding SEO results and client satisfaction.",
    },
  ];*/}

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-webdevs-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            About WebDevs
          </h1>
          <p className="text-xl md:text-2xl text-webdevs-100 mb-10 max-w-3xl mx-auto animate-fade-in">
            We're a passionate team of web designers, developers, and digital strategists dedicated to your success.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-webdevs-800">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                WebDevs started with a simple mission: to make high-quality web design and development accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've served clients across East Africa and beyond. Our journey has been defined by a commitment to excellence, innovation, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700">
                Today, we specialize in creating industry-specific websites that not only look great but also drive tangible business results. We're proud to have helped hundreds of businesses establish and enhance their online presence.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://webdevs.co.ke/lovable-uploads/local business.webp" 
                alt="WebDevs Team" 
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-webdevs-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">5+ Years</p>
                <p>of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Mission & Values</h2>
            <p className="section-subtitle">
              Our mission and values guide everything we do, from how we work to how we treat our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
              <div className="mb-6">
                <div className="bg-webdevs-100 p-4 rounded-full inline-block">
                  <Target className="h-8 w-8 text-webdevs-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-webdevs-800">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with web solutions that drive growth, enhance brand visibility, and deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="mb-6">
                <div className="bg-webdevs-100 p-4 rounded-full inline-block">
                  <Users className="h-8 w-8 text-webdevs-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-webdevs-800">Client-Centric</h3>
              <p className="text-gray-600">
                We prioritize our clients' needs and goals, working collaboratively to deliver solutions that exceed expectations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="mb-6">
                <div className="bg-webdevs-100 p-4 rounded-full inline-block">
                  <Award className="h-8 w-8 text-webdevs-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-webdevs-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from design and development to customer service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      {/*<section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">
              The talented individuals behind our exceptional web solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md animate-fade-in card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-webdevs-800">{member.name}</h3>
                  <p className="text-webdevs-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Awards & Certifications */}
      {/*<section className="section-padding bg-gradient-to-br from-webdevs-800 to-webdevs-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Awards & Certifications
            </h2>
            <p className="text-xl md:text-2xl text-webdevs-100 mb-12 max-w-3xl mx-auto">
              Recognition of our commitment to excellence and industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="bg-webdevs-700/50 backdrop-blur-sm p-8 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <Award className="h-10 w-10 text-webdevs-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{award.title}</h3>
                <p className="text-webdevs-100">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default About;
