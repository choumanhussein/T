import React, { useState } from 'react';

const InputField = ({
  id,
  label,
  type = 'text',
  value,
  focusedField,
  handleChange,
  setFocusedField,
  textarea = false,
  error
}) => {
  const isFocused = focusedField === id;
  const hasValue = Boolean(value);
  
  return (
    <div className="relative group">
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          rows="4"
          className={`peer w-full px-4 py-3 bg-transparent border-2 rounded-xl outline-none transition-all duration-500
            ${isFocused ? 'border-amber-500' : 'border-gray-200/70 hover:border-gray-300'}
            ${error ? 'border-red-400/80' : ''}
            shadow-sm focus:shadow-amber-100/30`}
          aria-required="true"
          aria-describedby={`${id}-error`}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          className={`peer w-full px-4 py-3 bg-transparent border-2 rounded-xl outline-none transition-all duration-500
            ${isFocused ? 'border-amber-500' : 'border-gray-200/70 hover:border-gray-300'}
            ${error ? 'border-red-400/80' : ''}
            shadow-sm focus:shadow-amber-100/30`}
          aria-required="true"
          aria-describedby={`${id}-error`}
        />
      )}
      
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-500 pointer-events-none
          ${hasValue || isFocused ? 
            '-translate-y-7 text-sm scale-90' : 
            'translate-y-3 text-gray-500 scale-100'}
          ${error ? 'text-red-500' : 'text-amber-600'}
          origin-left bg-white px-1 group-hover:scale-95`}
      >
        {label}
      </label>

      <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 
        transition-all duration-700 ${isFocused ? 'w-full' : ''}`} />

      {error && (
        <div 
          id={`${id}-error`} 
          className="text-red-500 text-sm mt-2 flex items-center animate-shake"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nom.trim()) newErrors.nom = 'Name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(process.env.REACT_APP_API_URL || 'http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! 🎉' });
        setFormData({ nom: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'An error occurred. Please try again later. 😕' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection. 🌐' });
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-lg backdrop-blur-lg bg-white/90 rounded-3xl shadow-2xl overflow-hidden
        transform hover:scale-[1.005] transition-all duration-500 ease-out
        border border-white/20 relative">
        
        <div className="absolute inset-0 rounded-3xl border-2 border-amber-200/30 pointer-events-none" />

        <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall-2.png')]" />
          
          <h1 className="text-4xl font-bold mb-2 relative z-10 animate-fade-in">
            Contact Us
            <span className="block w-12 h-1 bg-amber-300 mt-3 rounded-full" />
          </h1>
          <p className="opacity-95 font-light">Let's create something amazing together ✨</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6" noValidate>
          {submitStatus && (
            <div 
              className={`p-4 rounded-xl border-l-4 flex items-center animate-bounce-in
                ${submitStatus.type === 'success' ? 
                  'bg-green-50 border-green-400 text-green-700' : 
                  'bg-red-50 border-red-400 text-red-700'}`}
              role="alert"
            >
              <svg 
                className={`h-6 w-6 mr-3 ${submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {submitStatus.type === 'success' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                )}
              </svg>
              {submitStatus.message}
            </div>
          )}

          <InputField
            id="nom"
            label="Your Name"
            value={formData.nom}
            focusedField={focusedField}
            handleChange={handleChange}
            setFocusedField={setFocusedField}
            error={errors.nom}
          />

          <div className="relative">
            <InputField
              id="email"
              type="email"
              label="Email Address"
              value={formData.email}
              focusedField={focusedField}
              handleChange={handleChange}
              setFocusedField={setFocusedField}
              error={errors.email}
            />
            <svg 
              className="absolute right-4 top-1/2 -translate-y-2 h-6 w-6 text-gray-400 peer-focus:text-amber-500 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <InputField
            id="message"
            label="Your Message"
            value={formData.message}
            focusedField={focusedField}
            handleChange={handleChange}
            setFocusedField={setFocusedField}
            textarea={true}
            error={errors.message}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 rounded-xl text-white font-medium transition-all
              ${isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:shadow-lg hover:scale-[1.02]'}
              relative overflow-hidden group shadow-md hover:shadow-amber-200/40`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            <div className="relative flex items-center justify-center space-x-2">
              {isLoading ? (
                <>
                  <div className="h-5 w-5 border-2 border-white/50 rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <svg 
                    className="w-5 h-5 text-amber-100 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span>Send Message</span>
                </>
              )}
            </div>
          </button>
        </form>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8); }
          60% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .animate-float {
          animation: float 8s infinite ease-in-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out;
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;