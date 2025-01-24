import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Composant pour le carrousel de cartes
const TarotCarousel = () => {
  const cards = [
    { id: 1, name: 'Le Magicien', image: 'https://i.pinimg.com/736x/ad/db/7c/addb7ccf75d87cafc14276b97f20e9c6.jpg' },
    { id: 2, name: "L'Etoile", image: 'https://i.pinimg.com/736x/5c/81/0e/5c810e8eeb34441e8a63dc68c5ad0f25.jpg' },
    { id: 3, name: 'Le Soleil', image: 'https://i.pinimg.com/736x/88/01/f9/8801f9e749d0a41a63c44e6420d73ee3.jpg' },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentCard((prev) => (prev + 1) % cards.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 transform hover:scale-[1.02] transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentCard * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div key={card.id} className="min-w-full p-2">
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden group">
              <img
                src={card.image}
                alt={`Carte du tarot - ${card.name}`}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-2xl font-bold text-center">
                  {card.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentCard === index ? 'bg-yellow-500 w-4' : 'bg-yellow-300'
            }`}
            onClick={() => setCurrentCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Composant pour la section de présentation
const Introduction = () => (
  <div className="space-y-8 transform hover:scale-[1.02] transition-all duration-500">
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
      Votre guide dans l'univers du tarot
    </h2>
    <p className="text-xl text-gray-700 leading-relaxed">
      Marc Lawrence, tarologue expérimenté, vous accompagne dans votre cheminement personnel. 
      Découvrez comment le tarot peut vous aider à prendre des décisions éclairées 
      et à réaliser votre plein potentiel.
    </p>
    <Link
      to="/services"
      className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:brightness-110"
    >
      Découvrir mes services
    </Link>
  </div>
);

// Composant amélioré pour les témoignages
const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Les consultations avec Marc sont toujours éclairantes et bienveillantes. Il a su me guider dans des moments charnières de ma vie. Une expérience transformatrice que je recommande vivement !",
      name: "Sophie",
      age: "42 ans",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      text: "Marc a une approche unique du tarot qui va bien au-delà de la simple prédiction. Il m'a aidé à mieux comprendre mes schémas de pensée et à prendre des décisions importantes avec plus de clarté.",
      name: "Thomas",
      age: "35 ans",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 3,
      text: "J'étais sceptique au début, mais la précision et la profondeur des lectures de Marc m'ont vraiment impressionnée. Il a une véritable capacité à connecter les symboles du tarot avec notre réalité.",
      name: "Marie",
      age: "28 ans",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-xl p-10 mt-16">
      <h2 className="text-3xl font-bold text-yellow-600 mb-12 text-center">
        Ce que disent mes clients
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div className="relative aspect-square md:aspect-auto md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20" />.
            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonials Section */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-yellow-400 opacity-30">"</div>
            
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ${
                    index === activeTestimonial 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8 absolute'
                  }`}
                >
                  <div className="italic text-gray-700 text-xl leading-relaxed mb-6">
                    {testimonial.text}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                    />
                    <div>
                      <p className="font-medium text-yellow-600 non-italic">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.age}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-4 -right-4 text-6xl text-yellow-400 opacity-30">"</div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'bg-yellow-500 w-8' 
                  : 'bg-yellow-300'
              }`}
              aria-label={`Témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Composant principal
const Accueil = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 animate-fade-in">
            Bienvenue sur le site de Marc Lawrence
          </h1>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-full">
            <TarotCarousel />
          </div>
          <div className="flex flex-col justify-center">
            <Introduction />
          </div>
        </div>

        <Testimonial />
        
        <div className="text-center mt-12">
          <Link
            to="/a-propos"
            className="inline-block bg-white text-yellow-600 border-2 border-yellow-400 px-8 py-4 rounded-full font-medium hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Qui suis-je ?
          </Link>
        </div>
      </div>

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
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Accueil;