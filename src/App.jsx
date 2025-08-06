// ✅ App.jsx — FINAL FULL REACT CODE
import React, { useState } from "react";
import "./App.css";
import bearImg from "./bear.png";
import clickSound from "./click.mp3";
import confettiSound from "./confetti.mp3";

function App() {
  const [showLove, setShowLove] = useState(false);
  const [showSpicy, setShowSpicy] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const clickAudio = new Audio(clickSound);
  const confettiAudio = new Audio(confettiSound);

  const handleYes = () => {
    clickAudio.play();
    setShowLove(true);
    setTimeout(() => setShowSpicy(true), 2000);
    setTimeout(() => setShowCertificate(true), 5000);
  };

  const handleReplay = () => {
    setShowLove(false);
    setShowSpicy(false);
    setShowCertificate(false);
  };

  const moveButton = (e) => {
    const button = e.target;
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    clickAudio.play();
  };

  if (showCertificate) {
    return (
      <div className="certificate">
        <h2>🛵 OFFICIAL SCOOTY COACH LICENCE 💕</h2>
        <p>This certifies that <strong>Your Cutie</strong> has officially agreed to teach <strong>Rasika</strong> how to ride a scooty!</p>
        <ul>
          <li>✅ Unlimited cuddles included</li>
          <li>✅ Non-refundable YES</li>
          <li>✅ Lifetime commitment to fun rides 😘</li>
        </ul>
        <p><em>Issued by Rasika's Department of Romance Affairs 💌</em></p>
        <button onClick={handleReplay}>Replay this cute mess 🥺</button>
      </div>
    );
  }

  if (showLove) {
    confettiAudio.play();
    return (
      <div className="love-screen">
        <img src={bearImg} alt="Cute Bear" />
        <h1>Thank youuuu!! Love you so much 💗 </h1>
        {showSpicy && (
          <>
            <p>Now no take-backs! You're officially my scooty coach! 💋🛵</p>
            <p>PS: Scooty lessons come with cuddles. Non-negotiable 😚💞</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Will you teach me how to ride a scooty? 🛵💗</h1>
      <div className="buttons">
        <button className="yes" onClick={handleYes}>Yes 😍</button>
        <button className="no" onMouseOver={moveButton} onClick={moveButton}>No 🙈</button>
      </div>
    </div>
  );
}

export default App;
