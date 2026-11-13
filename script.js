document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation drawer toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Active section indicator on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // CV Dropdown interactive toggle (both Nav and Hero)
  const cvDropdowns = document.querySelectorAll('.cv-dropdown');
  cvDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.cv-trigger-btn');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isAlreadyOpen = dropdown.classList.contains('open');
      
      // Close all dropdowns
      cvDropdowns.forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.cv-trigger-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      // Toggle this one
      if (!isAlreadyOpen) {
        dropdown.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close dropdown when clicking anywhere outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.cv-dropdown')) {
      cvDropdowns.forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.cv-trigger-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close dropdown on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cvDropdowns.forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.cv-trigger-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // ========================================================
  // INTERACTIVE GAMING BACKGROUND ENGINE (Canvas 2D)
  // ========================================================
  const canvas = document.getElementById('gaming-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  // Mouse & Touch interaction
  const mouse = { x: -1000, y: -1000, radius: 150 };

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }, { passive: true });

  // Floating gaming glyphs
  const glyphs = ['▲', '■', '●', '✖', '+', '< / >', 'WASD', 'FPS'];
  const particleCount = width < 768 ? 32 : 65;
  let particles = [];
  let floatingCubes = [];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
      this.isGlyph = Math.random() < 0.22;
      this.glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      this.alpha = Math.random() * 0.45 + 0.15;
      this.color = Math.random() > 0.4 ? '#00f59b' : '#00d4ff';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse repulsion/gravitation
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const force = (1 - dist / mouse.radius) * 1.5;
        this.x -= (dx / dist) * force * 3;
        this.y -= (dy / dist) * force * 3;
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;

      if (this.isGlyph) {
        ctx.fillStyle = this.color;
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(this.glyph, this.x, this.y);
      } else {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  // 3D Wireframe Cube in Canvas
  class WireframeCube {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 22 + 16;
      this.rotX = Math.random() * Math.PI;
      this.rotY = Math.random() * Math.PI;
      this.speedX = (Math.random() - 0.5) * 0.015;
      this.speedY = (Math.random() - 0.5) * 0.015;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.vx = (Math.random() - 0.5) * 0.35;
    }

    update() {
      this.rotX += this.speedX;
      this.rotY += this.speedY;
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < -50) this.x = width + 50;
      if (this.x > width + 50) this.x = -50;
      if (this.y < -50) this.y = height + 50;
      if (this.y > height + 50) this.y = -50;
    }

    draw() {
      const nodes = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1]
      ];

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];

      // Rotate nodes in 3D
      const projected = nodes.map(node => {
        let x = node[0];
        let y = node[1];
        let z = node[2];

        // Rotate Y
        const cosY = Math.cos(this.rotY);
        const sinY = Math.sin(this.rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        // Rotate X
        const cosX = Math.cos(this.rotX);
        const sinX = Math.sin(this.rotX);
        const y2 = y * cosX - z1 * sinX;

        return {
          px: this.x + x1 * this.size,
          py: this.y + y2 * this.size
        };
      });

      ctx.save();
      ctx.strokeStyle = 'rgba(0, 245, 155, 0.22)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      edges.forEach(edge => {
        const p1 = projected[edge[0]];
        const p2 = projected[edge[1]];
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
      });
      ctx.stroke();
      ctx.restore();
    }
  }

  function initParticles() {
    particles = [];
    floatingCubes = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    const cubeCount = width < 768 ? 2 : 5;
    for (let i = 0; i < cubeCount; i++) {
      floatingCubes.push(new WireframeCube());
    }
  }

  initParticles();

  // FPS Telemetry
  let lastTime = performance.now();
  let frameCount = 0;
  let fps = 60;
  const fpsElement = document.getElementById('fps-counter');

  function animate(now) {
    ctx.clearRect(0, 0, width, height);

    // FPS calculation
    frameCount++;
    if (now - lastTime >= 500) {
      fps = Math.round((frameCount * 1000) / (now - lastTime));
      if (fpsElement) fpsElement.textContent = Math.min(fps, 60);
      frameCount = 0;
      lastTime = now;
    }

    // Connect particles within proximity (Physics NavMesh graph effect)
    const maxDist = width < 768 ? 95 : 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.18;
          ctx.strokeStyle = `rgba(0, 245, 155, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Render & update particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Render & update 3D wireframe cubes
    floatingCubes.forEach(cube => {
      cube.update();
      cube.draw();
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
