import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Contact.css';

export default function Contact() {
  const navigate = useNavigate();



//   let [nom, setNom] = useState("");
//   let [email, setEmail] = useState("");
//   let [message, setMessage] = useState("");
//   let [success, setSuccess] = useState(false);
//   let [error, setError] = useState("");

  return (
    <div className="contact-page">
      <h1>Contactez</h1>

      <button onClick={() => navigate("/")}>
        Retour
      </button>

      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Envoyer</button>
      </form>
    </div>
  );
}
