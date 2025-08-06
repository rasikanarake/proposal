import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Typewriter from 'react-typewriter-effect';
import { useWindowSize } from 'react-use';
import './App.css';

import bear from './bear.png';
import clickSound from './click.mp3';
import hornSound from './horn.mp3';
import confettiSound from './cute-confetti.mp3';

function App() {
  const { width, height } = useWindowSize();
  const [step, setStep] = useState(0);

  const play = (sound) => new Audio(sound).play();

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
    play(clickSound);
  };

  const handleYes = (e) => {
    animateClick(e);
    play(clickSound);
    play(hornSound);
    play(confettiSound);
    setStep(1);
  };

  const handleViewLicense = (e) => {
    animateClick(e);
    play(clickSound);
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
          <h1>Will you teach me how to ride a scooty? 🛵💕</h1>
          <div className="btns">
            <button className="yes" onClick={handleYes}>Yes 😍</button>
            <button className="no" onMouseEnter={moveNo}>No 🙈</button>
          </div>
        </>
      )}

      {step === 1 && (
        <div className="love">
          <Confetti width={width} height={height} numberOfPieces={200} />
          <img src={bear} alt="bear" className="bear" />
          <h2>Thank youuuu!! Love you soooo much 💗</h2>
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
        <div className="certificate">
          <h2>🛵 OFFICIAL SCOOTY COACH LICENCE 💕</h2>
          <p>This certifies that YOU have officially agreed to teach me how to ride a scooty!</p>
          <ul>
            <li>✅ Unlimited cuddles included</li>
            <li>✅ Non-refundable YES</li>
            <li>✅ Lifetime commitment to fun rides 😘</li>
          </ul>
          <p><i>Issued by Rasika’s Department of Romance Affairs 💌</i></p>
          <button onClick={handleReplay}>Replay this cute mess 🥺</button>
        </div>
      )}
    </div>
  );
}

export default App;
