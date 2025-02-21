<script>
import PortadaHome from '../components/PortadaHome.vue';

export default {
    name:'Invitacion',
    components:{
        PortadaHome
    }
}

</script>

<template>
  <div>
    <div class="container_home" data-aos="fade-down">
        <div class="content_home">
            <PortadaHome/>
            
        </div>
    </div>
  </div>


</template>
<style>
.container_home {
    position: relative; 
    width: 100%;
    height: 100vh;
    overflow: hidden; 
}

.container_home::before {
    content: '';
    position: absolute;
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
.content_home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>