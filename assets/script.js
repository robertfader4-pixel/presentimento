
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('[data-chapter-search]');
  const cards = [...document.querySelectorAll('[data-chapter-card]')];
  if (!input || !cards.length) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
});
