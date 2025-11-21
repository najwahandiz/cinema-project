import { useState } from 'react';
import './Contact.css';

export default function Contact() {

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    msg: ''
  });

  const [error, setError] = useState('');
   const [success, setSuccess] = useState('');

   function Changer(e) {
    const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   }

   function Valider(e) {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (!formData.nom || !formData.email || !formData.msg) {
      setError('Tous les champs sont obligatoires !');
      return;
    }

  
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Adresse e-mail invalide.');
      return;
     }
 
    setSuccess(' Message envoyé avec succès !');

     const message = `
      Votre nom : ${formData.nom}
     Votre email : ${formData.email}
     Votre message : ${formData.msg}`;

    alert(message);    
     setFormData({
      nom: '',
      email: '',
      msg: ''
    });
   }

  return (
    <form onSubmit={Valider} className="contact">

      <div>
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={Changer} />
      </div>

      <div>
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={Changer} />
      </div>

      <div>
        <label htmlFor="msg">Message :</label>
        <textarea id="msg" name="msg" value={formData.msg} onChange={Changer} />
      </div>

      
      {error && <p className="error">{error}</p>}

      
      {success && <p className="success">{success}</p>}

      <button type="submit">Envoyer</button>
    </form>
  );
}

          







   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   












