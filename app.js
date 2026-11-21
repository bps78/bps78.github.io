/* ==========================================
   INTERACTIONS — FILTER, CASE STUDIES, THEME,
   RESPONSIVE NAVIGATION, SCROLL PROGRESS.
   No framework or build step required.
   ========================================== */
(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const projects = window.PORTFOLIO?.projects || [];
  const visuals = window.projectVisuals || {};
  const root = document.documentElement;
  const escapeHTML = (text) => String(text ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));

  /* Theme preference persists across both pages. */
  let storedTheme = null;
  try { storedTheme = localStorage.getItem('ben-portfolio-theme'); } catch (_) { /* storage may be disabled */ }
  const preferredTheme = storedTheme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    const button = $('#themeToggle');
    if (button) {
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      const icon = $('.theme-icon', button);
      if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
    }
  };
  applyTheme(preferredTheme);
  $('#themeToggle')?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('ben-portfolio-theme', next); } catch (_) { /* nonessential */ }
  });

  /* Small-screen navigation. */
  const menuToggle = $('#menuToggle');
  const navLinks = $('#navLinks');
  const closeMenu = () => {
    navLinks?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  };
  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    navLinks?.classList.toggle('open', !expanded);
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  });
  $$('#navLinks a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (navLinks?.classList.contains('open') && !event.target.closest('.site-nav')) closeMenu();
  });

  /* Site progress meter. */
  let ticking = false;
  const setProgress = () => {
    const maximum = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = maximum > 0 ? (window.scrollY / maximum) * 100 : 0;
    const progress = $('#pageProgress');
    if (progress) progress.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(setProgress); ticking = true; } }, {passive:true});
  addEventListener('resize', setProgress);
  setProgress();
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  /* Projects: copy and layout are separate, so editing is quick. */
  const grid = $('#projectGrid');
  if (grid) {
    grid.innerHTML = projects.map(project => `
      <article class="project-card" data-category="${escapeHTML(project.category)}" data-project="${escapeHTML(project.id)}">
        <button class="project-art-button" type="button" data-open="${escapeHTML(project.id)}" aria-label="Explore ${escapeHTML(project.title)}">
          ${visuals[project.visual] || ''}
        </button>
        <div class="project-copy">
          <div class="project-meta"><span>${escapeHTML(project.number)} / ${escapeHTML(project.categoryLabel)}</span><span>${escapeHTML(project.year)}</span></div>
          <h3>${escapeHTML(project.title)}</h3>
          <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
          <p class="project-summary">${escapeHTML(project.summary)}</p>
          <div class="project-card-footer"><span class="project-metric">${escapeHTML(project.metric)}</span><button type="button" class="card-open" data-open="${escapeHTML(project.id)}">View details ↗</button></div>
        </div>
      </article>`).join('');

    /* Functional project filters. */
    const filterButtons = $$('#projectFilters .filter-button');
    const filterProjects = (filter) => {
      let count = 0;
      $$('.project-card', grid).forEach(card => {
        const matches = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !matches);
        if (matches) count++;
      });
      filterButtons.forEach(button => {
        const selected = button.dataset.filter === filter;
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      const countDisplay = $('#resultsCount');
      if (countDisplay) countDisplay.textContent = `Showing ${String(count).padStart(2, '0')} project${count === 1 ? '' : 's'}`;
    };
    filterButtons.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));

    /* Accessible native <dialog> case studies, including Esc support. */
    const dialog = $('#caseDialog');
    const content = $('#dialogContent');
    let previousFocus;
    const showProject = (id) => {
      const project = projects.find(item => item.id === id);
      if (!project || !dialog || !content) return;
      previousFocus = document.activeElement;
      const links = project.links.map(link => `<a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} ↗</a>`).join('');
      content.innerHTML = `
        <div class="dialog-art">${visuals[project.visual] || ''}</div>
        <div class="dialog-body">
          <div class="dialog-kicker">${escapeHTML(project.number)} / ${escapeHTML(project.categoryLabel)} · ${escapeHTML(project.year)}</div>
          <h2 id="dialogTitle">${escapeHTML(project.title)}</h2>
          <p class="dialog-summary">${escapeHTML(project.summary)}</p>
          <div class="dialog-three">
            <section><h3>QUESTION</h3><p>${escapeHTML(project.question)}</p></section>
            <section><h3>APPROACH</h3><p>${escapeHTML(project.approach)}</p></section>
            <section><h3>RESULT</h3><p>${escapeHTML(project.outcome)}</p></section>
          </div>
          <div class="dialog-stack">${project.stack.map(s => `<span>${escapeHTML(s)}</span>`).join('')}</div>
          <div class="dialog-actions">${links}</div>
        </div>`;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      $('#dialogClose')?.focus();
    };
    grid.addEventListener('click', event => {
      const button = event.target.closest('[data-open]');
      if (button) showProject(button.dataset.open);
    });
    const closeDialog = () => dialog?.close();
    $('#dialogClose')?.addEventListener('click', closeDialog);
    dialog?.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
    dialog?.addEventListener('close', () => { document.body.style.overflow = ''; previousFocus?.focus?.(); });
  }

  /* Lightweight scroll reveals; opt out for reduced-motion users. */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const sections = $$('.section-topline, .section-title-row, .project-card, .about-left, .about-right, .experience-intro, .timeline-item, .contact-section h2');
    sections.forEach(el => el.classList.add('reveal'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:.06, rootMargin:'0px 0px 40px 0px'});
    sections.forEach(el => observer.observe(el));
  }
})();
