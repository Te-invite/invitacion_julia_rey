<script>
import PanelControl from '../utils/PanelControl.vue';
export default {
    name:'PopUpIngreso',
    data(){
        return {
            subtitle:'MIS 15',
            nombre:'Julia Rey'
        }
    },
    components:{
        PanelControl
    }
}
</script>

<template>
    <div class="popupContainer">
        <div class="container_portadaHome"  data-aos="zoom-in">
            <p>{{ subtitle }}</p>
            <div class="content_portadaHome">
                <h1>{{ nombre }}</h1>
            </div>
            <PanelControl @close="$emit('close')"/>
        </div>
    </div>
</template>
<style>
.popupContainer{
     width: 100%;
    height: 100vh;
    overflow: hidden;
}
.popupContainer::before {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vh;
    height: 100vw;
    background-image: url('../../assets/img/Fondo.webp');
    background-size: cover;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%) rotate(90deg);
    z-index: -1;
}

.container_portadaHome{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content_portadaHome{
    background-image: url('../../assets/img/contenedor1.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_portadaHome p{
    color: var(--font-primary-color);
    font-family: "Recoleta";
    font-weight: 800;
    font-size: 1.5rem;
}
.content_portadaHome h1{
    font-size: 2.5rem;
    font-family: "Philadelphia";
    color: var(--font-primary-color);
    line-height: 1;
    margin-bottom: .7rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .content_portadaHome{
        width:550px;
        height: 500px;
        
    }
    .content_portadaHome h1{
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    .container_portadaHome p{
        font-size: 3rem;
    }
}



@media (min-width: 1024px) {
    .content_portadaHome{
        width:550px;
        height: 480px;
        
    }
    .content_portadaHome h1{
        font-size: 4.8rem;
        margin-bottom: 1rem;
    }
    .container_portadaHome p{
        font-size: 2rem;
    }
}

</style>