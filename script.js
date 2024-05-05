const phrases = [
  "Just keep building",
  "There's no one around to please",
  "We're lucky to exist",
  "There's so much to learn"
]
let phraseIndex = 0

const start = () => {
  const audio = document.createElement('audio')
  audio.src = 'HBFS.mp3'
  audio.loop = true
  document.querySelector('.container').appendChild(audio)
  audio.style = 'visibility: hidden;'
  audio.play()

  // toggle audio on click
  const toggleAudio = () => {
    audio.paused ? audio.play() : audio.pause()
  }

  document.querySelector('.begin').remove()

  document.querySelector('body').classList.add('colored-background')

  const danceImage = document.createElement('img')
  danceImage.src = 'astronaut_dinos.gif'
  document.querySelector('.container').appendChild(danceImage)

  const phraseBox = document.createElement('p')
  phraseBox.classList.add('phrase-box')
  phraseBox.classList.add('flicker-text')
  document.querySelector('.container').appendChild(phraseBox)
  phraseBox.innerText = ' '

  setTimeout(() => {
    phraseBox.innerText = phrases[phraseIndex]
    setInterval(updatePhrase, 6000)
  }, 2000)

  danceImage.onclick = toggleAudio
}

const updatePhrase = () => {
  phraseIndex = (phraseIndex + 1) % phrases.length
  document.querySelector('.phrase-box').innerText = phrases[phraseIndex]
}

document.onload = () => {
  if (window.location.hash != '') {
    start
  }
}
document.querySelector('.begin').onclick = start
