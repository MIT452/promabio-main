import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import imgFooter from '../assets/images/carrousel/image-1.jpg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Clé publique Web3Forms (définie dans le fichier .env : REACT_APP_WEB3FORMS_KEY)
const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

const Footer = () => {
  const { t } = useTranslation('global')

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000); // 3000ms = 3 secondes

      return () => clearTimeout(timer); // Nettoyage du timer si le composant est démonté
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.subject && formData.message)) {
      setStatus("Tous les champs sont obligatoires.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Site Promabio",
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi de l'email.");
      }
    } catch (error) {
      setStatus("Erreur lors de l'envoi de l'email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id='contact' className='relative min-h-[90vh] flex items-center justify-center' style={{ backgroundImage: `url(${imgFooter})`, backgroundRepeat: "no-repeat", backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <div className='foot-container relative z-10 grid justify-center gap-2 items-center md:items-start  md:grid-cols-3 px-9'>
        {/* Contact */}
        <div className='contact'>
          <h2 className='foot-title'>Contact</h2>
          <p><FontAwesomeIcon icon={faEnvelope} />  madagascarinstituteoftech@gmail.com </p>
          <p><FontAwesomeIcon icon={faPhone} /> +261 32 05 160 42</p>
          <p><FontAwesomeIcon icon={faLocationDot} /> Secteur n°10 Maherifody,
            206 Antalaha, Madagascar</p>
        </div>
        {/* Les liens */}
        <div className='links'>
          <h2 className='foot-title'>{t('footer.view')}</h2>
          <p><Link to='/commitment'>{t('navbar.1')}</Link></p>
          <p><a href='/'>{t('navbar.2')}</a></p>
          <p><a href='/'>{t('navbar.3')}</a></p>
          <p><a href='/'>{t('navbar.4')}</a></p>
        </div>
        {/* Formulaire de contact */}
        <div className='forms relative'>
          <h2 className='foot-title'>{t('footer.form.title')}</h2>
          <form action="" className='grid grid-rows-1 gap-3' onSubmit={handleSubmit}>
            <input className='px-2 py-1 bg-white/80' onChange={handleChange} value={formData.name} type="text" name="name" placeholder={t('footer.form.placeholder.name')} />
            <input className='px-2 py-1 bg-white/80' onChange={handleChange} value={formData.email} type="text" name="email" placeholder={t('footer.form.placeholder.email')} />
            <input className='px-2 py-1 bg-white/80' onChange={handleChange} value={formData.subject} type="text" name="subject" placeholder={t('footer.form.placeholder.subject')} />
            <textarea name="message" className='resize-none px-2 py-1' value={formData.message} onChange={handleChange} id="" placeholder={t('footer.form.placeholder.message')}></textarea>
            <div className='text-right'>
              <button className='btn-primary' type='submit' disabled={loading}>
                {loading ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          </form>
          {status && <p className='bg-green-600 w-fit mx-auto absolute bottom-0 text-white px-4 rounded-sm mt-4'>{status}</p>}
        </div>
      </div>
      <div className="overlay absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-white/80" />
    </footer>
  );
};

export default Footer;