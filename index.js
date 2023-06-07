const fileInput = document.querySelector("input[type=file]");
const video = document.querySelector("Video");

fileInput.addEventListener("change", () => {
  const [file] = fileInput.files;
  if (file) {
    const allowedFormats = ['video/mp4', 'video/webm', 'video/ogg']; // Formatos de video permitidos
    // Verificar el tipo de archivo
    if (allowedFormats.includes(file.type)) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // Asignar la URL del archivo al elemento de video
        video.src = URL.createObjectURL(file);
      });
      reader.readAsArrayBuffer(file);
    } else {
      alert('Formato de video no válido. Por favor, selecciona un archivo de video en formato MP4, WebM u Ogg.');
      fileInput.value = ''; // Reiniciar el valor del input para permitir una nueva selección
    }
  }
});


// Obtenemos los elementos del DOM
const videoPlayer = document.getElementById('Video');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const volumeUpBtn = document.getElementById('upaudio');
const volumeDownBtn = document.getElementById('downaudio');
const ConsolaBtn = document.querySelector('.botones');

ConsolaBtn.style.visibility = 'hidden';

videoPlayer.addEventListener('loadeddata', () => {
  ConsolaBtn.style.visibility = 'visible';
  alert('Cargando el vídeo...');
});

// BOTON PLAY
playBtn.addEventListener('click', () => {
  videoPlayer.play();
});

// BOTON PAUSE
pauseBtn.addEventListener('click', () => {
  videoPlayer.pause();
});

// BOTON STOP
stopBtn.addEventListener('click', () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
});

// BOTON SUBIDA VOLUMEN
volumeUpBtn.addEventListener('click', () => {
  if (videoPlayer.volume < 1) {
    videoPlayer.volume += 0.2;
  }
});

// BOTON BAJADA VOLUMEN
volumeDownBtn.addEventListener('click', () => {
  if (videoPlayer.volume > 0) {
    videoPlayer.volume -= 0.2;
  }
});


