<script>
import { ref } from 'vue';
export default {
  name:'App',
  methods:{
    async handleMusicPlay() {
      if (!this.audio) {
        this.audio = new Audio((await import('./assets/music/Love On The Brain.m4a')).default);
      }
      this.audio.play();
      this.isPlaying = true;
      this.musicActive=true;
    },
    handleMusicPause() {
      if (this.audio) {
        this.audio.pause();
        this.isPlaying = false;
      }
    },
    handleMusicToggle() {
      if (this.audio) {
        if (this.isPlaying) {
          this.handleMusicPause();
        } else {
          this.handleMusicPlay();
        }
      }
    },
    handleMusicStop(){
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.musicActive = false;
      }
    },
    handleVisibilityChange() {
      if (document.hidden && this.isPlaying) {
        this.handleMusicPause();
      }
    }
  },
  provide() {
    return {
      audioController: {
        play: this.handleMusicPlay,
        pause: this.handleMusicPause,
        toggle: this.handleMusicToggle,
        stop: this.handleMusicStop,
        isPlaying: () => this.isPlaying,
        isMusicActive: () => this.musicActive
      }
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.musicActive) {
      this.handleMusicStop();
    }
    next();
  },
  mounted() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
  setup(){
        const showLoading = ref(true);
        function onCountDownFinished(){
            showLoading.value = false;
        }
        return{
            showLoading,
            onCountDownFinished

        }
    }
}

</script>

<template>
<div id="app-container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
