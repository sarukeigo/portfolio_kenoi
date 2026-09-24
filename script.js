const projects = {
  neutron: {
    title: 'Neutron-2', eyebrow: 'MISSION 01 / SPACE SYSTEMS',
    description: 'A 3U CubeSat mission at the Hawaiʻi Space Flight Laboratory, funded by the University Nanosatellite Program and supported by AFRL’s Small Satellite Portfolio. The mission studies the radiation environment in low Earth orbit.',
    role: 'Chief Engineer', period: 'January 2025 – Present',
    contributions: [
      'Reviewed and validated system diagrams, technical requirements, and subsystem budgets for design compliance and mission feasibility.',
      'Led team meetings and technical discussions, delegated responsibilities, and coordinated work toward project milestones.',
      'Helped team members resolve technical challenges and remove project roadblocks.',
      'Presented the Neutron-2 Preliminary Mission Review to UNP advisors at SmallSat in August 2025 and the mission to optical systems professionals at AMOS in September 2025.'
    ],
    toolsHeading: 'Tools & focus areas', tools: ['SolidWorks', 'Structural FEA', 'STK', 'ThermalDesktop', 'MATLAB', 'Capella / MBSE'],
    url: 'https://www.hsfl.hawaii.edu/missions/neutron-2/',
    note: 'Mission background provided by the Hawaiʻi Space Flight Laboratory.'
  },
  aeris: {
    title: 'AERIS', eyebrow: 'MISSION 04 / STUDENT-LED EXPLORATION',
    description: 'A student-led 6U CubeSat mission selected under NASA’s CubeSat Launch Initiative (CSLI). AERIS is inherited from the EPET program’s VIA-SEEs mission, with students responsible for defining their own tasks, schedules, and deliverables.',
    role: 'Former Chief Engineer', period: 'January – December 2025',
    tools: ['SolidWorks', 'STK', 'ThermalDesktop', 'MATLAB', 'Capella / MBSE'],
    url: 'https://www.hawaii.edu/news/2023/04/25/student-team-develop-cubesat/',
    note: 'Read the original 2023 VIA-SEEs selection announcement from UH News for background on the mission’s selection under NASA’s CubeSat Launch Initiative.'
  },
  aiaa: {
    title: 'AIAA at UH Mānoa', eyebrow: 'LEADERSHIP 02 / AEROSPACE COMMUNITY',
    description: 'The American Institute of Aeronautics and Astronautics student branch at the University of Hawaiʻi at Mānoa connects students with the aerospace community through events, professional connections, and outreach.',
    role: 'Student Branch President', period: 'May 2025 – Present',
    toolsHeading: 'Focus areas', tools: ['Leadership', 'Event organization', 'Professional connections', 'STEM outreach'],
    url: 'https://uhaiaa.github.io/uhaiaa-website/', sourceLabel: 'Visit the UH AIAA website',
    note: 'Explore the student branch’s activities and community on the UH AIAA website.'
  },
  hsgc: {
    title: 'Hawaiʻi Space Grant Consortium', eyebrow: 'RESEARCH 03 / SATELLITE HARDWARE',
    description: 'Undergraduate research connecting the Callisto-Sat upgrade of the Artemis CubeSat Kit with the hands-on lessons of AERIS: SPATIUM.',
    role: 'Undergraduate Research Intern', period: 'August 2025 – Present',
    toolsHeading: 'Tools & focus areas', tools: ['Capella / MBSE', 'F′ / F Prime', 'SPI', 'SatNOGs COMMs', 'Hardware integration', 'Technical documentation'],
    url: 'https://www.spacegrant.hawaii.edu/', sourceLabel: 'Visit Hawaiʻi Space Grant',
    note: 'Learn more about the Hawaiʻi Space Grant Consortium on its official website.'
  },
  rose: {
    title: 'RoSE Lab', eyebrow: 'PROJECT 05 / ROBOTIC SPACE EXPLORATION',
    description: 'My introduction to engineering through a rover project for the NASA Mars Rover Challenge, with a focus on mechanical design and hands-on construction.',
    role: 'Mechanical Engineer', period: 'Introductory engineering role',
    toolsHeading: 'Tools & focus areas', tools: ['SolidWorks', 'Rover assembly', 'Wheel design'],
    url: 'https://www.hsfl.hawaii.edu/planetary-surface-robots/',
    sourceLabel: 'Explore the RoSE Lab',
    note: 'The HSFL RoSE Lab page provides background on planetary surface robotics.'
  }
};

