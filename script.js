// Configuration dynamique du site
const siteConfig = {
  cvUrl: '#',
  linkedinUrl: '#',
  lang: 'en',
  i18n: {
    fr: {
      navHome: 'Home',
      navAbout: 'About',
      navContact: 'Contact',
      ctaProjects: 'Voir mes projets',
      cv: 'Télécharger mon CV',
      recentProjects: 'Projets récents',
      about: 'À propos',
      objectiveTitle: 'Objectif professionnel',
      experiencesTitle: 'Expériences',
      educationTitle: 'Formation',
      certsTitle: 'Certifications',
      skillsTitle: 'Compétences',
      contact: 'Contact',
      contactInfo: 'Informations directes',
      labels: { name: 'Nom', email: 'Email', message: 'Message', send: 'Envoyer' },
      dataProjects: 'Projets DATA',
      webProjects: 'Projets WEB',
      modalOpen: 'Ouvrir le projet'
    },
    en: {
      navHome: 'Home',
      navAbout: 'About',
      navContact: 'Contact',
      ctaProjects: 'View my projects',
      cv: 'Download my CV',
      recentProjects: 'Recent projects',
      about: 'About',
      objectiveTitle: 'Professional objective',
      experiencesTitle: 'Experience',
      educationTitle: 'Education',
      certsTitle: 'Certifications',
      skillsTitle: 'Skills',
      contact: 'Contact',
      contactInfo: 'Direct information',
      labels: { name: 'Name', email: 'Email', message: 'Message', send: 'Send' },
      dataProjects: 'DATA Projects',
      webProjects: 'WEB Projects',
      modalOpen: 'Open project'
    }
  },
  projects: [
    {
      title: 'Pipeline de données & Automatisation',
      description: "Conception d'un pipeline ETL fiable pour alimenter des dashboards.",
      image: 'images/projet pipeline de données.png',
      details: "Extraction multi-sources, normalisation, orchestration et contrôle qualité pour alimenter un entrepôt unique.",
      link: '#',
      type: 'DATA'
    },
    {
      title: 'Dashboard QuickSight',
      description: "KPI temps-réel sur AWS QuickSight pour la prise de décision sur le contenu.",
      image: 'images/projet Quicksight.png',
      details: "Modélisation sémantique, calculs KPI et storytelling pour les métiers.",
      link: '#',
      type: 'DATA'
    },
    {
      title: 'Analytique Projet Sunu-BRT',
      description: "Mise en place et monitoring des serveurs Kajou wifi sur les bus BRT",
      image: 'images/projet sunu-brt.jpg',
      details: "Suivi des usages et performances opérationnelles, alertes et monitoring.",
      link: '#',
      type: 'DATA'
    },
    {
      title: 'Data Viz – Portefeuille Projets',
      description: 'Enquete et Synthèse multi-indicateurs pour pilotage annuel.',
      image: 'images/projet.png',
      details: "Vue consolidée des projets, scoring et priorisation des actions.",
      link: '#',
      type: 'DATA'
    },
   
    {
      title: "Suivi utilisation de l'application Kajou à temps réel",
      description: 'Métriques d’impact clés et storytelling data.',
      image: 'images/projet 1.png',
      details: "Indicateurs clés d'impact, données d'utilisation et prise de décision.",
      link: '#',
      type: 'DATA'
    },
    {
      title: 'Rapport trimestriel automatique',
      description: 'Suivi des usages et rétention – mobile analytics.',
      image: 'images/Capture d’écran 2025-03-29 à 10.03.34.png',
      details: "Entonnoirs d'activation, cohorte de rétention, segmentation pays.",
      link: '#',
      type: 'DATA'
    },
    {
      title: 'Site vitrine institutionnel',
      description: 'Design moderne, accessibilité et SEO technique.',
      image: 'images/design.png',
      details: "Stack: HTML5, CSS moderne, animations et Lighthouse > 95.",
      link: '#',
      type: 'WEB'
    },
    {
      title: 'Catalogue produits responsive',
      description: 'Grille réactive, fiches, recherche, favoris.',
      image: 'images/projet 1.png',
      details: "UX mobile-first, lazy-loading images, cache navigateur.",
      link: '#',
      type: 'WEB'
    },
    {
      title: 'Dashboard admin React',
      description: 'Gestion utilisateurs, rôles, analytics intégrés.',
      image: 'images/design 2.png',
      details: "React + API REST, tables filtrables et graphiques légers.",
      link: '#',
      type: 'WEB'
    },
    
    {
      title: 'Landing page SaaS',
      description: 'Sections pricing, FAQ, call-to-action performants.',
      image: 'images/Capture d’écran 2025-03-29 à 06.47.11.png',
      details: "A/B testing des CTA, intégration analytics.",
      link: '#',
      type: 'WEB'
    },
    {
      title: 'Espace client sécurisé',
      description: 'Authentification, profil, historique, support.',
      image: 'images/Capture d’écran 2025-03-29 à 10.03.34.png',
      details: "Formulaires robustes, validations et UX states.",
      link: '#',
      type: 'WEB'
    },
    {
      title: 'Mini blog technique',
      description: 'Articles, tags, recherche instantanée.',
      image: 'images/projet.png',
      details: "Markdown, performance et accessibilité AA.",
      link: '#',
      type: 'WEB'
    }
  ],
  hero: {
    name: 'TIDIANE DIA',
    role: 'Ingénieur Data & Aide à la Décision',
    subtext:
      "Passionné par la Data, la Business Intelligence et l’automatisation des décisions. J’accompagne les organisations dans la construction de pipelines, la création de dashboards impactants et la valorisation des données pour une meilleure prise de décision."
  }
};

