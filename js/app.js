document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  const data = window.DEFAULT_DATA || {};
  if (!data.profile) return;

  renderProfile(data.profile);
  renderServices(data.services || []);
  renderContactServiceOptions(data.services || []);
  renderProjects(data.projects || []);
  toggleSection('portfolio', data.projects?.length);
  toggleSection('experience', data.experiences?.length || data.education?.length || Object.keys(data.skills || {}).length);
  initContactForm(data.profile);
  initNavigation();
}

function renderProfile(profile) {
  setText('hero-role', profile.currentRole);
  setText('hero-desc', profile.bio);
  setText('hero-availability', profile.availability);
  setText('float-role', profile.title);
  setText('contact-location', profile.location);
  setText('footer-role', profile.currentRole);

  const heroAvatar = document.getElementById('hero-avatar');
  if (heroAvatar && profile.avatar) {
    heroAvatar.src = profile.avatar;
    heroAvatar.alt = profile.name;
  }

  const phone = document.getElementById('contact-phone');
  if (phone) {
    phone.textContent = profile.phone;
    phone.href = `tel:${profile.phone.replace(/[^0-9+]/g, '')}`;
  }

  const email = document.getElementById('contact-email');
  if (email) {
    email.textContent = profile.email;
    email.href = `mailto:${profile.email}`;
  }

  const message = encodeURIComponent(`Halo ${profile.name}, saya ingin mendiskusikan kebutuhan IT.`);
  const whatsapp = document.getElementById('contact-wa-direct');
  if (whatsapp) whatsapp.href = `https://wa.me/${profile.whatsapp}?text=${message}`;

  const socialLinks = {
    'social-linkedin': profile.linkedin,
    'social-github': profile.github,
    'social-instagram': profile.instagram,
    'social-whatsapp': `https://wa.me/${profile.whatsapp}`
  };
  Object.entries(socialLinks).forEach(([id, href]) => {
    const link = document.getElementById(id);
    if (link) link.href = href;
  });
}

function renderServices(services) {
  const container = document.getElementById('services-grid');
  if (!container) return;
  container.innerHTML = services.map((service, index) => `
    <article class="glass-card service-card">
      <div class="service-card-top"><span class="service-index">0${index + 1}</span></div>
      <h3 class="service-name">${escapeHTML(service.name)}</h3>
      <p class="service-tagline">${escapeHTML(service.tagline || '')}</p>
      <p class="service-desc">${escapeHTML(service.description)}</p>
      <ul class="service-deliverables">${(service.deliverables || []).map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>
      <button class="btn btn-primary btn-choose-service" type="button" data-service="${escapeHTML(service.name)}">Ngobrol soal ini</button>
    </article>
  `).join('');

  container.querySelectorAll('.btn-choose-service').forEach(button => {
    button.addEventListener('click', () => {
      const select = document.getElementById('form-service');
      if (select) select.value = button.dataset.service;
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderProjects(projects) {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  container.innerHTML = projects.map(project => `
    <article class="project-card">
      ${project.image ? `<img class="project-image" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || project.title)}" width="1448" height="1086" loading="lazy">` : ''}
      <p class="project-type">${escapeHTML(project.type)}</p>
      <h3>${escapeHTML(project.title)}</h3>
      <p>${escapeHTML(project.summary)}</p>
      <ul>${(project.details || []).map(detail => `<li>${escapeHTML(detail)}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderContactServiceOptions(services) {
  const select = document.getElementById('form-service');
  if (!select) return;
  select.innerHTML = [...services.map(service => `<option value="${escapeHTML(service.name)}">${escapeHTML(service.name)}</option>`), '<option value="Konsultasi umum">Konsultasi umum</option>'].join('');
}

function initContactForm(profile) {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    const getValue = id => form.querySelector(id).value.trim();
    const name = getValue('#form-name');
    const company = getValue('#form-company');
    const email = getValue('#form-email');
    const phone = getValue('#form-phone');
    const service = getValue('#form-service');
    const message = getValue('#form-message');

    if (!name || !phone || !message) return;

    const text = `Halo ${profile.name},\nSaya ${name}${company ? ` dari ${company}` : ''}.\n\nSaya mau ngobrol soal: ${service}\nKontak: ${phone}${email ? ` (${email})` : ''}\n\nCeritanya begini:\n${message}`;
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    form.reset();
  });
}

function initNavigation() {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.nav-menu');
  document.querySelector('.mobile-toggle')?.addEventListener('click', () => menu?.classList.toggle('open'));
  menu?.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
  window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
}

function toggleSection(id, shouldShow) {
  const section = document.getElementById(id);
  if (section) section.hidden = !shouldShow;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && value) element.textContent = value;
}

function escapeHTML(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
