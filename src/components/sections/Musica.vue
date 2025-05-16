<script>
import InfoSection from '../utils/InfoSection.vue';
import Swal from 'sweetalert2';
export default {
    name: 'DressCode',
    components: {
        InfoSection
    },
    data() {
        return {
            text: '¿Cuál es la canción que no debe faltar en la <strong>PlayList</strong> de la fiesta?',
            
        }
    },
    methods: {
        togglePopUp() {
            this.popup = !this.popup
        },
        redirectToYoutube() {
            Swal.fire({
                title: 'Info!',
                text: 'Será redirigido a YouTube. Para continuar presione OK, o Cancelar para cerrar.',
                icon: 'info',
                showCancelButton: true, // Habilita el botón "Cancelar"
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancelar', // Texto del botón "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Si el usuario presiona "OK"
                    window.open("https://goo.su/UK4pB");
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Si el usuario presiona "Cancelar", cierra el popup de SweetAlert
                    this.togglePopUp();
                }
            });
        }
    }
}
</script>

<template>
    <div id="musica" class="container-musica">
        <InfoSection 
        title="Música" 
        subtitle="musica" 
        :texts="[text]" 
        buttonLabel="Sugerir Canción"
        containerClass="container__musica" 
        textClass="text_musica" 
        buttonClass="btn-mayor"
        :buttonClick="redirectToYoutube" />
    
    </div>
    
</template>

<style>
.container-musica {
    width: 250px;
    position: relative;
    z-index: 11;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container-musica {
        width: 400px;
    }
}

@media (min-width: 1024px) {
    .container-musica {
        width: 600px;
        margin-bottom: 5rem;
    }
}
</style>
