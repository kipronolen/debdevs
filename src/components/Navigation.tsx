
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center z-50" onClick={closeMenu}>
          <img 
            src="/lovable-uploads/d3921895-0318-45b2-8978-84a886830b1e.png" 
            alt="WebDevs Logo" 
            className="h-10 md:h-12"
          />
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                isActive(item.path)
                  ? "text-webdevs-600 font-semibold"
                  : `${isScrolled ? "text-gray-700" : "text-white"} hover:text-webdevs-500`
              } transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary"
          >
            Get a Quote
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 text-webdevs-600"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
        
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-webdevs-900/95 flex flex-col justify-center items-center transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xl ${
                  isActive(item.path)
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                } transition-colors duration-300`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-4"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
