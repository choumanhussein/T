import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BlogPost({ blogs }) {
  const { slug } = useParams();
  
  if (!blogs) {
    return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="container mx-auto px-4 py-16">
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="container mx-auto px-4 py-16">
          <p>Article non trouvé</p>
          <Link to=".." className="text-yellow-600 hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        <Link to=".." className="text-yellow-600 hover:underline mb-8 inline-block">
          ← Retour au blog
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-64 overflow-hidden bg-yellow-100">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🌞</div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-4">
              <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                {blog.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              {blog.title}
            </h1>

            <div 
              className="prose max-w-none" 
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />

            <div className="mt-8 text-sm text-gray-500">
              <p>Publié le {new Date(blog.createdAt).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</p>
              {blog.updatedAt && (
                <p>Dernière mise à jour le {new Date(blog.updatedAt).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</p>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    })
  ).isRequired
};

export default BlogPost;