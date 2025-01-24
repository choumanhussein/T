import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, content, price, icon, features, buttonText = "Réserver" }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
      <div className="h-48 bg-yellow-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-yellow-500">{icon}</div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">{title}</h2>
        <div className="text-lg text-gray-600 mb-6 leading-relaxed">
          {content}
        </div>
        {features && (
          <ul className="space-y-3 mb-6">
            {features.map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-100">
          <span className="text-2xl font-bold text-yellow-600 mb-4 sm:mb-0">{price}</span>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('formations');

  const categories = [
    { id: 'formations', label: 'Formations & Stages' },
    { id: 'consultations', label: 'Consultations' },
    { id: 'etudes', label: 'Études Spécialisées' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
            Mes services de tarologie
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-white/90 animate-fade-in-delayed">
            Découvrez mes différentes prestations pour vous accompagner dans votre cheminement personnel
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {selectedCategory === 'formations' && (
            <>
              <ServiceCard
                title="Stage Découverte"
                icon="🌟"
                content="Introduction aux bases du tarot sur 8 heures. Idéal pour débuter votre voyage dans l'univers du tarot."
                features={[
                  '8 heures de formation',
                  "2h le matin, 2h l'après-midi",
                  'Support de cours fourni',
                  'Groupes limités'
                ]}
                price="150€"
              />
              <ServiceCard
                title="Stage Interprétation"
                icon="📚"
                content="Approfondissez vos connaissances avec 16 heures de formation intensive sur l'art de l'interprétation."
                features={[
                  '16 heures de formation',
                  'Pratique approfondie',
                  'Exercices personnalisés',
                  'Suivi personnalisé'
                ]}
                price="250€"
              />
              <ServiceCard
                title="Formation Complète"
                icon="🎓"
                content="Le parcours complet incluant les 3 niveaux : Découverte, Interprétation et Tirage (28 heures)."
                features={[
                  '28 heures de formation totale',
                  'Les 3 niveaux inclus',
                  "Aide à l'installation",
                  'Suivi post-formation'
                ]}
                price="500€"
              />
            </>
          )}

          {selectedCategory === 'consultations' && (
            <>
              <ServiceCard
                title="Consultation Flash"
                icon="⚡"
                content="Une consultation rapide et précise pour répondre à vos questions urgentes."
                features={[
                  'Une question : 20€',
                  'Deux questions : 30€'
                ]}
                price="à partir de 20€"
              />
              <ServiceCard
                title="Consultation Complète"
                icon="🌍"
                content="Un tirage complet incluant la roue et les 12 maisons pour une vision globale de votre situation."
                features={[
                  'Tirage complet',
                  'La roue et les 12 maisons',
                  'Vision détaillée',
                  'Conseils personnalisés'
                ]}
                price="50€"
              />
            </>
          )}

          {selectedCategory === 'etudes' && (
            <>
              <ServiceCard
                title="Compatibilité Astrologique"
                icon="💑"
                content="Étude approfondie de la compatibilité des signes astrologiques pour le mariage."
                features={[
                  'Analyse complète',
                  'Rapport détaillé',
                  'Recommandations'
                ]}
                price="40€"
              />
              <ServiceCard
                title="Étude Professionnelle"
                icon="💼"
                content="Analyse approfondie pour vos relations professionnelles."
                features={[
                  'Étude de compatibilité',
                  'Analyse des dynamiques',
                  'Recommandations pratiques'
                ]}
                price="60€"
              />
              <ServiceCard
                title="Étude Bien-être"
                icon="🌿"
                content="Consultation personnalisée pour votre bien-être : perte de poids, renforcement musculaire, soins naturels."
                features={[
                  'Plan personnalisé',
                  'Suivi adapté',
                  'Conseils naturels'
                ]}
                price="Sur devis"
                buttonText="Demander un devis"
              />
            </>
          )}
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up animation-delay-400">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Vous souhaitez une prestation sur-mesure ou avez des questions ? 
            N'hésitez pas à me contacter pour en discuter !
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Me contacter
          </Link>
        </div>
      </div>

      {/* [Previous styles remain the same] */}
      <style jsx global>{`
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
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
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
    </div>
  );
}

export default Services;