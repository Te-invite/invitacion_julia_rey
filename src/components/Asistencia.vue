<script>
import InfoSection from './InfoSection.vue';
import popupAsistire from './popup/PopAsistire.vue'
export default {
    name: 'Asistencia',
    data() {
        return {
            title: '¿LISTOS PARA FESTEJAR?',
            subtitle: 'Confirmación de asistencia', // Añade esto
            dia: 'Te espero el 17 de Mayo a las 21:00 hs.',
            confirmacion: '(Hasta el 15 de Marzo)',
            popup: false
        }
    },
    components: {
        Boton,
        InfoSection,
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

        <InfoSection
            :title="title"
            :subtitle="subtitle"
            :mainText="dia"
            :texts="[confirmacion]"
            buttonLabel="CONFIRMAR ASISTENCIA"
            containerClass="container__asistencia"
            textClass="text_asistencia"
            buttonClass="btn-mayor"
            :buttonClick="togglePopUp"
        />
    </div>
</template>
<style>
.container__asistencia{
    margin-bottom: 10%;
}
</style>


