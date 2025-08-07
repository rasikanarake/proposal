import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Typewriter from 'react-typewriter-effect';
import { useWindowSize } from 'react-use';
import './App.css';

import bear from './bear.png';
import happy from './cute.gif';
import angryCuteGif from './angry-cute.gif';
import clickSound from './click.mp3';
import blushSound from './blush.mp3';
import moveNoSound from './moveNo.mp3';
import sparkSound from './spark.mp3';

function App() {
  const { width, height } = useWindowSize();
  const [step, setStep] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAngryPopup, setShowAngryPopup] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

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
    btn.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
    btn.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
    play(moveNoSound, 0.7);
    const newCount = noCount + 1;
    setNoCount(newCount);
    if (newCount === 3) {
      setShowAngryPopup(true);
      
    }
  };

  const handleYes = (e) => {
    animateClick(e);
    play(clickSound);
    play(blushSound, 0.8);
    setShowConfetti(true); // Show confetti immediately
    setShowSparkles(true); // Optional: keep sparkles showing
          setStep(1);             // Move to 2nd page
    setTimeout(() => {
      setShowConfetti(false); // Stop confetti after 5 seconds
      setShowSparkles(false); // Stop sparkles if you want
      setStep(1);             // Move to 2nd page
    }, 4500); // Duration of 5 seconds for confetti
  };

  const handleViewLicense = (e) => {
    animateClick(e);
    play(sparkSound);
    setStep(2);
  };

  const handleReplay = (e) => {
    animateClick(e);
    play(clickSound);
    setStep(0);
    setNoCount(0);
    setShowConfetti(false);
    setShowSparkles(false);
  };

  return (
    <div className="container">
      {showConfetti && <Confetti width={width} height={height} numberOfPieces={550} />}

      {/* Uncomment and use sparkles if desired */}
      {/* {showSparkles && (
        <div className="sparkle-container">
          <span className="sparkle">💖</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">💋</span>
        </div>
      )} */}

      {showAngryPopup && (
        <div className="popup angry-popup">
          <div className="popup-content shake">
            <h3>ADITYA! ENOUGH 😤💢</h3>
            <img src={angryCuteGif} alt="angry cute" className="angry-gif" />
            <p>You can’t run forever! Say YES nowww 😡💕</p>
            <button onClick={() => { setShowAngryPopup(false) ; play(sparkSound);}}>Okay okay 😅</button>
          </div>
        </div>
      )}

      {step === 0 && (
        <>
          <p className="sneaky-text top">I pinky promise I won't crash 🥹</p>
          <img src={happy} alt="happy gif" className="happy-gif" />
          <h1>Aditya... will you teach me how to ride a scooty? 🛵💕</h1>
          {noCount >= 3 && (
            <p className="sneaky-text middle">Bruhhh 😩 You trying to dodge me? My puppy eyes getting stronger 😤🐶</p>
          )}
          <p className="sneaky-text bottom">Say yes or prepare to be haunted by puppy eyes forever 🐶👀</p>
          <div className="btns">
            <button className="yes" onClick={handleYes}>Yes 😍</button>
            <button className="no" onMouseOver={moveNo}>No 🙈</button>
          </div>
        </>
      )}

      {step === 1 && (
        <div className="love">
          <img src={bear} alt="bear" className="bear" />
          <h2 className="pulse">Thank youuuu Aditya!! Love you soooo much 💗</h2>
          <div className="typewriter">
            <Typewriter
              textStyle={{
                fontFamily: 'Comic Sans MS',
                color: '#ff4d6d',
                fontSize: '1.2rem'
              }}
              startDelay={500}
              cursorColor="#ff4d6d"
              multiText={
                noCount === 0
                  ? [
                      'You said YES right away?!? I knew you were the one 💖🛵',
                      'Fastest yes ever = infinite brownie points 🍪💘',
                    ]
                  : [
                      'Now no take‑backs! You’re officially my scooty coach! 💋🛵',
                      'PS: Scooty lessons come with cuddles. Non‑negotiable 😚💞',
                    ]
              }
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