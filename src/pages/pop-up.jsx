
import React, { useState, useEffect } from 'react';
import './Home.css';

function PopUp() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Vérifier si le popup a déjà été vu
    const alreadyShown = localStorage.getItem("popupShown");
    console.log(alreadyShown);

    // Si déjà vu → ne pas l'afficher
    if (alreadyShown === "true") return;

    // Sinon → afficher après 3 secondes
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);

    // Enregistrer dans localStorage
    localStorage.setItem("popupShown", "true");
  };

  return (
    <>
      {showPopup && (
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
        </div>
      )}
    </>
  );
}

export default PopUp;
