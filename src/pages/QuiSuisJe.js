import React, { useState } from 'react';

// Import des images
import cabinetCI from "../image/cabinet-ci.jpg";
import cabinet1989 from "../image/cabinet-1989.jpg";
// import cartePress from "../image/carte-presse.jpg";
import humanitarian from "../image/humanitarian.jpg";
import artPlastique from "../image/art-plastique.jpg";

function TimelineEvent({ year, title, content, image, right = false }) {
  return (
    <div className={`flex flex-col md:flex-row items-stretch gap-8 ${right ? 'md:flex-row-reverse' : ''} opacity-0 animate-fade-in-up`}>
      <div className="w-full md:w-1/2 flex">
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center w-full">
          <span className="text-yellow-600 font-bold">{year}</span>
          <h3 className="text-xl font-bold text-gray-800 mt-2 mb-4">{title}</h3>
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center">
        <div className="w-full aspect-[3/2] relative rounded-xl shadow-lg overflow-hidden group">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
}

function ArticleDownload({ title, pdfUrl }) {
  return (
    <div className="h-full">
      <a 
        href={pdfUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block h-full bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <div className="flex items-center gap-4 h-full">
          <div className="text-yellow-600 text-4xl flex-shrink-0">📄</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <span className="text-yellow-600 hover:text-yellow-700 transition-colors inline-flex items-center gap-2">
              Télécharger le PDF 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

// [Reste du code QuiSuisJe component reste le même...]

// Style global
const globalStyles = `
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
`;

function QuiSuisJe() {
  const [selectedTab, setSelectedTab] = useState('parcours');

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            Parcours & Réalisations
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto animate-fade-in-delayed">
            Découvrez mon parcours professionnel, mes engagements humanitaires et mes publications
          </p>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'parcours', label: 'Parcours Professionnel' },
            { id: 'humanitarian', label: 'Engagements Humanitaires' },
            { id: 'publications', label: 'Publications' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedTab === tab.id
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content sections */}
        <div className="space-y-24">
          {selectedTab === 'parcours' && (
            <div className="space-y-24">
              <TimelineEvent
                year="1989"
                title="Ouverture du Premier Cabinet de Consultation"
                content="Début de ma pratique professionnelle avec l'ouverture de mon premier cabinet de consultation, marquant le début d'une longue aventure dans le monde du tarot."
                image={cabinet1989}
              />
              <TimelineEvent
                year="1990-2000"
                title="Professeur d'Arts Plastiques"
                content="Parallèlement à ma pratique du tarot, j'ai enseigné les arts plastiques, une expérience qui a enrichi ma compréhension des symboles et de leur représentation."
                image={artPlastique}
                right
              />
              <TimelineEvent
                year="2020"
                title="Cabinet en Côte d'Ivoire"
                content="Expansion de ma pratique avec l'ouverture d'un nouveau cabinet en Côte d'Ivoire, permettant de toucher un public plus large et de découvrir de nouvelles traditions."
                image={cabinetCI}
              />
            </div>
          )}

          {selectedTab === 'humanitarian' && (
            <div className="space-y-24">
              <TimelineEvent
                year="1995"
                title="Missions en Ex-Yougoslavie"
                content="Participation à des missions humanitaires en Ex-Yougoslavie, apportant aide et soutien aux populations touchées par le conflit."
                image={humanitarian}
              />
              <TimelineEvent
                year="2000"
                title="Carte de Presse"
                content="Obtention de la carte de presse, permettant de documenter et de témoigner des réalités du terrain lors des missions humanitaires."
                // image={cartePress}
                right
              />
            </div>
          )}

          {selectedTab === 'publications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ArticleDownload
                title="Article sur le Cyclone HGPT"
                pdfUrl="/pdfs/article-cyclone-hgpt.pdf"
              />
              <ArticleDownload
                title="Autre Article de Marc Lawrence"
                pdfUrl="/pdfs/autre-article.pdf"
              />
            </div>
          )}
        </div>
      </div>

      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
}

export default QuiSuisJe;