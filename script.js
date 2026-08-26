const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

document.querySelector('#year').textContent = new Date().getFullYear();

const copyEmailButton = document.querySelector('.copy-email');

copyEmailButton?.addEventListener('click', async () => {
  const email = copyEmailButton.dataset.email;
  const label = copyEmailButton.querySelector('.copy-label');

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(email);
    } else {
      const input = document.createElement('textarea');
      input.value = email;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }

    label.textContent = 'Copied!';
    copyEmailButton.classList.add('copied');
    setTimeout(() => {
      label.textContent = email;
      copyEmailButton.classList.remove('copied');
    }, 1600);
  } catch {
    label.textContent = 'Copy failed';
    setTimeout(() => { label.textContent = email; }, 1600);
  }
});
