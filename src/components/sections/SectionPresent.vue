<script>
import Nombre from '../Nombre.vue';
import Frases from '../Frases.vue';
export default {
    name:'SectionPresent',
    components:{
        Nombre,
        Frases
    }
}

</script>

<template>
    <div class="container__sectionPresent" data-aos="fade-up">
        <Nombre/>
        <Frases/>
    </div>
  

</template>
<style>
.container__sectionPresent{
    width:310px;
    height:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container__sectionPresent{
        width:550px;
        height: auto;
    }
}


@media (min-width: 1024px) {
    .container__sectionPresent{
        width:650px;
        height: auto;
    }
}


@media only screen and (min-width : 1224px) {}

@media only screen and (min-width : 1824px) {}
</style>