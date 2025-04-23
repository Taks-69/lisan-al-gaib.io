const revelations = [
    "Celui qui maîtrise l’épice maîtrise l’univers.",
    "L’eau est la vie. La parole est le pouvoir.",
    "L’ombre du désert cache les vérités oubliées.",
    "Il n’est pas l’homme, il est la voix.",
    "La peur tue l’esprit. Seule la foi transcende.",
    "Un destin écrit dans le sable ne peut être effacé.",
    "L’attente est le poison des prophètes.",
    "Vois au-delà du voile… la lumière y danse.",
    "Il marche sans traces, et pourtant tout le suit.",
    "Le désert écoute… et juge.",
    "L'épice coule, et les empires s'inclinent.",
    "Le silence du sable parle aux élus.",
    "L’avenir s’écrit dans les rêves de l’Arrakis.",
    "Ceux qui voient le futur portent le fardeau du présent.",
    "La tempête révèle les visages cachés.",
    "Seule la dune sait ce que cache le vent.",
    "Le Muad’Dib ne prédit pas, il se souvient de l’avenir.",
    "Dans chaque grain d’épice dort un secret ancien.",
    "Les vers ne prient pas, ils dévorent."
  ];
  
  let remaining = [...revelations];
  
  function getRandomUniqueRevelation() {
    if (remaining.length === 0) remaining = [...revelations];
    const idx = Math.floor(Math.random() * remaining.length);
    return remaining.splice(idx, 1)[0];
  }
  
  // Éléments
  const intro   = document.getElementById('intro-screen');
  const sand    = document.getElementById('sand-transition');
  const main    = document.getElementById('main-content');
  const refresh = document.getElementById('refresh');
  const flash   = document.getElementById('flash');
  
  // Séquence : intro → sable → contenu
  intro.addEventListener('click', () => {
    intro.classList.add('fade-out');
    setTimeout(() => {
      intro.remove();
      sand.classList.add('active');
      setTimeout(() => {
        sand.classList.remove('active');
        main.hidden = false;
        main.classList.add('fade-in');
        showRevelation();   // affiche la première vision tout de suite
      }, 1000);
    }, 800);
  });
  
  // Flash mystique + réapparition
  function triggerMysticFlash() {
    const hideables = document.querySelectorAll('main');
    hideables.forEach(el => {
      el.style.opacity = '0';
      el.style.transition = 'none';
    });
    flash.classList.add('active');
    setTimeout(() => {
      flash.classList.remove('active');
      hideables.forEach(el => {
        el.style.opacity = '1';
        el.style.transition = 'opacity 0.5s ease';
        el.classList.add('reappear');
      });
      setTimeout(() => {
        hideables.forEach(el => el.classList.remove('reappear'));
      }, 2200);
    }, 1000);
  }
  
  // Afficher une révélation unique
  function showRevelation() {
    triggerMysticFlash();
    const el = document.getElementById('revelation');
    el.classList.remove('revelation');
    void el.offsetWidth;
    el.textContent = getRandomUniqueRevelation();
    el.classList.add('revelation');
  }
  
  refresh.addEventListener('click', showRevelation);
  