const myAudio = document.getElementById("myAudio");

var list = [
    "./audioes/04 Rouyaye Bi Tekrar.mp3",
    "./audioes/Ali Zand Vakili - Be Sooye To (128).mp3",
    "./audioes/Ali Zand Vakili - Lalaei 128 (UpMusic).mp3",
];

let currentSongIndex = 0;

/////////////////////////////////////////// changevolume
function changevolume(value){
  myAudio.volume = value;
}

/////////////////////////////////////////// play_pause
function play_pause() {
    if (myAudio.paused) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }

/////////////////////////////////////////// Next Music
function nextMusic() {

    currentSongIndex++;

    document.getElementById("myAudio").src = list[currentSongIndex];
    myAudio.play();   
}

/////////////////////////////////////////// Previous Music
function previousMusic() {

  currentSongIndex--;

  document.getElementById("myAudio").src = list[currentSongIndex];
  myAudio.play();

}



