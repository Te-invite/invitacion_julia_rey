<script>
import Titulo from '../components/utils/TitleSection.vue';
import Boton from '../components/utils/Boton.vue';
export default {
    name: 'InfoSection',
    components: {
        Titulo,
        Boton
    },
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        mainText: {
            type: String,
            default: ''
        },
        texts: {
            type: Array,
            default: () => []
        },
        buttonLabel: {
            type: String,
            default: ''
        },
        buttonClick:{
            type:Function,
            default:()=>{}
        },
        containerClass: {
            type: String,
            default: 'container__info'
        },
        textClass: {
            type: String,
            default: 'text_info'
        },
        buttonClass: {
            type: String,
            default: 'btn-default'
        }
    }
}
</script>
<template>
    <div :class="containerClass" class="container-info">
        <Titulo :title="title" :subtitle="subtitle" />
        <span :class="textClass" class="span-info">
            <h2 v-if="mainText" class="mainText"><strong>{{ mainText }}</strong></h2>
            <h3 v-for="(text, index) in texts" 
                :key="index" 
                class="subText"
                v-html="text">
            </h3>
        </span>
        <div class="button-container">
            <Boton v-if="buttonLabel" :label="buttonLabel" customClass="btn-mayor" @click="buttonClick" />
        </div>
    </div>
</template>


<style>
.container__info {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.text_info {
    text-align: center;
    width: 300px;
    height: auto;
}
.span-info{
    width:250px;
    text-align: center;
    margin-bottom: 10px;
}
span h2{
    font-family: 'Recoleta-Medium';
    font-size: 1.5rem;
    color: var(--font-secondary-dark);
    font-weight: 100;
    line-height: normal;
    text-align: center;
    font-size: 1rem;
}
.subText{
    font-family: 'Recoleta';
    font-size: 1rem;
    color: var(--font-primary-color);
    font-weight: 100;
    line-height: normal;
    text-align: center;
    font-size: 1rem;
}
.button-container{
    display: flex;
    justify-content: center;
    margin-top: 5px;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container__asistencia {
        width: 100%;
        height: 440px;
    }

    .span-info{
        width: 400px;
    }

    span h2 {
        font-size: 2.5rem;
    }

    span h3 {
        font-size: 1.5rem;
    }

}



@media only screen and (min-width : 1024px) {
   
    
    .subText{
        font-size: 1.5rem;
    }

    span h3 {
        font-size: 2.5rem;
    }

    span h2  {
        font-size: 3rem;
    }

    
}

</style>