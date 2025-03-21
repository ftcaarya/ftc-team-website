import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Initialize particles.js if available
    if (typeof window.particlesJS !== 'undefined') {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#00ffff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00ffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }

    // GSAP animations
    if (typeof window.gsap !== 'undefined') {
      window.gsap.from('.hero-title', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
      });
      
      window.gsap.from('.hero-subtitle', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
      });
      
      window.gsap.from('.hero-button', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'back.out',
        delay: 0.6
      });
    }
  }, []);

  return (
    <section id="home" className="hero-section">
      <div id="particles-js" className="particles-js"></div>
      <div className="circuit-bg"></div>
      <div className="container mx-auto px-4">
        <div className="hero-content">
          <h1 className="hero-title">Circuit Breakers</h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 fade-in">
            FTC Team 21829 | Pushing the Boundaries of Robotics
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#about" className="tech-button hero-button">
              Discover Our Team
            </a>
            <a href="#robot" className="tech-button hero-button">
              See Our Robot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 