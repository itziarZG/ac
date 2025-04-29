import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'El nombre no puede exceder los 50 caracteres';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    // Subject validation
    if (formData.subject.trim().length > 100) {
      newErrors.subject = 'El asunto no puede exceder los 100 caracteres';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'El mensaje no puede exceder los 1000 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Introduce tu nombre"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md bg-white border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md bg-white border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="¿Sobre qué quieres hablar?"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-white border border-gray-300 text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md bg-white border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
            ${isSubmitting 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-600/20 border border-green-600 rounded-md">
          <p className="text-green-500 text-sm text-center">
            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-600/20 border border-red-600 rounded-md">
          <p className="text-red-500 text-sm text-center">
            Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
