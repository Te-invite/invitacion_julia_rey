<script>
import InfoSection from '../components/InfoSection.vue';
import Swal from 'sweetalert2';
export default {
    name: 'Lugar',
    components: {
        InfoSection
    },
    data() {
        return {
            salon: 'Salón Costa Sud',
            direccion: 'Moreno 369 . Tres Arroyos',
            mapUrl:'https://maps.app.goo.gl/HUeMPbJJoVJuxucT6'
        }
    },
    methods:{
        openMap(){
            window.open(this.mapUrl, '_blank');
        },
        redirectToSheet() {
            Swal.fire({
                title: 'Info!',
                text: 'Será redirigido a Google Maps. Para continuar presione OK, o Cancelar para cerrar.',
                icon: 'info',
                showCancelButton: true, 
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancelar', 
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(this.mapUrl);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Si el usuario presiona "Cancelar", cierra el popup de SweetAlert
                    Swal.close();
                }
            });
        }
    }
}
</script>
<template>
    <div id="lugar" class="container-lugar">
        <InfoSection
            title="Lugar"
            subtitle="Lugar"
            :mainText="salon"
            :texts="[direccion]"
            buttonLabel="¿CÓMO LLEGAR?"
            containerClass="container__lugar"
            textClass="text_lugar"
            buttonClass="btn-mayor"
            :buttonClick="redirectToSheet"
        />
    </div>
</template>

<style> 
.container-lugar{
    margin-bottom: 10%;
}
</style>
