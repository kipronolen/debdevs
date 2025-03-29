
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import CTA from "../components/CTA";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Why Dentists Need Mobile-Friendly Websites in 2024",
      category: "Web Design",
      date: "April 15, 2024",
      author: "Jane Smith",
      excerpt: "Learn why having a mobile-friendly website is crucial for dental practices and how it can significantly increase new patient appointments.",
      image: "/lovable-uploads/3fff1e0f-72bc-4084-b7fe-364f6328ce51.png",
      tags: ["dental", "mobile", "design"],
    },
    {
      id: 2,
      title: "Top 5 SEO Tips for Local Businesses",
      category: "SEO",
      date: "April 10, 2024",
      author: "Michael Brown",
      excerpt: "Discover the most effective SEO strategies that local businesses can implement to improve their visibility in local search results.",
      image: "/lovable-uploads/d3921895-0318-45b2-8978-84a886830b1e.png",
      tags: ["seo", "local business", "marketing"],
    },
    {
      id: 3,
      title: "How NGOs Can Leverage Websites for Fundraising",
      category: "Web Development",
      date: "April 5, 2024",
      author: "Sarah Johnson",
      excerpt: "Explore how nonprofits can optimize their websites to increase donations, engage supporters, and maximize their online fundraising efforts.",
      image: "/lovable-uploads/d277afc3-613a-48c9-b9c1-2a820ec5be1f.png",
      tags: ["ngo", "fundraising", "donation"],
    },
    {
      id: 4,
      title: "The Importance of Website Security for Healthcare Providers",
      category: "Security",
      date: "March 30, 2024",
      author: "David Wilson",
      excerpt: "Understand why robust website security is essential for healthcare providers and how to ensure HIPAA compliance on your website.",
      image: "/lovable-uploads/33570772-7434-4610-adac-fc92ecd19ffa.png",
      tags: ["healthcare", "security", "hipaa"],
    },
    {
      id: 5,
      title: "Website Accessibility: Why It Matters and How to Achieve It",
      category: "Web Design",
      date: "March 25, 2024",
      author: "Jane Smith",
      excerpt: "Learn about the importance of website accessibility for all users and practical steps to make your website more inclusive.",
      image: "/lovable-uploads/90bb3264-7082-4eea-baf0-d8d85843d1bd.png",
      tags: ["accessibility", "design", "inclusion"],
    },
    {
      id: 6,
      title: "E-commerce Trends to Watch in 2024",
      category: "E-commerce",
      date: "March 20, 2024",
      author: "Michael Brown",
      excerpt: "Stay ahead of the competition by knowing the latest e-commerce trends and how they can benefit your online store.",
      image: "/lovable-uploads/48157cec-1150-40d5-8c7d-2bf6b496c874.png",
      tags: ["ecommerce", "trends", "online shopping"],
    },
    {
      id: 7,
      title: "The Role of Content in SEO: Best Practices for 2024",
      category: "SEO",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      excerpt: "Discover how quality content contributes to your SEO success and the best content practices to improve your rankings.",
      image: "/lovable-uploads/d3921895-0318-45b2-8978-84a886830b1e.png",
      tags: ["seo", "content", "marketing"],
    },
    {
      id: 8,
      title: "How Fast Loading Speed Affects Your Website's Success",
      category: "Web Development",
      date: "March 10, 2024",
      author: "David Wilson",
      excerpt: "Understand why website speed is crucial for user experience and search engine rankings, and how to optimize your site's performance.",
      image: "/lovable-uploads/a5e63c67-9512-4b35-ac21-132a268705d8.png",
      tags: ["performance", "speed", "optimization"],
    },
  ];
  
  // Categories for sidebar
  const categories = [
    { name: "Web Design", count: 2 },
    { name: "Web Development", count: 2 },
    { name: "SEO", count: 2 },
    { name: "E-commerce", count: 1 },
    { name: "Security", count: 1 },
  ];
  
  // Popular tags
  const popularTags = [
    "seo", "design", "healthcare", "dental", "ngo", "performance", "security", "marketing", "local business", "ecommerce"
  ];
  
  // Filter posts based on search term
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-webdevs-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-webdevs-100 mb-10 max-w-3xl mx-auto animate-fade-in">
            Insights, tips, and industry expertise to help you succeed online.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search Bar (Mobile) */}
              <div className="mb-8 lg:hidden">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-webdevs-500"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              
              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-md card-hover animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-medium text-webdevs-600 bg-webdevs-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-webdevs-800">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <User className="h-4 w-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-webdevs-600 font-medium inline-flex items-center hover:text-webdevs-700"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* No Results Message */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">No posts found</h3>
                  <p className="text-gray-500 mb-6">Try different search terms or browse all articles.</p>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="bg-webdevs-600 text-white px-6 py-2 rounded-lg hover:bg-webdevs-700 transition-colors"
                  >
                    View All Posts
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search Bar (Desktop) */}
              <div className="hidden lg:block mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-webdevs-500"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4 text-webdevs-800">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                      <button 
                        onClick={() => setSearchTerm(category.name)}
                        className="flex justify-between items-center w-full text-left hover:text-webdevs-600 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-webdevs-50 text-webdevs-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4 text-webdevs-800">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="bg-gray-100 hover:bg-webdevs-50 text-gray-700 hover:text-webdevs-600 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Featured Post */}
              <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
                <h3 className="text-xl font-semibold mb-4 text-webdevs-800">Featured Post</h3>
                <div className="bg-webdevs-50 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/d3921895-0318-45b2-8978-84a886830b1e.png" 
                    alt="Featured Post" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-webdevs-800 mb-2">The Future of Web Design: Trends to Watch</h4>
                    <p className="text-sm text-gray-600 mb-4">Explore the emerging trends that will shape the future of web design and user experience.</p>
                    <Link 
                      to="/blog/featured" 
                      className="text-webdevs-600 font-medium inline-flex items-center hover:text-webdevs-700 text-sm"
                    >
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-webdevs-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-webdevs-800">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest articles, resources, and insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-webdevs-500"
                required
              />
              <button
                type="submit"
                className="bg-webdevs-600 hover:bg-webdevs-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Blog;
