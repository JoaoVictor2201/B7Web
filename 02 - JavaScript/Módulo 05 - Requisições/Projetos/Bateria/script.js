const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);

document.body.addEventListener('keydown', (e) => {
  playSound(e.code.toLowerCase());
});

select('.composer button').addEventListener('click', () => {
  let song = select('#input').value;

  if (song !== '') {
    let songArray = song.split('');
    playSong(songArray);
  }
})

function playSound(sound) {
  let audioElement = select(`#s_${sound}`);
  let keyElement = select(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add('active');

    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 150);
  }
}

function playSong(songArray) {
  let wait = 0;

  songArray.forEach((note) => {
    setTimeout (() => {
      playSound(`key${note}`);
    }, wait)
    wait += 250;
  });
}