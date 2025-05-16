<script>
import PopUpIngreso from '../components/popup/PopUpIngreso.vue';
import Encabezado from '../components/sections/Encanezado.vue';
import SectionPresent from '../components/sections/SectionPresent.vue';
import Timer from '../components/sections/Timer/Timer.vue';
import Separador from '../components/Separador.vue';
import Asistencia from '../components/sections/Asistencia.vue';
import Separador3 from '../components/Separador3.vue';
import Lugar from '../components/sections/Lugar.vue';
import DressCode from '../components/sections/DressCode.vue';
import Regalo from '../components/sections/Regalo.vue';
import Musica from '../components/sections/Musica.vue';
import BotoAudio from '../components/utils/BotonAudio.vue';
import Footer from '../components/utils/Footer.vue';
import separador2 from '../assets/img/flores_separador.webp';

export default {
    name:'Invitacion',
    components:{
      PopUpIngreso, Encabezado, SectionPresent, Timer, 
      Separador, Asistencia, Lugar, DressCode, Regalo,
      Musica, BotoAudio, Footer, Separador3
    },
    data(){
      return{
        showPopUp: true, separador2
      }
    },
    methods:{
      hadleClosePopUp(){
        this.showPopUp = false;
      }
    }
}
</script>

<template>
    <PopUpIngreso 
        v-if="showPopUp" 
        :show="showPopUp" 
        @close="hadleClosePopUp"
    />
    <div v-if="!showPopUp" class="container__invitation">
        <div class="content_invitacion">
           <Encabezado/>
           <SectionPresent/>
           <Timer/>
           <Separador/>
           <div class="container_asistencia">
              <Asistencia/>
              <img :src="separador2" class="separador2" alt="">
           </div>
           
           <Lugar/>
           <DressCode/>
           <Regalo/>
           <Musica/>
           <BotoAudio/>
           <Footer/>
        </div>
    </div>
</template>
<style>
.container__invitation{
    width: 100%;
    height: 100vh;
    overflow: hidden;
}


.container__invitation::before {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vh;
    height: 100vw;
    background-image: url('../assets/img/Fondo.webp');
    background-size: cover;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%) rotate(90deg);
    z-index: -1;
}

.content_invitacion{
  width:100%;
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;

}
.container_asistencia{
  width:100%;
  background: white;
  padding-bottom:3rem;
  margin-bottom:5rem ;
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.separador2{
  width:300px;
  height:auto;
  position:absolute;
  bottom: -15%;
}

@media (min-width: 1024px) {
  .content_invitacion{
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: columns;
    align-items: center;
    justify-content: space-between;
  }
  
}

@media only screen and (min-width : 1224px) {
  .content_invitacion{
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: columns;
    align-items: center;
    justify-content: space-between;
  }
 
}

@media only screen and (min-width : 1824px) {
  .content_invitacion{
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: columns;
    align-items: center;
    justify-content: space-between;
  }
  
}
</style>