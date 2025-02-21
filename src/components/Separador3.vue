<script>
import curva from '../assets/img/separador1.svg';
export default {
    name: 'Separador3',
    data() {
        return {
            curva
        }
    }       
}
</script>
<template>
    <div class="container__separador3">
        <img :src="curva" alt="curva" class="curva" >
    </div>
</template>     
<style>
.container__separador3{
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position:absolute;
    top: -65%;
    z-index: 1;
}   
.curva{
    width: 100%;
    height: 100%;
    transform: rotate(-0.445deg);
}
@media (min-width: 768px) and (max-width: 991px) {}

@media (min-width: 1024px) {}
@media only screen and (min-width : 1224px) {
    .container__separador3{
        width: 100%;
    }
    .curva{
        width: 100%;
    }
}

@media only screen and (min-width : 1824px) {
    .container__separador3{
        width: 100%;
    }
    .curva{
        width: 100%;
    }
}
</style>

