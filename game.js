const dino = document.querySelector('#dragon')
const cacktus = document.querySelector('#cacktus')

const jump = () => {
  if (dino.classList != 'jump') {
    dino.classList.add('jump')
  }
  setTimeout(() => {
    dino.classList.remove('jump')
  }, 300)
}
document.addEventListener('keydown', () => jump())
window.addEventListener('click', () => jump())
count = 0
let isActive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
  let calcktusLeft = parseInt(
    window.getComputedStyle(cacktus).getPropertyValue('left')
  )
  if (calcktusLeft < 80 && calcktusLeft > 60 && dinoTop >= 369) {
    alert('Game over')
  }
}, 10)
