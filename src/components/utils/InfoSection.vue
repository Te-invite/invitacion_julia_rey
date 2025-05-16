<script>
import Titulo from './TitleSection.vue';
import Boton from './Boton.vue';
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
        confirmationText: {  // Nueva prop específica para la confirmación
            type: String,
            default: ''
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
        <Titulo v-if="title" :title="title" :subtitle="subtitle" />
        
        <!-- Muestra el subtítulo como título principal si no hay título -->
        <h1 v-else-if="subtitle" class="main-title">{{ subtitle }}</h1>
        
        
        <span :class="textClass" class="span-info">
            <h2 v-if="mainText" class="mainText" v-html="mainText"></h2>
            <h3 v-for="(text, index) in texts" 
                :key="index" 
                class="subText"
                v-html="text">
            </h3>
        </span>
        
        <div class="button-container">
            <Boton v-if="buttonLabel" :label="buttonLabel" :customClass="buttonClass" @click="buttonClick" />
            <p v-if="confirmationText" class="confirmation-text">{{ confirmationText }}</p>
            <slot name="buttons"></slot> <!-- 💥 ACÁ AGREGAMOS EL SLOT -->
        </div>

    </div>
</template>


<style>
.container__info {
    width: var(--section);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    margin:2rem 0;
}

.text_info {
    text-align: center;
    width: 100%;
    height: auto;
}
.span-info{
    width:var(--section);
    text-align: center;
    
}
.mainText{
    font-size: 20px;
    font-family:var(--font-subtitle);
}
span h2,
.subText,
.confirmation-text{
    font-family:var(--font-subtitle);
}
span h2{
    font-size:var(--subtitle_h2);
    color: var(--font-primary-color);
    font-weight: 100;
    line-height: normal;
    text-align: center;
}
.subText{
    font-size: 1rem;
    color: var( --font-primary-color);
    font-weight: 100;
    line-height: normal;
    text-align: center;
}
.button-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.main-title{
    font-size: 20px;
}
.confirmation-text{
     color: var(--font-primary-color);
    font-size: 9px;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container__info,
    .span-info {
        width: var(--section-tablet);
    }
    main-title{
        font-size: var(--text-info-mobile-tablet);
    }
    span h2{
        font-size:var(--text-tablet);
    }
    .mainText{
        font-size: 32px;
    }
    .subText{
        font-size: 1.5rem;
    }
}



@media only screen and (min-width : 1024px) {
    .container__info,
    .span-info {
        width: var(--section-desktop);
    }
    main-title{
        font-size: var(--text-info-mobile-tablet);
    }
    .mainText{
        font-size: 36px;
    }
    .subText{
        font-size: 2rem;
    }
    .confirmation-text{
        font-size: 1rem;
    }
    
}

</style>