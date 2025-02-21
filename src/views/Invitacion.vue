<script>
import Encabezado from '../components/Encanezado.vue';
import SectionPresent from '../components/SectionPresent.vue';
import Timer from '../components/Timer/Timer.vue';
import Separador from '../components/Separador.vue';
import Asistencia from '../components/Asistencia.vue';
import Lugar from '../components/Lugar.vue';
import DressCode from '../components/DressCode.vue';
import Regalo from '../components/Regalo.vue';
import Musica from '../components/Musica.vue';
import Footer from '../components/Footer.vue';
import BotonAudio from '../components/BotonAudio.vue';
export default {
    name:'Invitacion',
    components:{
        Encabezado,
        SectionPresent,
        Timer,  
        Separador,
        Asistencia,
        Lugar,
        DressCode,
        Regalo,
        Musica,
        Footer,
        BotonAudio
    }
}
</script>

<template>
  <div class="container__invitation">
    <div class="content_invitacion">
      <Encabezado/>
      <SectionPresent/> 
      <Timer/>
      <Separador/>
      <Asistencia/>
        <Lugar/>
        <DressCode/>
        <Regalo/>
        <Musica/>
        <BotonAudio/>       
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