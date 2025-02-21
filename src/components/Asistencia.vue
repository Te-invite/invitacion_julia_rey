<script>
import Boton from './Boton.vue';
import flor_separador from '../assets/img/flores_separador.webp';
import popupAsistire from './popup/PopAsistire.vue'
export default {
    name: 'Asistencia',
    data() {
        return {
            title: '¿LISTOS PARA FESTEJAR?',
            confirmacion: '(Hasta el 15 de Marzo)',
            flor_separador,
            popup:false
        }
    },
    components: {
        Boton,
        popupAsistire
    },
    methods:{
        togglePopUp(){
            this.popup = !this.popup;
        }
    }
}
</script>
<template>
    <div id="asistencia" class="container__asistencia">
        <popupAsistire v-show="popup" @close="togglePopUp()"/>

        <span class="text">
            <h1>{{ title }}</h1>
            <h3>Te espero el <strong> 29 </strong>de Marzo
                a las <strong> 20:30 hs.</strong>
            </h3>
            
            <Boton label="CONFIRMAR ASISTENCIA" customClass="btn-mayor" @click="togglePopUp"/>
            <p>{{ confirmacion }}</p>
        </span>
        <div class="container__separador2">
            <img :src="flor_separador" alt="flor_separador">
        </div>
    </div>
</template>
<style scoped>
.container__asistencia {
    width: 100%;
    background-color: white;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15%;
    position: relative;
}

.text {
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.text h1 {
    font-family: 'Recoleta-Medium';
    font-size: 2rem;
    color: var(--font-secondary-dark);
    font-weight: 500;
    line-height: normal;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 10px;

}

.text h3 {
    font-family: 'Recoleta';
    font-size: 1.5rem;
    color: var(--font-primary-color);
    font-weight: 100;
    line-height: normal;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 10px;
}

.text p {
    font-family: 'Recoleta';
    font-size: .8rem;
    color: var(--font-secondary);
    font-weight: 100;
    line-height: normal;
    margin-top: 6px;
}

.container__separador2 {
    width: 300px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.container__separador2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

@media (min-width: 768px) and (max-width: 991px) {
    .container__asistencia {
        width: 100%;
        height: 440px;
    }

    .text {
        width: 400px;
    }

    .text h1 {
        font-size: 2.5rem;
    }

    .text h3 {
        font-size: 1.5rem;
    }

    .text p {
        font-size: 1rem;
    }
}



@media only screen and (min-width : 1024px) {
    .container__asistencia {
        width: 100%;
        height: 550px;
    }

    .text {
        width: 700px;
        height: 450px;

    }

    .text p {
        font-size: 1.5rem;
    }

    .text h3 {
        font-size: 2.5rem;
    }

    .text h1 {
        font-size: 3rem;
    }

    .container__separador2 {
        width: auto;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 1;
        bottom: -38%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
