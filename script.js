document.addEventListener('DOMContentLoaded', function() {
  
  // --- Set current year in footer ---
  document.getElementById('y').textContent = new Date().getFullYear();

  // --- Animated background gradient (existing, for overall page) ---
  const bg = document.getElementById('bg');
  if (bg) {
    let tBg = 0; // Use a different time variable for this animation
    function animateBg() {
      tBg += 0.003;
      const x1 = 20 + Math.sin(tBg) * 10;
      const y1 = 30 + Math.cos(tBg * 1.5) * 10;
      const x2 = 80 + Math.cos(tBg * 1.2) * 10;
      const y2 = 70 + Math.sin(tBg * 1.3) * 10;
      bg.style.background = `
        radial-gradient(35vmax 35vmax at ${x1}% ${y1}%, rgba(30, 251, 151, 0.6), transparent 60%),
        radial-gradient(40vmax 40vmax at ${x2}% ${y2}%, rgba(50, 255, 170, 0.5), transparent 60%)
      `;
      requestAnimationFrame(animateBg);
    }
    animateBg();
  }

  // --- NEW: Hero section glowing animation ---
  const heroGlow = document.getElementById('hero-glow');
  if (heroGlow) {
    let tHero = 0; // Separate time variable for this animation
    function animateHeroGlow() {
      tHero += 0.005; // Slightly faster or different speed for variation
      
      const offsetX = Math.sin(tHero * 0.8) * 15; // Move horizontally
      const offsetY = Math.cos(tHero * 1.1) * 10; // Move vertically
      const scale = 1 + Math.sin(tHero * 0.5) * 0.1; // Pulsing effect

      // Adjust hue for subtle color shift, or keep it green for consistency
      // const hueShift = Math.sin(tHero * 0.3) * 30; 
      // heroGlow.style.filter = `blur(100px) hue-rotate(${hueShift}deg)`;

      heroGlow.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
      
      requestAnimationFrame(animateHeroGlow);
    }
    animateHeroGlow();
  }

  // --- NEW: Header shadow on scroll ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- NEW: Mobile navigation toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const icon = navToggle.querySelector('.material-icons');
  
  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    // Change icon based on menu state
    if (document.body.classList.contains('nav-open')) {
      icon.textContent = 'close';
    } else {
      icon.textContent = 'menu';
    }
  });

  // --- NEW: Close mobile menu when a link is clicked ---
  const mobileNavLinks = document.querySelectorAll('.nav-mobile a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      icon.textContent = 'menu';
    });
  });

  // --- NEW: Initialize AOS (Animate on Scroll) ---
  AOS.init({
    duration: 800, // animation duration in milliseconds
    once: true, // whether animation should happen only once
    offset: 50, // offset (in px) from the original trigger point
  });

});