function setHeroContent() {
  const nameEl = document.getElementById('hero-name');
  const roleEl = document.getElementById('hero-role');
  const subEl = document.getElementById('hero-subtext');
  if (nameEl) nameEl.textContent = siteConfig.hero?.name ?? nameEl.textContent;
  if (roleEl) roleEl.textContent = siteConfig.hero?.role ?? roleEl.textContent;
  if (subEl) subEl.textContent = siteConfig.hero?.subtext ?? subEl.textContent;
}

function applyTranslations(lang) {
  const t = siteConfig.i18n[lang] || siteConfig.i18n.fr;
  const setText = (id, text) => { const el = document.getElementById(id); if (el && text) el.textContent = text; };
  setText('nav-home', t.navHome);
  setText('nav-about', t.navAbout);
  setText('nav-contact', t.navContact);
  setText('cta-projects', t.ctaProjects);
  setText('title-recent-projects', t.recentProjects);
  setText('title-about', t.about);
  setText('about-objective-title', t.objectiveTitle);
  setText('about-experiences-title', t.experiencesTitle);
  setText('about-education-title', t.educationTitle);
  setText('about-certifications-title', t.certsTitle);
  setText('about-skills-title', t.skillsTitle);
  setText('title-contact', t.contact);
  setText('contact-info-title', t.contactInfo);
  setText('label-name', t.labels.name);
  setText('label-email', t.labels.email);
  setText('label-message', t.labels.message);
  setText('btn-send', t.labels.send);
  // titles on projects page
  setText('title-data-projects', t.dataProjects);
  setText('title-web-projects', t.webProjects);
  const modalLink = document.getElementById('modal-link');
  if (modalLink) modalLink.textContent = t.modalOpen;
  const modalDescTitle = document.getElementById('modal-desc-title');
  if (modalDescTitle) modalDescTitle.textContent = lang === 'en' ? 'Description' : 'Description';
  const modalProcessTitle = document.getElementById('modal-process-title');
  if (modalProcessTitle) modalProcessTitle.textContent = lang === 'en' ? 'Process' : 'Processus';
}

function renderProjects(containerId = 'projects-cards', limit = 6) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const items = containerId === 'projects-cards'
    ? siteConfig.projects.slice(0, limit)
    : siteConfig.projects;
  items.forEach((p, indexInSlice) => {
    const index = siteConfig.projects.indexOf(p);
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.index = String(index);
    const title = siteConfig.lang === 'en' && p.title_en ? p.title_en : p.title;
    const desc = siteConfig.lang === 'en' && p.description_en ? p.description_en : p.description;
    card.innerHTML = `
      <div class="card-media">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <p class="card-text">${desc}</p>
      </div>
    `;
    card.addEventListener('click', () => openProjectModal(index));
    container.appendChild(card);
  });
}

function renderProjectsByType(type, containerId, limit = 6) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const items = siteConfig.projects.filter((p) => p.type === type).slice(0, limit);
  items.forEach((p) => {
    const index = siteConfig.projects.indexOf(p);
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.index = String(index);
    card.innerHTML = `
      <div class="card-media">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-text">${p.description}</p>
      </div>
    `;
    card.addEventListener('click', () => openProjectModal(index));
    container.appendChild(card);
  });
}

