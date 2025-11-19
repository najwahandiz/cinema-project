import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setMsg("Tous les champs sont obligatoires !");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMsg("Veuillez saisir une adresse e-mail valide!");
      return;
    }

    setMsg("Le message a été envoyé avec succès.!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h2>Page Contact</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name}onChange={(e) => setName(e.target.value)}/>
        <input type="text"placeholder="Email"value={email}onChange={(e) => setEmail(e.target.value)}/>
        <textarea
placeholder="Message"value={message}onChange={(e) => setMessage(e.target.value)}/>
        <button type="submit">Envoyer</button>
      </form>

      {/* {msg && (
        <p className={msg.includes("Envoyer") ? "success" : "error"}>
          {msg}
        </p> */}
      {/* )} */}
    </div>
  );
}




