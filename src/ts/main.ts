const button = document.getElementById('button') as HTMLButtonElement;
const toasts = document.getElementById('toasts') as HTMLDivElement;

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
  'Message Five',
];

const types = ['info', 'success', 'error'];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type || getRandomType());

  notif.innerText = message || getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

button.addEventListener('click', () => createNotification());