function setupLinks() {
  const cvLink = document.getElementById('cv-link');
  const headerLinkedin = document.getElementById('linkedin-link');
  const contactLinkedin = document.getElementById('contact-linkedin');
  if (cvLink && siteConfig.cvUrl) cvLink.href = siteConfig.cvUrl;
  if (headerLinkedin && siteConfig.linkedinUrl) headerLinkedin.href = siteConfig.linkedinUrl;
  if (contactLinkedin && siteConfig.linkedinUrl) contactLinkedin.href = siteConfig.linkedinUrl;
}

function setupMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  // Fermer après clic sur un lien
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

function setupLanguageSwitcher() {
  const saved = localStorage.getItem('portfolio_lang');
  if (saved) siteConfig.lang = saved;
  applyTranslations(siteConfig.lang);
  // Projets utilisent éventuellement des champs _en
  // Re-render sections that depend on language
  renderProjects('projects-cards', 6);
  if (document.getElementById('projects-data-cards')) {
    renderProjectsByType('DATA', 'projects-data-cards', 6);
  }
  if (document.getElementById('projects-web-cards')) {
    renderProjectsByType('WEB', 'projects-web-cards', 6);
  }
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang') || 'fr';
      siteConfig.lang = lang;
      localStorage.setItem('portfolio_lang', lang);
      applyTranslations(lang);
      renderProjects('projects-cards', 6);
      if (document.getElementById('projects-data-cards')) {
        renderProjectsByType('DATA', 'projects-data-cards', 6);
      }
      if (document.getElementById('projects-web-cards')) {
        renderProjectsByType('WEB', 'projects-web-cards', 6);
      }
    });
  });
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const el = document.querySelector(targetId);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value?.trim() ?? '';
    const email = document.getElementById('email')?.value?.trim() ?? '';
    const message = document.getElementById('message')?.value?.trim() ?? '';
    const to = 'diatidiane91@gmail.com';
    const subject = encodeURIComponent(`Contact portfolio – ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

function preloadImages() {
  siteConfig.projects.forEach((p) => {
    const img = new Image();
    img.src = p.image;
  });
}

// Modal – ouverture/fermeture
function openProjectModal(index) {
  const project = siteConfig.projects[index];
  const modal = document.getElementById('project-modal');
  if (!project || !modal) return;
  const img = document.getElementById('modal-image');
  const title = document.getElementById('modal-title');
  const text = document.getElementById('modal-text');
  const link = document.getElementById('modal-link');
  const tech = document.getElementById('modal-tech');
  const processList = document.getElementById('modal-process');
  const modalProblem = document.getElementById('modal-problem');
  const modalSolution = document.getElementById('modal-solution');
  const modalResult = document.getElementById('modal-result');
  if (img) { img.src = project.image; img.alt = project.title; }
  const titleText = siteConfig.lang === 'en' && project.title_en ? project.title_en : project.title;
  const detailsText = siteConfig.lang === 'en' && project.details_en ? project.details_en : (project.details || project.description);
  if (title) title.textContent = titleText;
  if (text) text.textContent = detailsText;
  // Technologies badges
  if (tech) {
    tech.className = 'meta';
    const stack = project.tech || [];
    tech.innerHTML = stack.map((t) => `<span class="badge">${t}</span>`).join('');
  }
  // Process (Problem / Solution / Result)
  if (modalProblem) modalProblem.textContent = project.problem || '';
  if (modalSolution) modalSolution.textContent = project.solution || '';
  if (modalResult) modalResult.textContent = project.result || '';
  if (processList) {
    processList.innerHTML = '';
    const steps = project.process || [];
    steps.forEach((s) => {
      const li = document.createElement('li');
      li.textContent = s;
      processList.appendChild(li);
    });
  }
  if (link) {
    if (project.link && project.link !== '#') {
      link.href = project.link; link.style.display = 'inline-flex';
    } else {
      link.style.display = 'none';
    }
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  // close handlers
  modal.querySelectorAll('[data-close="true"]').forEach((el) => el.addEventListener('click', closeProjectModal, { once: true }));
  document.addEventListener('keydown', escCloseHandler);
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', escCloseHandler);
}

function escCloseHandler(e) {
  if (e.key === 'Escape') closeProjectModal();
}

document.addEventListener('DOMContentLoaded', () => {
  setHeroContent();
  renderProjects('projects-cards', 6);
  // Rendu sur la page projets si présente
  if (document.getElementById('projects-data-cards')) {
    renderProjectsByType('DATA', 'projects-data-cards', 6);
  }
  if (document.getElementById('projects-web-cards')) {
    renderProjectsByType('WEB', 'projects-web-cards', 6);
  }
  setupLinks();
  setupMobileNav();
  setupLanguageSwitcher();
  setupSmoothAnchors();
  setupContactForm();
  preloadImages();
});


