
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000033] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://webdevs.co.ke/lovable-uploads/logo5.png" 
                alt="WebDevs Logo" 
                className="h-20 md:h-24"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Transforming your online presence with expert web design & development solutions tailored to your industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-webdevs-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-webdevs-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-webdevs-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-webdevs-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-6 border-b border-webdevs-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link></li>
              {/*<li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>*/}
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-xl mb-6 border-b border-webdevs-700 pb-2">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Web Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Website Maintenance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">E-commerce Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Custom Integrations</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-xl mb-6 border-b border-webdevs-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-webdevs-400" />
                <span className="text-gray-300">Umoja Phase one L32, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-webdevs-400" />
                <a href="tel:+254715264326" className="text-gray-300 hover:text-white transition-colors">+254 715 264 326</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-webdevs-400" />
                <a href="mailto:info@webdevs.co.ke" className="text-gray-300 hover:text-white transition-colors">info@webdevs.co.ke</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-webdevs-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} WebDevs. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
