import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Load external scripts
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    
    document.body.appendChild(script);
  });
};

// Load necessary scripts after React mounts
window.addEventListener('DOMContentLoaded', async () => {
  try {
    // Load GSAP and its plugins
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js');
    
    // Load particles.js
    await loadScript('https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js');
    
    console.log('All external scripts loaded successfully');
  } catch (error) {
    console.error('Error loading external scripts:', error);
  }
}); 