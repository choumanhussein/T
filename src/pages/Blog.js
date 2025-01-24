import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import blogsData from '../data/blogs';

const GlobalStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float 6s ease-in-out infinite;
      animation-delay: -3s;
    }
    .animate-fade-in {
      opacity: 0;
      animation: fadeIn 1s ease-out forwards;
    }
    .animate-fade-in-delayed {
      opacity: 0;
      animation: fadeIn 1s ease-out forwards;
      animation-delay: 0.3s;
    }
    .animate-fade-in-up {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 1s ease-out forwards;
    }
    @keyframes fadeIn {
      to { opacity: 1; }
    }
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
);

function BlogList() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <GlobalStyles />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            Le Blog du Tarot
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-white/90 animate-fade-in-delayed">
            Explorez l'univers fascinant du tarot à travers nos articles détaillés
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <Link
              key={blog._id}
              to={`${blog.slug}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
            >
              <div className="relative h-48 overflow-hidden bg-yellow-100">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🌟</div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                  {blog.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-yellow-600 hover:text-yellow-700 transition-colors duration-200">
                      Lire la suite →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <Routes>
      <Route path="" element={<BlogList />} />
      <Route path=":slug" element={<BlogPost blogs={blogsData} />} />
    </Routes>
  );
}

export default Blog;