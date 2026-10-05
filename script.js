(() => {
  const features = {
    journal: { image: 'assets/home.webp', alt: 'SIPMARK home screen showing a personal drink journal and color-coded calendar with example entries', heading: 'Make room for an honest record.', description: 'Log drink types, amounts, and notes. Confirm alcohol-free days yourself, and add next-morning check-ins for sleep, energy, and mood.', detail: 'Recording and editing require Pro. Saved entries remain yours to view, export, or delete.' },
    trends: { image: 'assets/trends.webp', alt: 'SIPMARK trends screen with a weekly journal review and recorded-day totals', heading: 'Your days, in perspective.', description: 'A calendar and weekly review help you look back at drinking days, confirmed alcohol-free days, and the days you haven’t recorded. Unknown days stay unknown.', detail: 'Explore longer periods with Pro. Your journal tells a story, not a diagnosis.' },
    rewards: { image: 'assets/rewards.webp', alt: 'SIPMARK rewards screen showing collectible cards for journal milestones', heading: 'Celebrate the small steps.', description: 'Collect colorful cards for journal milestones. A little encouragement to keep showing up, with your own choices at the center.', detail: 'Health readings do not earn rewards. Collections are for encouragement, not a recovery score.' }
  };
  const tabs = [...document.querySelectorAll('[data-feature]')];
  const panel = document.getElementById('feature-panel');
  function select(tab, focus = false) {
    const data = features[tab.dataset.feature];
    tabs.forEach(item => { item.setAttribute('aria-selected', String(item === tab)); item.tabIndex = item === tab ? 0 : -1; });
    panel.setAttribute('aria-labelledby', tab.id);
    document.getElementById('feature-image').src = data.image;
    document.getElementById('feature-image').alt = data.alt;
    document.getElementById('feature-heading').textContent = data.heading;
    document.getElementById('feature-description').textContent = data.description;
    document.getElementById('feature-detail').textContent = data.detail;
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); select(tabs[next], true); }
    });
  });
})();
