import React, { useState } from "react";
import "./Contact.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    msg: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function Changer(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function Valider(e) {
    e.preventDefault();
  
    if (!formData.nom || !formData.email || !formData.msg) {
      setError("Tous les champs sont obligatoires !");
      setSuccess("");
      return;
    }

    setFormData({
      nom: "",
      email: "",
      msg: ""
    });

    setError("");
    setSuccess("Message envoyé avec succès !");

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  }

  return (
    <form onSubmit={Valider} className="contact-container">
      <h2>Contactez-nous</h2>

      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <div>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={Changer}/>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email}onChange={Changer}/>
      </div>

      <div>
        <label htmlFor="msg">Message:</label>
        <textarea id="msg" name="msg" value={formData.msg} onChange={Changer}/>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
}