<template>
    <div class="video-player">
      <video autoplay muted loop>
        <source :src="videoUrl" type="video/mp4">
      </video>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        videoUrl: '../assets/videos/why_learn_english.mp4'
      }
    }
  }
  </script>
  
  <style scoped>
  .video-player {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>