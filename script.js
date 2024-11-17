const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const score1Display = document.getElementById('score1');
const score2Display = document.getElementById('score2');
let score1 = 0;
let score2 = 0;

button1.addEventListener('click', () => {
  score1++;
  score1Display.textContent = score1;
  
  healthBar1.classList.add('hit');
  
  setTimeout(() => {
    healthBar1.classList.remove('hit')
  }, 1);
  // Здесь добавить анимацию удара и уменьшения здоровья второго хэмстера
});

button2.addEventListener('click', () => {
  score2++;
  score2Display.textContent = score2;
  // Здесь добавить анимацию удара и уменьшения здоровья первого хэмстера
});
