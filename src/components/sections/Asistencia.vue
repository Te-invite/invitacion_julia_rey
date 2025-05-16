<script>
import InfoSection from '../utils/InfoSection.vue';
import popupAsistire from '../popup/PopAsistire.vue'
import Boton from '../utils/Boton.vue'
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
        title=""
        :subtitle="title"
        :mainText="dia"
        buttonLabel="Confirmar asistencia"
        :confirmationText="confirmacion" 
        buttonClass="btn-mayor"
        :buttonClick="togglePopUp"
            
        />
    </div>
    
</template>
<style>
</style>


