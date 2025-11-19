import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Tous les champs sont obligatoires !");
      setIsSuccess(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("L'adresse email n'est pas valide !");
      setIsSuccess(false);
      return;
    }

    setError("Le message a été envoyé avec succès !");
    setIsSuccess(true);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h2>Page Contact</h2>

      <form onSubmit={handleSubmit}>
        <input type="text"placeholder="Name"value={name}onChange={(e) => setName(e.target.value)}/>

        <input type="text"placeholder="Email"value={email}onChange={(e) => setEmail(e.target.value)}/>

        <textarea placeholder="Message"value={message}onChange={(e) => setMessage(e.target.value)}/>

        <button type="submit">Envoyer</button>
      </form>

      {error && <p className={isSuccess ? "success" : "error"}>{error}</p>}
    </div>
  );
}











