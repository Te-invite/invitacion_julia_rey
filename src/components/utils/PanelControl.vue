<script>
import { inject } from 'vue';
import Boton from './Boton.vue';
export default {
    name:'PanelControl',
    components:{
        Boton
    },
    
    props: {
        show: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
     setup(_, { emit }) {
        const audioController = inject('audioController');

        const enterWithMusic = async () => {
            try {
                await audioController.play(); 
                emit('close'); 
            } catch (error) {
                console.error("Error al reproducir música:", error);
                audioController.stop(); 
            }
        };

        const enterWithoutMusic = () => {
            audioController.stop();
            emit('close');  
            console.log("click");
        };

        return { enterWithMusic, enterWithoutMusic };
    }
}
</script>
<template>
    <div v-if="show" class="container__button">
        <Boton 
            label="Ingresa con música" 
            customClass="btn-mayor" 
            @click="enterWithMusic"
        />
        <Boton 
            label="Ingresa sin música" 
            customClass="btn-mayor" 
            @click="enterWithoutMusic"
        />
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
        width:430px;
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