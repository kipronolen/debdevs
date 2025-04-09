
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { Check } from "lucide-react";

const Industries = () => {
  // Industries we serve
  const industries = [
    {
      id: "dental",
      title: "Dentists & Dental Clinics",
      description: "Custom website solutions designed specifically for dental practices, featuring appointment booking systems, patient portals, and service showcases.",
      features: [
        "Online appointment booking systems",
        "Patient portal with secure information access",
        "Responsive design that looks great on all devices",
        "Service pages that showcase your treatments",
        "Integration with dental practice management software",
        "SEO optimized for local dental keywords",
      ],
      benefits: [
        "Increase new patient appointments",
        "Reduce administrative workload",
        "Improve patient communication",
        "Build trust with professional online presence",
        "Showcase before/after results and testimonials",
      ],
      image: "https://webdevs.co.ke/public/lovable-uploads/hero11.webp",
    },
    {
      id: "healthcare",
      title: "Hospitals & Healthcare",
      description: "HIPAA-compliant websites for healthcare organizations, featuring doctor directories, patient information systems, and emergency contact integration.",
      features: [
        "HIPAA-compliant design and security measures",
        "Comprehensive doctor and department directories",
        "Patient information and resource centers",
        "Emergency contact and location information",
        "News and updates section for health information",
        "Mobile-responsive for patients on the go",
      ],
      benefits: [
        "Improve patient experience and communication",
        "Streamline administrative processes",
        "Ensure regulatory compliance",
        "Enhance professional reputation",
        "Provide crucial information during emergencies",
      ],
      image: "https://webdevs.co.ke/lovable-uploads/hero8.webp",
    },
    {
      id: "ngo",
      title: "NGOs & Nonprofits",
      description: "Impact-focused websites for nonprofits with donation portals, event calendars, volunteer sign-ups, and compelling storytelling elements.",
      features: [
        "Secure and seamless donation portals",
        "Volunteer registration and management",
        "Event calendars and registration systems",
        "Impact reporting and success stories",
        "Newsletter signup and content management",
        "Multi-language support for global reach",
      ],
      benefits: [
        "Increase donations and fundraising",
        "Improve volunteer recruitment and engagement",
        "Share your mission and impact effectively",
        "Build community around your cause",
        "Reduce administrative burden with automation",
      ],
      image: "https://webdevs.co.ke/lovable-uploads/Ngo.webp",
    },
    {
      id: "local",
      title: "Local Businesses",
      description: "Business-boosting websites for local companies, featuring Google My Business integration, service/menu displays, and review sections.",
      features: [
        "Google My Business and local SEO optimization",
        "Service or product catalogs with attractive displays",
        "Customer review and testimonial sections",
        "Location maps and contact information",
        "Mobile-responsive design for on-the-go customers",
        "Social media integration for community building",
      ],
      benefits: [
        "Increase local visibility and foot traffic",
        "Showcase products and services effectively",
        "Build credibility with reviews and testimonials",
        "Make it easy for customers to find and contact you",
        "Compete effectively with larger businesses online",
      ],
      image: "https://webdevs.co.ke/lovable-uploads/local_business.webp",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-webdevs-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-webdevs-100 mb-10 max-w-3xl mx-auto animate-fade-in">
            Specialized web solutions tailored to the unique needs of your industry.
          </p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Industry Expertise</h2>
            <p className="section-subtitle">
              We understand that different industries have unique requirements and challenges. Our team specializes in creating websites that address these specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-webdevs-800">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <a 
                    href={`#${industry.id}`} 
                    className="text-webdevs-600 font-medium hover:text-webdevs-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industries */}
      {industries.map((industry, index) => (
        <section 
          key={index} 
          id={industry.id} 
          className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`animate-fade-in ${index % 2 !== 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-webdevs-800">
                  {industry.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  {industry.description}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-webdevs-700">Key Features</h3>
                <ul className="space-y-4 mb-8">
                  {industry.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="h-6 w-6 text-webdevs-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-webdevs-700">Benefits</h3>
                <ul className="space-y-4 mb-8">
                  {industry.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start">
                      <Check className="h-6 w-6 text-webdevs-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="btn-primary"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className={`relative animate-fade-in ${index % 2 !== 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute inset-0 bg-webdevs-600/20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Industries;
