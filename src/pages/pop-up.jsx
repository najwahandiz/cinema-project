import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function PopUp() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("popupShown");
    if (!alreadyShown) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        localStorage.setItem("popupShown", "true");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupShown", "true");
  };

  if (!showPopup) return null;

  return ReactDOM.createPortal(
    <div className="devPop">
      <div className="popUp">
        <h1>Bienvenue sur notre site</h1>
        <div className="popUpContent">
          <h2>Salut !</h2>
          <p>Profitez de votre visite !</p>
          <p>Entrez votre mail</p>
          <input className="inputEmail" type="email" placeholder="Votre email" />
          <button className="popUpButton" onClick={closePopup}>
            Envoyer
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
