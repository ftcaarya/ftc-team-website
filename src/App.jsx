import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles/main.css';

function App() {
  useEffect(() => {
    // Activate section animations on scroll when GSAP is available
    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      document.querySelectorAll('.section').forEach(section => {
        window.gsap.from(section.querySelectorAll('.fade-in'), {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%'
          }
        });
      });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // Tech counter animation for stats
    const statsCounters = document.querySelectorAll('.stats-number');
    if (statsCounters.length > 0) {
      statsCounters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // ms
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        
        // Start counter when in view
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
      });
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* 
        Other sections would be imported as React components:
        <About />
        <Robot />
        <Competitions />
        <Team />
        <Sponsors />
        <Contact />
        <Footer />
      */}
    </div>
  );
}

export default App; 