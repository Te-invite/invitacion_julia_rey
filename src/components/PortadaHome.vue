<script>
import PanelControl from '../components/PanelControl.vue';
export default {
    name:'PortadaHome',
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
    <div class="container_portadaHome"  data-aos="zoom-in">
        <p>{{ subtitle }}</p>
        <div class="content_portadaHome">
            <h1>{{ nombre }}</h1>
        </div>
        <PanelControl/>
    </div>
  
</template>
<style>
.container_portadaHome{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content_portadaHome{
    background-image: url('../assets/img/contenedor1.webp');
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
        width:768px;
        height: 640px;
        
    }
    .content_portadaHome h1{
        font-size: 6.2rem;
        margin-bottom: 1rem;
    }
    .container_portadaHome p{
        font-size: 3rem;
    }
}



@media (min-width: 1024px) {
    .content_portadaHome{
        width:540px;
        height: 700px;
    }
    .content_portadaHome h1{
        font-size: 6.2rem;
        margin-bottom: 1rem;
    }
    .container_portadaHome p{
        font-size: 2rem;
    }
}

@media only screen and (min-width : 1224px) {
    .content_portadaHome{
        width:700px;
        height: 600px;
    }
}

@media only screen and (min-width : 1824px) {}
</style>