const navigation = document.getElementById('main-nav');
const menuToggle = document.querySelector('.menu-toggle');
const mobileQuery = window.matchMedia('(max-width: 960px)');
function closeMenu(returnFocus = false) {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  if (returnFocus) menuToggle.focus();
}
menuToggle.hidden = false;
document.body.classList.add('has-menu');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || !mobileQuery.matches) return;
  closeMenu();
  if (link.hash && link.origin === window.location.origin) {
    const section = document.querySelector(link.hash);
    if (section) { section.tabIndex = -1; section.focus({ preventScroll: true }); }
  } else { menuToggle.focus(); }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) closeMenu(); });
mobileQuery.addEventListener('change', () => closeMenu());

const dialog = document.getElementById('project-dialog');
const caseStudies = new Map(['neutron', 'aiaa', 'hsgc', 'aeris', 'rose'].map(key => {
  const content = document.getElementById(`${key}-case-study`);
  return [projects[key], { content, home: content.parentElement, link: content.parentElement.querySelector(':scope > a') }];
}));
const caseStudySlot = document.getElementById('dialog-case-study');
function restoreCaseStudies() {
  for (const { content, home, link } of caseStudies.values()) home.insertBefore(content, link);
}
let projectTrigger;
let activeProject;
function renderProject(project) {
  const { t } = portfolioI18n;
  const caseStudy = caseStudies.get(project);
  const isCaseStudy = Boolean(caseStudy);
  dialog.classList.toggle('is-case-study', isCaseStudy);
  document.getElementById('dialog-contributions-heading').hidden = isCaseStudy;
  document.getElementById('dialog-contributions').hidden = isCaseStudy;
  caseStudySlot.hidden = !isCaseStudy;
  // Move the original nodes so translations and the no-JavaScript version stay in sync.
  restoreCaseStudies();
  if (caseStudy) caseStudySlot.append(caseStudy.content);
  document.getElementById('dialog-title').textContent = t(project.title);
  document.getElementById('dialog-eyebrow').textContent = t(project.eyebrow);
  document.getElementById('dialog-description').textContent = t(project.description);
  document.getElementById('dialog-contributions-heading').textContent = t(project.heading || 'My contributions');
  document.getElementById('dialog-tools-heading').textContent = t(project.toolsHeading || 'Tools');
  document.getElementById('dialog-source-label').textContent = t(project.sourceLabel || 'Official project background');
  document.getElementById('dialog-meta').replaceChildren(...[project.role, project.period].map(text => {
    const span = document.createElement('span'); span.textContent = t(text); return span;
  }));
  for (const [id, values] of [['dialog-contributions', project.contributions || []], ['dialog-tools', project.tools]]) {
    document.getElementById(id).replaceChildren(...values.map(text => {
      const li = document.createElement('li'); li.textContent = t(text); return li;
    }));
  }
  document.getElementById('dialog-source').href = project.url;
  document.getElementById('dialog-source-note').textContent = t(project.note);
}
if (typeof dialog.showModal === 'function') {
  document.body.classList.add('has-project-dialog');
  document.querySelectorAll('[data-project]').forEach((trigger) => {
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.addEventListener('click', (event) => {
      const project = projects[trigger.dataset.project];
      if (!project) return;
      event.preventDefault();
      projectTrigger = trigger;
      activeProject = project;
      renderProject(project);
      dialog.showModal(); dialog.scrollTop = 0;
      document.body.classList.add('dialog-open');
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  // Requiring both press and release outside avoids closing after selecting text.
  let pressedOutside = false;
  dialog.addEventListener('pointerdown', (event) => {
    const rect = dialog.getBoundingClientRect();
    pressedOutside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  });
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (event.target === dialog && pressedOutside && outside) dialog.close();
    pressedOutside = false;
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    restoreCaseStudies();
    projectTrigger?.focus({ preventScroll: true });
  });
}

const trackedSections = [...document.querySelectorAll('main > section[id]')];
let navigationFramePending = false;
function updateCurrentSection() {
  const marker = document.querySelector('.site-header').getBoundingClientRect().bottom + 120;
  let current = trackedSections[0];
  for (const section of trackedSections) {
    if (section.getBoundingClientRect().top <= marker) current = section;
  }
  // Short final sections cannot always reach the marker at the top of the page.
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    current = trackedSections[trackedSections.length - 1];
  }
  navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  navigationFramePending = false;
}
function queueNavigationUpdate() {
  if (navigationFramePending) return;
  navigationFramePending = true;
  window.requestAnimationFrame(updateCurrentSection);
}
window.addEventListener('scroll', queueNavigationUpdate, { passive: true });
window.addEventListener('resize', queueNavigationUpdate);
document.addEventListener('portfolio:languagechange', () => {
  if (dialog.open && activeProject) renderProject(activeProject);
  queueNavigationUpdate();
});
updateCurrentSection();
document.getElementById('year').textContent = String(new Date().getFullYear());
