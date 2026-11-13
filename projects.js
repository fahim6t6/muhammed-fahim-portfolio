const projects = [
  {
    title: 'TDM',
    subtitle: 'Multiplayer System',
    category: 'multiplayer',
    categoryLabel: '3D & Multiplayer',
    videoUrl: 'https://drive.google.com/file/d/1WddtgPAOyl7fnEtqtgWxqgqfnHK7mYb1/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/TDM.png',
    tags: ['Unity 3D', 'Netcode', 'Relay', 'Multiplayer System'],
    points: [
      'Developed a real-time 3D multiplayer Team Deathmatch game in Unity using Netcode and Relay.',
      'Implemented room-code matchmaking with 1v1, 2v2, 3v3, and 4v4 team modes.',
      'Built synchronized movement, shooting, health, ammo/reload, ammo pickup, respawning, and team scoring systems.',
      'Used a server-authoritative system to validate damage, scores, player state, and match results.',
      'Created HUD, kill feed, match timer, game-over results, battle ground animation, audio effects, and pause/settings controls.'
    ]
  },
  {
    title: 'Tripeaks',
    subtitle: 'Solitaire Collections',
    category: 'casual',
    categoryLabel: '2D & Casual',
    videoUrl: 'https://drive.google.com/file/d/1AAswEJLzFgyOYu85BxQqFe50fIb1sBPT/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Tripeaks.png',
    tags: ['Unity 2D', 'C#', 'Mobile', 'Card Systems'],
    points: [
      'Implemented a winning condition where players clear all three peaks by selecting cards one rank higher or lower than the current card.',
      'Implemented complete card systems including deck generation, shuffling, drag-and-drop controls, auto card movement, undo functionality, and win validation.',
      'Designed fully solvable game generation systems using seed-based algorithms with multiple difficulty levels for balanced and replayable gameplay.'
    ]
  },
  {
    title: 'Pyramid',
    subtitle: 'Solitaire Collections',
    category: 'casual',
    categoryLabel: '2D & Casual',
    videoUrl: 'https://drive.google.com/file/d/132L2h9qsko8bLpNVl5i6TwrsknByB3LW/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Pyramid%20.png',
    tags: ['Unity 2D', 'C#', 'Mobile', 'Algorithms'],
    points: [
      'Implemented a winning condition where players clear the entire card pyramid by matching pairs of cards that add up to 13.',
      'Implemented complete card systems including deck generation, shuffling, drag-and-drop controls, auto card movement, undo functionality, and win validation.',
      'Designed fully solvable game generation systems using seed-based algorithms with multiple difficulty levels for balanced and replayable gameplay.'
    ]
  },
  {
    title: 'Zombie Arcade',
    subtitle: 'Survival FPS',
    category: 'multiplayer',
    categoryLabel: '3D Action',
    videoUrl: 'https://drive.google.com/file/d/11fp7c4TccYjdeT83g56FNN7r_mF3akY4/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Zombie%20arcade.png',
    tags: ['Unity 3D', 'NavMesh AI', 'FPS', 'Animation'],
    points: [
      'Developed an offline arcade-style zombie survival game in Unity with an immersive first-person player experience.',
      'Implemented NavMesh-based zombie AI that detects players within a radius, chases targets, and supports a “kill all zombies” survival objective.',
      'Added zombie animations and voice/audio effects; project currently under active development.'
    ]
  },
  {
    title: 'Bowling',
    subtitle: 'Physics Game',
    category: 'multiplayer',
    categoryLabel: '3D Physics',
    videoUrl: 'https://drive.google.com/file/d/1o5zCCTqqNYa0JaZFbKNG78p723zTrdQP/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Bowling.jpg',
    tags: ['Unity 3D', 'Rigidbody Physics', 'UI/UX Design'],
    points: [
      'Implemented realistic physics for accurate pin and ball interactions.',
      'Scripted realistic ball dynamics using Unity’s Rigidbody and physics engine for authentic gameplay feel.',
      'Mapped intuitive gaming controls: A (move ball left), D (move ball right), Space (shoot ball).',
      'Added UI/UX highscore button to track and display the player’s highest score.',
      'Integrated sound effects and music for realistic rolling ball motion and pin falls.'
    ]
  },
  {
    title: 'Ball Runner',
    subtitle: 'Android Game',
    category: 'mobile',
    categoryLabel: 'Mobile',
    videoUrl: 'https://drive.google.com/file/d/1hrBycpA1zc5vuZ0FLfnlAgGZXzd3Ovqg/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Ball%20Runner.png',
    tags: ['Mobile (Android)', 'Gyroscope Sensor', 'Unity 3D', 'Physics'],
    points: [
      'Implemented gyroscope tilt controls to maneuver the ball left and right by physically tilting the mobile device.',
      'Developed a forward movement button for continuous ball control with integrated ambient background music.',
      'Created challenging shaking and unbalanced bridge mechanics with real-time collision and fall detection.',
      'Developed a multi-stage level completion system where players must reach the target destination safely.'
    ]
  },
  {
    title: 'Endless Runner',
    subtitle: 'Dynamic Runner',
    category: 'multiplayer',
    categoryLabel: '3D Action',
    videoUrl: 'https://drive.google.com/file/d/1vG7jjHGlXUtp-bGqt6rvjRCAY1lahARB/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Endless.png',
    tags: ['Unity 3D', 'Character Animation', 'Dynamic Spawning', 'Collision System'],
    points: [
      'Implemented collectible coins along the running path that dynamically reward the player and increment the score.',
      'Engineered responsive collision mechanics for interacting with coins, hazards, and environmental obstacles.',
      'Integrated fluid character running animation for forward movement and dynamic ragdoll/fall animation on impact.',
      'Engineered an endless environment generator that dynamically spawns world tiles ahead of player movement.',
      'Paired high-energy background music with crisp audio effects for coin pickups and obstacle hits.'
    ]
  },
  {
    title: 'Tank vs Tank',
    subtitle: '3D Combat',
    category: 'multiplayer',
    categoryLabel: '3D Combat',
    videoUrl: 'https://drive.google.com/file/d/10ilh2Qev35HVR6l61sBsPoey-Px3-qdc/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Tank%20vs%20Tank.jpg',
    tags: ['Unity 3D', 'Enemy AI', 'Projectile Physics', 'Combat Systems'],
    points: [
      'Built a full 3D player-versus-enemy tank battle arena game in Unity.',
      'Created an autonomous enemy AI system featuring patrol paths, line-of-sight player detection, and tactical attack behaviors.',
      'Scripted realistic projectile ballistics, explosive collision detection, and damage calculations.',
      'Integrated responsive HUD health bars for real-time tracking of both player and opponent status.',
      'Added high-impact audio effects for cannon fire, explosions, and heavy tank engine treads.'
    ]
  },
  {
    title: 'Snow Skater',
    subtitle: '2D Platformer',
    category: 'casual',
    categoryLabel: '2D Physics',
    videoUrl: 'https://drive.google.com/file/d/1v135bDtjt62H9B79UqAb0RkVn0nc8J7i/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Skating.jpg',
    tags: ['Unity 2D', 'Surface Effector 2D', 'Sprite Shape', 'Particle FX'],
    points: [
      'Navigate a snow skater down steep slopes, avoiding hazards while collecting items and reaching the finish line.',
      'Utilized Surface Effector 2D to create realistic low-friction ice and snow physics with momentum accumulation.',
      'Constructed organic hillside levels with Unity Sprite Shape Controller for smooth hills, jumps, and valleys.',
      'Created visual particle systems for snow puffs upon landing/impact and a celebratory confetti burst on winning.',
      'Composed realistic audio including snow carving, crunchy collision hits, and ambient winter music.'
    ]
  },
  {
    title: 'Pizza Delivery',
    subtitle: 'Driving Game',
    category: 'multiplayer',
    categoryLabel: '3D Simulation',
    videoUrl: 'https://drive.google.com/file/d/12YgrkZVpOlT6GkQIXww3CTCwe9tFMVTW/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Pizza.jpg',
    tags: ['Unity 3D', 'Car Physics', 'Level Design', 'Game State Logic'],
    points: [
      'Designed responsive, arcade-style vehicle steering and acceleration controls.',
      'Engineered interactive delivery logic: vehicle dynamically turns blue when carrying a pizza and reverts upon delivery.',
      'Built a charming low-poly town featuring roads, ponds, rivers, trees, and residential drop-off points.',
      'Managed full game loop logic including order countdown timer, speed boost pickups, and win/lose evaluations.'
    ]
  },
  {
    title: 'Space Coin Collector',
    subtitle: 'Arcade Flight',
    category: 'casual',
    categoryLabel: '2D Arcade',
    videoUrl: 'https://drive.google.com/file/d/1Uv_9mvrXKqnWzMDVKH-3CHSj3R9LxjPw/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Space%20jet.jpg',
    tags: ['Unity 2D', 'Arcade Mechanics', 'Procedural Tiles', 'Space Shooter'],
    points: [
      'Equipped jet with nimble 2D flight controls to dodge floating hazards while grabbing floating space coins.',
      'Implemented robust trigger and collision systems for collecting score points or incurring shield damage.',
      'Created an endless scrolling universe through seamless background looping and procedural tile spawning.',
      'Randomized hazard generation for asteroids and shields to keep every run fresh and challenging.',
      'Accompanied with atmospheric retro-futuristic synth music and retro laser/pickup sound effects.'
    ]
  },
  {
    title: 'Jet Parking',
    subtitle: 'Flight Challenge',
    category: 'multiplayer',
    categoryLabel: '3D Simulation',
    videoUrl: 'https://drive.google.com/file/d/1ynY8w6l56bwi8N-xQgBz5X5vKJ6fgiN9/view?usp=drivesdk',
    image: 'https://raw.githubusercontent.com/fahim6t6/Fahim/main/Jet%20parking.jpg',
    tags: ['Unity 3D', 'Flight Simulation', '3D Level Design', 'Impact Physics'],
    points: [
      'Developed core aerodynamic flight and landing mechanics for island-to-island navigation.',
      'Crafted 5 challenging levels featuring tight island canyons, stationary towers, and moving aerial creatures.',
      'Programmed full 3D flight controls: W (throttle), A (yaw left), S (air brake), D (yaw right), Space (vertical lift).',
      'Configured high-stakes crash physics: collisions with terrain or creatures trigger instant Game Over.',
      'Engineered impact particle systems (smoke, sparks, flying debris) and distinct landing completion chimes.'
    ]
  }
];

