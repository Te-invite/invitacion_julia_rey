<script>
import Separador from '../assets/img/separador1.svg';
import florIz from '../assets/img/111_2.webp'
import florDer from '../assets/img/flor.webp';    
export default {
    name: 'Separador',
    data() {
        return {
            Separador,
            florIz,
            florDer
        }
    }
}
</script>
<template>
    <div class="container__separador" data-aos="fade-right">
        <div class="containerizq">
            <img :src="florIz" alt="florizquierda">
        </div>
        <div class="separador">
        <img :src="Separador" alt="separador" class="separadorimg">
        </div>
        <div class="containerder">
            <img :src="florDer" alt="florderecha">
        </div>
    </div>
</template>

<style scoped>
.container__separador{
    width: 100%;
    height: 100%;
    position: relative;
}
.separador {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
}
.containerizq {
    width: 69px;
    height: auto;
    position:absolute;
    z-index: 2;
    left: -10%;
    top: -30%;
}
.containerizq img{
    width: 100%;
    height: 100%;
}
.containerder {
    width: 125px;
    height: auto;
    position:absolute;
    z-index: 2;
    right: -18%;
    top: -40%;
}
.containerder img{
    width: 100%;
    height: 100%;
}
.separadorimg{
    position:relative;
    width: 100%;
    display: flex;
    justify-content: center;
}
@media (min-width: 768px) and (max-width: 991px) {
    .containerder {
        width: 225px;
        height: auto;
        right: 0%;
    }
    .containerizq {
        width: 130px;
        height: auto;
        left: 0%;
    }
}
@media (min-width: 1024px) {
    .containerder {
        width: 225px;
        height: auto;
        right: 0%;
    }
    .containerizq {
        width: 130px;
        height: auto;
        left: 0%;
    }
}
@media only screen and (min-width : 1224px) {
    .containerder {
        width: 325px;
        height: auto;
        right: -10%;
        top: -20%;
    }
    .containerizq {
        width: 250px;
        left: -10%;
    }
}


</style>