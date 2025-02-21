<script>
import { inject } from 'vue';
import Boton from './Boton.vue';
export default {
    name:'PanelControl',
    components:{
        Boton
    },
    setup() {
        const audioController = inject('audioController');
        return { audioController };
    },
    methods:{
        enterWithMusic(){
            this.audioController.play();
            this.$router.push({ name: 'Invitacion' });
        },
        enterWithoutMusic(){
            this.audioController.stop();
            this.$router.push({ name: 'Invitacion' });
        }
    }
}
</script>
<template>
    <div class="container__button">
        <Boton label="INGRESAR CON MUSICA" customClass="btn-mayor" @click="enterWithMusic"/>
        <Boton label="INGRESAR SIN MUSICA" customClass="btn-mayor" @click="enterWithoutMusic"/>
    </div>
    
</template>
<style>
.container__button{
    margin-top: 2rem;
    width:100%;
    height:125px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

@media (min-width: 768px) and (max-width: 991px) {
    .container__button{
        margin-top: 2rem;
        width:550px;
        height:130px;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        
    }
}
@media (min-width: 1024px) {
    .container__button{
        margin-bottom: 1rem;
        width:550px;
        height:130px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}
</style>