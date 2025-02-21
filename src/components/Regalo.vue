<script>
import InfoSection from '../components/InfoSection.vue';
import rama1 from '../assets/img/0003_2.webp';
export default {
    name: 'DressCode',
    components: {
        InfoSection
    },
    data() {
        return {
            texts: [
                'Si desean regalarme algo, pueden dejar su aporte en la urna.',
                '¡Gracias por estar conmigo en este día tan especial!'
            ],
            rama1
        }
    }
}
</script>

<template>
    <div id="regalo" class="content_regalo">
        <div class="container-regalo">
            <div class="container__rama1">
                <img :src="rama1" alt="rama1">
            </div>
            <InfoSection title="Regalo" subtitle="regalo" :texts="texts" containerClass="container__regalo"
                textClass="text_regalo" />
            <div class="container__rama2">
                <img :src="rama1" alt="rama1">
            </div>
        </div>

    </div>
</template>

<style>
.content_regalo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative
}

.container-regalo {
    width: 250px;
    margin-bottom: 10%;
}

.container__rama1 {
    width: 191px;
    height: auto;
    position: absolute;
    top: -20%;
    right: -10%;
}

.container__rama1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotate(120deg);
}

.container__rama2 {
    width: 191px;
    height: auto;
    position: absolute;
    bottom: -20%;
    left: -10%;
}

.container__rama2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotate(-45deg);
}

@media (min-width: 768px) and (max-width: 991px) {
    .container-regalo {
        width: 400px;
    }
}

@media (min-width: 1024px) {
    .container-regalo {
        width: 600px;
    }
    .container__rama1 {
        width: 300px;
        height: auto;
        position: absolute;
        top: -25%;
        right: -5%;
    }
    .container__rama1 img {
        width: 100%;
        height: 100%;
    }

    .container__rama2 {
        width: 300px;
        height: auto;
        position: absolute;
        bottom: -20%;
        left: -5%;
    }
    .container__rama2 img {
        width: 100%;
        height: 100%;
    }

}
</style>