function renderProjects(filter = 'all') {
  const grid = document.querySelector('#project-grid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter || (filter === 'mobile' && p.tags.some(t => t.toLowerCase().includes('mobile') || t.toLowerCase().includes('android'))));

  grid.innerHTML = filtered.map((p, index) => `
    <article class="project-card" data-category="${p.category}">
      <div class="card-media-wrapper">
        <a class="card-media" href="${p.videoUrl}" target="_blank" rel="noopener noreferrer" aria-label="Watch demo of ${p.title}">
          <img src="${p.image}" alt="${p.title} thumbnail" loading="lazy" />
          <div class="media-overlay">
            <div class="play-btn-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span class="watch-text">Watch Gameplay Demo</span>
          </div>
          <span class="project-index">#${String(index + 1).padStart(2, '0')}</span>
          <span class="category-pill">${p.categoryLabel}</span>
        </a>
      </div>
      
      <div class="card-content">
        <div class="card-header">
          <div>
            <h3 class="card-title">${p.title}</h3>
            <span class="card-subtitle">${p.subtitle}</span>
          </div>
          <a class="demo-link-btn" href="${p.videoUrl}" target="_blank" rel="noopener noreferrer">
            <span>Demo</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17l9.2-9.2M17 17V8H8"/>
            </svg>
          </a>
        </div>

        <div class="tags-container">
          ${p.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
        </div>

        <ul class="points-list">
          ${p.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
});
