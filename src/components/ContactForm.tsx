import React, { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const nextSteps = [
    'Un especialista te contacta para entender tu necesidad.',
    'Definimos alcance, tiempos y propuesta económica.',
    'Iniciamos implementación y soporte de tu servicio.'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor ingrese un correo electrónico válido';
    }

    // Validar teléfono
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Por favor ingrese un número de teléfono válido';
    }

    // Validar mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono,
          message: formData.mensaje,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: ''
        });
        setErrors({});
      } else {
        setSubmitMessage(result.message || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (_error) {
      setSubmitMessage('Hubo un error de conexión. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-linear-to-br from-white/95 to-slate-100/90 backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-base md:text-lg tracking-[0.2em] uppercase text-blue-900 font-bold mb-3">Contáctanos</p>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-[1.05]">Conecta tu operación en una sola plataforma</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Cuéntanos qué necesitas integrar y te enviamos una ruta clara de implementación con inversión y tiempos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">¿Qué sigue ahora?</h3>
            <div className="space-y-5 mb-8">
              {nextSteps.map((step, index) => (
                <div className="flex items-start gap-4" key={step}>
                  <div className="w-8 h-8 shrink-0 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-slate-200 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-white/20 pt-6">
              <p className="text-slate-300 text-sm">20+ años de experiencia · Implementaciones SAP y no SAP</p>
              <a className="block text-white font-medium hover:text-blue-200 transition-colors" href="mailto:ggonzalez@itgvzla.com">
                ggonzalez@itgvzla.com
              </a>
              <a className="block text-white font-medium hover:text-blue-200 transition-colors" href="mailto:operaciones@itgvzla.com">
                operaciones@itgvzla.com
              </a>
              <a className="block text-white font-medium hover:text-blue-200 transition-colors" href="tel:+584243055675">
                +58 (424) 305-5675
              </a>
              <a className="block text-white font-medium hover:text-blue-200 transition-colors" href="tel:+584125053871">
                +58 (412) 505-3871
              </a>
            </div>
          </aside>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.nombre ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Ej: Gustavo González"
                  />
                  {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="empresa@correo.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.telefono ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="+58 (000) 000-0000"
                />
                {errors.telefono && <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">
                  Proyecto o requerimiento *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-y ${
                    errors.mensaje ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Describe el servicio que deseas contratar o pagar para enviarte instrucciones inmediatas."
                />
                {errors.mensaje && <p className="mt-1 text-sm text-red-600">{errors.mensaje}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-xl text-white transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-blue-900 hover:bg-blue-800 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? 'Enviando solicitud...' : 'Solicitar propuesta y forma de pago'}
              </button>

              {submitMessage && (
                <div
                  className={`text-center p-4 rounded-lg border ${
                    submitMessage.includes('error')
                      ? 'bg-red-50 text-red-700 border-red-200'
                      : 'bg-green-50 text-green-700 border-green-200'
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
