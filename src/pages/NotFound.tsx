
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-webdevs-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-webdevs-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-webdevs-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! It seems like the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="bg-webdevs-600 hover:bg-webdevs-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Go Back Home
          </Link>
          <Link
            to="/contact"
            className="bg-transparent text-webdevs-600 border-2 border-webdevs-600 hover:bg-webdevs-50 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
