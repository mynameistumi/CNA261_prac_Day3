const messages = [
  'JavaScript makes the page feel alive.',
  'Every click can trigger a new experience.',
  'You are now interacting with a dynamic website.',
  'Small scripts can create big effects.'
];

const button = document.getElementById('messageButton');
const messageCard = document.getElementById('messageCard');
const timeLabel = document.getElementById('timeLabel');
const visitCount = document.getElementById('visitCount');

let visitTotal = Number(localStorage.getItem('visitCount') || 0) + 1;
localStorage.setItem('visitCount', visitTotal);
visitCount.textContent = visitTotal;

function updateTime() {
  const now = new Date();
  timeLabel.textContent = now.toLocaleTimeString();
}

button.addEventListener('click', () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageCard.textContent = randomMessage;
});

updateTime();
setInterval(updateTime, 1000);
