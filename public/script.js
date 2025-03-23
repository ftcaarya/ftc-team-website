document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
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

  // Initialize GSAP animations
  if (typeof gsap !== 'undefined') {
    // Hero section animations
    gsap.from('.hero-title', {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitle', {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.3
    });
    
    gsap.from('.hero-button', {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: 'back.out',
      delay: 0.6
    });
    
    // Activate section animations on scroll
    document.querySelectorAll('.section').forEach(section => {
      gsap.from(section.querySelectorAll('.fade-in'), {
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

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('menu-open');
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
        
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          document.body.classList.remove('menu-open');
        }
      }
    });
  });

  // Tech counter animation for stats
  const statsCounters = document.querySelectorAll('.stats-number');
  if (statsCounters.length > 0) {
    statsCounters.forEach(counter => {
      // Get the target value and remove any commas
      const targetString = counter.getAttribute('data-target');
      const targetValue = parseInt(targetString.replace(/,/g, ''));
      
      // Determine if the original had commas for formatting
      const hasCommas = targetString.includes(',');
      
      const duration = 2000; // ms
      const step = targetValue / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < targetValue) {
          // Format with commas if the original had commas
          if (hasCommas) {
            counter.textContent = Math.ceil(current).toLocaleString('en-US');
          } else {
            counter.textContent = Math.ceil(current);
          }
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = hasCommas ? targetValue.toLocaleString('en-US') : targetValue;
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
}); 