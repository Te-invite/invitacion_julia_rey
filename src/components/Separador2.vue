<script>
import lineas from '../assets/img/lineas.svg';
import flor1 from '../assets/img/01.webp';
export default {
    name: 'Separador2',
    data() {
        return {
            lineas,
            flor1
        }
    }
}
</script>
<template>
    <div class="container__separador2">
        <div class="container__flor1">
            <img :src="flor1" alt="flor1">
        </div>
        <img :src="lineas" alt="lineas">
        <div class="container__flor2">
            <img :src="flor1" alt="flor1">
        </div>
    </div>
</template>
<style>
.container__separador2{
    width:100%;
    display: flex;
    justify-content: center;
    position: relative;
}
.container__flor1 {
    width:124px;
    height:auto;
    position: absolute;
    top:-15%;
    left:-15%;
    z-index: 1;
}
.container__flor1 img{
    width:100%;
    height:100%;
    object-fit: cover;
}
.container__flor2 {
    width:124px;
    height:auto;
    position: absolute;
    top:-15%;
    right:-15%;
    z-index: 1;
}
.container__flor2 img{
    width:100%;
    height:100%;
    object-fit: cover;
}

@media (min-width: 768px) and (max-width: 991px) {

}

@media (min-width: 1024px) {

}
</style>

