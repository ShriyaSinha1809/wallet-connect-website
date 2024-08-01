import React, { useEffect } from 'react';

const GameFooter = () => {
  useEffect(() => {
    // Helper function to load a script and return a promise
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load scripts in sequence to ensure correct order
    const loadScriptsSequentially = async () => {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js");
        await loadScript("./game/js/utils.js");
        await loadScript("./game/js/data/collisions.js");
        await loadScript("./game/js/classes/CollisionBlock.js");
        await loadScript("./game/js/classes/Sprite.js");
        await loadScript("./game/js/classes/Player.js");
        await loadScript("./game/js/eventListeners.js");
        await loadScript("./game/index.js");
        console.log('All game scripts loaded successfully');
      } catch (err) {
        console.error('Script loading failed', err);
      }
    };

    loadScriptsSequentially();

    // Cleanup scripts when component unmounts
    return () => {
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (scriptSrcs.includes(script.src)) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div>
      <style>{`
        body {
          background: black;
        }
      `}</style>
      <div id="game-container"></div>
    </div>
  );
};

export default GameFooter;
