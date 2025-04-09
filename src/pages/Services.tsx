
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { Monitor, Code, Search, Settings, ShoppingCart, Database, Check } from "lucide-react";

const Services = () => {
  // Service details
  const services = [
    {
      id: "web-design",
      title: "Web Design",
      description: "We create stunning, responsive websites that reflect your brand and engage your audience.",
      icon: <Monitor className="h-12 w-12 text-webdevs-500" />,
      features: [
        "Responsive designs that work on all devices",
        "User-centered interfaces for optimal experience",
        "Custom visuals and graphics tailored to your brand",
        "Industry-specific layouts and elements",
        "Accessibility compliance for all users",
        "Fast loading and optimized performance",
      ],
      image: "https://webdevs.co.ke/lovable-uploads/webdesign2.webp",
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Our developers build robust, scalable websites and applications using the latest technologies.",
      icon: <Code className="h-12 w-12 text-webdevs-500" />,
      features: [
        "Custom coding tailored to your specific needs",
        "Content Management System (CMS) integration",
        "E-commerce functionality and payment gateways",
        "Advanced security features and SSL implementation",
        "Database design and optimization",
        "API development and third-party integrations",
      ],
      image: "https://webdevs.co.ke/lovable-uploads/webdevelopment.webp",
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "We boost your online visibility with data-driven SEO strategies that drive organic traffic.",
      icon: <Search className="h-12 w-12 text-webdevs-500" />,
      features: [
        "Comprehensive keyword research and analysis",
        "On-page SEO optimization for better rankings",
        "Technical SEO to improve site performance",
        "Content strategy development for organic traffic",
        "Local SEO for businesses serving specific areas",
        "Regular reporting and performance tracking",
      ],
      image: "https://webdevs.co.ke/lovable-uploads/seo.webp",
    },
    {
      id: "maintenance",
      title: "Website Maintenance & Support",
      description: "We keep your website secure, updated, and running smoothly with our comprehensive maintenance services.",
      icon: <Settings className="h-12 w-12 text-webdevs-500" />,
      features: [
        "Regular software and security updates",
        "Backup and recovery services",
        "Performance monitoring and optimization",
        "Content updates and management",
        "24/7 technical support and troubleshooting",
        "Regular website health reports",
      ],
      image: "https://webdevs.co.ke/lovable-uploads/Webdesign.webp",
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description: "We build powerful online stores that drive sales and provide exceptional shopping experiences.",
      icon: <ShoppingCart className="h-12 w-12 text-webdevs-500" />,
      features: [
        "Custom e-commerce website development",
        "Secure payment gateway integration",
        "Inventory and order management systems",
        "Mobile-responsive shopping experiences",
        "Product showcase and catalog management",
        "Customer account and wish list functionality",
      ],
      image: "https://webdevs.co.ke/lovable-uploads/ecommerce.webp",
    },
    {
      id: "integrations",
      title: "Custom Integrations",
      description: "We connect your website with third-party systems and services to streamline your business operations.",
      icon: <Database className="h-12 w-12 text-webdevs-500" />,
      features: [
        "CRM system integration for customer management",
        "Booking and appointment systems",
        "Payment processor and accounting software connections",
        "Email marketing platform integration",
        "Social media platform connectivity",
        "Custom API development and implementation",
      ],
      image: "https://webdevs.co.ke/lovable-uploads/customization.webp",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-webdevs-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-webdevs-100 mb-10 max-w-3xl mx-auto animate-fade-in">
            Comprehensive web solutions designed to help your business thrive online.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-webdevs-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={`#${service.id}`} 
                  className="text-webdevs-600 font-medium hover:text-webdevs-700"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section 
          key={index} 
          id={service.id} 
          className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`animate-fade-in ${index % 2 !== 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-webdevs-800">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="h-6 w-6 text-webdevs-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
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
                  src={service.image} 
                  alt={service.title} 
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

export default Services;
