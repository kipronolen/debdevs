
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-webdevs-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
          Ready to Grow Your Business?
        </h2>
        <p className="text-webdevs-100 text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in">
          Let's build your dream website together and transform your online presence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Link
            to="/contact"
            className="bg-white text-webdevs-600 hover:bg-webdevs-50 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
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
    </section>
  );
};

export default CTA;
