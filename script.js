const endDate = new Date("2026-03-04T15:40:00").getTime()

const updateCountdown = setInterval(() => {
  const now = new Date().getTime()
  const distance = endDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  const milliseconds = distance % 1000

  document.getElementById("days").textContent = days
  document.getElementById("hours").textContent = hours
  document.getElementById("minutes").textContent = minutes
  document.getElementById("seconds").textContent = seconds
  document.getElementById("milliseconds").textContent = milliseconds

  if (distance < 0) {
    clearInterval(updateCountdown)
    document.getElementById("countdown").innerHTML = "<h1>Les cours sont terminés !</h1>"
  }
}, 1)

const gif = document.getElementById("floating-gif")
const countdown = document.getElementById("countdown")

function moveGif() {
  const maxX = window.innerWidth - 100
  const maxY = window.innerHeight - 100

  const countdownRect = countdown.getBoundingClientRect()

  let newX, newY
  let attempts = 0

  do {
    newX = Math.random() * maxX
    newY = Math.random() * maxY
    attempts++
  } while (
    attempts < 50 &&
    newX + 100 > countdownRect.left &&
    newX < countdownRect.right &&
    newY + 100 > countdownRect.top &&
    newY < countdownRect.bottom
  )

  gif.style.left = newX + "px"
  gif.style.top = newY + "px"
}

moveGif()
setInterval(moveGif, 3000)
