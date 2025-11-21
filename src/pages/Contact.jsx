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

let message = `
Votre nom : ${formData.nom}
Votre email : ${formData.email}
Votre message : ${formData.msg}`;

    alert("Votre message : " + message);

    setFormData({
      nom: "",
      email: "",
      msg: ""
    });

    setError("");
    setSuccess("Message envoyé avec succès !");
  }

  return (
    <form onSubmit={Valider} className="contact-container">
      <h2>Contactez-nous</h2>

      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <div>
        <label For="nom">Nom:</label>
        <input type="text" id="nom" name="nom" value={formData.nom}onChange={Changer}/>
      </div>

      <div>
        <label For="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={Changer}/>
      </div>

      <div>
        <label For="msg">Message:</label>
        <textarea id="msg" name="msg" value={formData.msg} onChange={Changer}/>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
}













// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !email || !message) {
//       setError("Tous les champs sont obligatoires !");
//       setIsSuccess(false);
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError("L'adresse email n'est pas valide !");
//       setIsSuccess(false);
//       return;
//     }

//     setError("Le message a été envoyé avec succès !");
//     setIsSuccess(true);

//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="contact-container">
//       <h2>Page Contact</h2>

//       <form onSubmit={handleSubmit}>
//         <input type="text"placeholder="Name"value={name}onChange={(e) => setName(e.target.value)}/>

//         <input type="text"placeholder="Email"value={email}onChange={(e) => setEmail(e.target.value)}/>

//         <textarea placeholder="Message"value={message}onChange={(e) => setMessage(e.target.value)}/>

//         <button type="submit">Envoyer</button>
//       </form>

//       {error && <p className={isSuccess ? "success" : "error"}>{error}</p>}
//     </div>
//   );
// }











