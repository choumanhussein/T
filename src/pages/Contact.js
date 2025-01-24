import ContactForm from '../components/ContactForm';

function Contact() {
    return (
      <div>
      {/* // <div className="container mx-auto py-8">
      //   <h1 className="text-4xl font-bold mb-4">Contactez Marc Lawrence</h1>
      //   <p className="text-xl mb-8">
      //     Vous avez des questions ou souhaitez prendre rendez-vous pour une consultation ? Remplissez le formulaire ci-dessous et Marc vous répondra dans les plus brefs délais.
      //   </p>
      //   <form className="max-w-xl mx-auto">
      //     <div className="mb-4">
      //       <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Nom</label>
      //       <input 
      //         type="text"
      //         id="name"
      //         name="name"
      //         className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      //         required
      //       />
      //     </div>
      //     <div className="mb-4">
      //       <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
      //       <input 
      //         type="email"
      //         id="email"
      //         name="email"
      //         className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      //         required
      //       />
      //     </div>
      //     <div className="mb-4">
      //       <label htmlFor="message" className="block mb-2 font-bold text-gray-700">Message</label>
      //       <textarea
      //         id="message"
      //         name="message"
      //         rows="5"
      //         className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      //         required
      //       ></textarea>
      //     </div>
      //     <>
      //       <button
      //         type="submit"
      //         className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300"
      //       >
      //         Envoyer
      //       </button>
      */}
            <ContactForm /> 
          
        
      </div>
    );
  }
  
  export default Contact;