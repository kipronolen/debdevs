
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { Check, Code, Search, Settings, Monitor, ShoppingCart, ArrowRight } from "lucide-react";

const Home = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "WebDevs completely transformed our dental practice's online presence. Our appointment bookings increased by 60% in just two months!",
      author: "Dr. Sarah Johnson",
      position: "Principal Dentist, Smile Care Dental Clinic",
    },
    {
      quote: "As a hospital administrator, I needed a website that was both professional and user-friendly. WebDevs delivered beyond our expectations.",
      author: "Michael Anderson",
      position: "Director, Metro Health Hospital",
    },
    {
      quote: "Our NGO's donation rates improved significantly after WebDevs redesigned our website with a focus on user experience and storytelling.",
      author: "Olivia Parker",
      position: "Executive Director, Hope Foundation",
    },
  ];

  // Industries we serve
  const industries = [
    {
      name: "Dentists & Dental Clinics",
      description: "Custom websites with appointment booking systems and patient portals.",
      image: "public/lovable-uploads/hero11.jpg",
    },
    {
      name: "Hospitals & Healthcare",
      description: "HIPAA-compliant websites with doctor directories and patient information systems.",
      image: "/public/lovable-uploads/hero8.jpg",
    },
    {
      name: "NGOs & Nonprofits",
      description: "Impactful websites with donation portals, event calendars, and volunteer sign-ups.",
      image: "/public/lovable-uploads/Ngo.jpg",
    },
    {
      name: "Local Businesses",
      description: "Business-boosting websites with Google My Business integration and service displays.",
      image: "/public/lovable-uploads/local business.jpg", 
    },
  ];

  // Featured services
  const services = [
    {
      title: "Web Design",
      description: "Custom, responsive designs tailored to your brand and industry needs.",
      icon: <Monitor className="h-12 w-12 text-webdevs-500" />,
    },
    {
      title: "Web Development",
      description: "Robust, scalable development with the latest technologies and best practices.",
      icon: <Code className="h-12 w-12 text-webdevs-500" />,
    },
    {
      title: "SEO Optimization",
      description: "Data-driven SEO strategies to boost your visibility and drive organic traffic.",
      icon: <Search className="h-12 w-12 text-webdevs-500" />,
    },
    {
      title: "Website Maintenance",
      description: "Regular updates, security monitoring, and technical support for your website.",
      icon: <Settings className="h-12 w-12 text-webdevs-500" />,
    },
    {
      title: "E-commerce Solutions",
      description: "Full-featured online stores with secure payment processing and inventory management.",
      icon: <ShoppingCart className="h-12 w-12 text-webdevs-500" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
    {/* Hero Section */}
    <section className="relative h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left Image Panel */}
      <div className="lg:w-1/2 w-full h-1/2 lg:h-full relative">
        <img 
          src="/lovable-uploads/hero.jpg" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Panel */}
      <div className="lg:w-1/2 w-full h-1/2 lg:h-full bg-[#000033] flex items-center justify-center text-center px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Web Design & Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 animate-fade-in">
            We build industry-specific, SEO-driven websites that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link
              to="/contact"
              className="bg-white text-webdevs-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Get Your Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>


      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose WebDevs?</h2>
            <p className="section-subtitle">
              We combine industry expertise, cutting-edge technology, and customer-focused strategies to deliver exceptional web solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card animate-fade-in">
              <div className="mb-4">
                <div className="bg-webdevs-100 p-3 rounded-full inline-block">
                  <Monitor className="h-6 w-6 text-webdevs-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-webdevs-800">Industry-Specific Designs</h3>
              <p className="text-gray-600">
                Websites tailored to your industry's unique requirements and customer expectations.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="mb-4">
                <div className="bg-webdevs-100 p-3 rounded-full inline-block">
                  <Search className="h-6 w-6 text-webdevs-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-webdevs-800">SEO-Driven Development</h3>
              <p className="text-gray-600">
                Every website is built with SEO best practices to maximize your online visibility.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="mb-4">
                <div className="bg-webdevs-100 p-3 rounded-full inline-block">
                  <Settings className="h-6 w-6 text-webdevs-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-webdevs-800">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock technical support and maintenance for your peace of mind.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="mb-4">
                <div className="bg-webdevs-100 p-3 rounded-full inline-block">
                  <Code className="h-6 w-6 text-webdevs-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-webdevs-800">Mobile-Responsive</h3>
              <p className="text-gray-600">
                Websites that look and function perfectly on all devices, from desktops to smartphones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive web design and development solutions to meet all your digital needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-webdevs-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-webdevs-600 font-medium inline-flex items-center hover:text-webdevs-700"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-primary"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Specialized web solutions for different sectors, tailored to your unique industry needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >

                <div className="md:w-2/5">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-64 md:h-full object-cover"
                  /> 
                </div> 
                {/* Improved version with height constraints */}
 
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-3 text-webdevs-800">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <Link 
                    to="/industries" 
                    className="text-webdevs-600 font-medium inline-flex items-center hover:text-webdevs-700 mt-auto"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/industries"
              className="btn-primary"
            >
              Explore All Industries
            </Link>
          </div>
        </div>
      </section> 

      {/* Testimonials */}
      <section className="section-padding bg-webdevs-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl md:text-2xl text-webdevs-100 mb-12 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-webdevs-700 p-8 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 text-5xl text-webdevs-300">"</div>
                <p className="text-lg mb-6 text-gray-200 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-webdevs-300">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Home;
