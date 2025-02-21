<script>
import { inject } from "vue";
import IconMusicActive from './icon/IconMusicActive.vue';
import IconMusicInactive from './icon/IconMusicInactive.vue';

export default {
    name:'BotonAudio',
    components:{
        IconMusicActive,
        IconMusicInactive
    },
    setup() {
        const audioController = inject('audioController');
        return { audioController };
    },
    methods:{
        toggleMusic() {
            if (this.audioController) {
                this.audioController.toggle();
            }
        }
    }
}
</script>
<template>
    <div>
        <button v-if="audioController.isMusicActive()" 
        class="btn btn__music btn-stick" @click="toggleMusic">
            <template v-if="audioController.isPlaying()">
                <icon-music-active />
            </template>
            <template v-else>
                <icon-music-inactive />
            </template>
        </button> 
    </div>
</template>
<style>
.btn-stick {
  position: fixed;
  bottom: 3%;
  right: 2%;
  z-index: 1000;
}

.btn__music{
  border: none;
  background: none;
}

.btn__music:focus,
.btn__music:active {
  outline: none;
}

.btn__music:hover {
  border: none;
  background: none;
  outline: none;
}
@media (min-width: 1025px) {
    .btn-stick {
    position: fixed;
    bottom:10%;
    right: 2%;
    }
}
</style>