// App.jsx
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Typewriter from 'react-typewriter-effect';
import { useWindowSize } from 'react-use';
import './App.css';

import bear from './bear.png';
import happy from './cute.gif';
import clickSound from './click.mp3';
import hornSound from './horn.mp3';
import confettiSound from './cute-confetti.mp3';
import blushSound from './blush.mp3';
import sparkleSound from './sparkle.mp3';
import giggleSound from './giggle.mp3';
import moveNoSound from './moveNo.mp3';

function App() {
  const { width, height } = useWindowSize();
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  const play = (sound, volume = 1) => {
    const audio = new Audio(sound);
    audio.volume = volume;
    audio.play();
  };

  const animateClick = (e) => {
    e.target.classList.add('clicked');
    setTimeout(() => {
      e.target.classList.remove('clicked');
    }, 500);
  };

  const moveNo = (e) => {
    const btn = e.target;
    btn.style.position = 'absolute';
    btn.style.left = `${Math.random() * (window.innerWidth - 80)}px`;
    btn.style.top = `${Math.random() * (window.innerHeight - 80)}px`;
    play(moveNoSound, 0.6);
  };

  const handleYes = (e) => {
    animateClick(e);
    play(clickSound);
    play(blushSound, 0.8);
    setShowConfetti(true);
    setStep(1);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleViewLicense = (e) => {
    animateClick(e);
    play(clickSound);
    play(sparkleSound, 0.7);
    setStep(2);
  };

  const handleReplay = (e) => {
    animateClick(e);
    play(clickSound);
    setStep(0);
  };

  return (
    <div className="container">
      {step === 0 && (
        <>
          <p className="sneaky-text top">I pinky promise I won't crash 🥹</p>
          <img src={happy} alt="happy gif" className="happy-gif" />
          <h1>Aditya... will you teach me how to ride a scooty? 🛵💕</h1>
          <p className="sneaky-text bottom">Say yes or prepare to be haunted by puppy eyes forever 🐶👀</p>
          <div className="btns">
            <button className="yes" onClick={handleYes}>Yes 😍</button>
            <button className="no" onMouseOver={moveNo}>No 🙈</button>
          </div>
        </>
      )}

      {step === 1 && (
        <div className="love">
          {showConfetti && <Confetti width={width} height={height} numberOfPieces={150} recycle={false} />}
          <img src={bear} alt="bear" className="bear" />
          <h2>Thank youuuu Aditya!! Love you soooo much 💗</h2>
          <div className="typewriter">
            <Typewriter
              textStyle={{ fontFamily: 'Comic Sans MS', color: '#ff4d6d', fontSize: '1.2rem' }}
              startDelay={500}
              cursorColor="#ff4d6d"
              multiText={[
                'Now no take‑backs! You’re officially my scooty coach! 💋🛵',
                'PS: Scooty lessons come with cuddles. Non‑negotiable 😚💞',
              ]}
              typeSpeed={100}
              multiTextDelay={1500}
              multiTextLoop={false}
            />
          </div>
          <button className="cert-btn" onClick={handleViewLicense}>
            🎓 View Scooty Coach Licence
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="certificate pretty-cert">
          <p className="cert-heading">🏅 This certificate is awarded to:</p>
          <h2 className="cert-name">Aditya</h2>
          <p className="cert-for">For being the best Scooty Coach in the whole wide world 💘</p>
          <ul>
            <li>🛵 Endless rides & giggles guaranteed</li>
            <li>💞 Cuddle clause: Cannot be revoked</li>
            <li>💌 Valid for life, signed with love</li>
          </ul>
          <p className="cert-footer">Certified by Rasika's Ministry of Romance 🚦💝</p>
          <div className="cert-sign">
            <span>Signed by Rasika 💋</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <button onClick={handleReplay}>Replay this whole adorable mess 🥺</button>
        </div>
      )}
    </div>
  );
}

export default App;
