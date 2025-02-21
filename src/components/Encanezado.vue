<script>
import florTop from '../assets/img/contenedor_2.png';
export default {
    name:'Encabezado',
    data(){
      return{
        florTop
      }
    }
}
</script>

<template>
  <div class="container__header" data-aos="fade-down">
    <img :src="florTop" alt="florTop" class="flor-top">
  </div>


</template>
<style>
.container__header{
    width:100%;
    height:126px;
    display:flex;   
    justify-content: center;
}
.flor-top{
  width:100%;
  height:auto;
  object-fit: cover;
  position: relative;
  top:-16%;
  left:0;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container__header{
        width:100%;
        height:245px;
    }
    .flor-top{
        width:100%;
        height:auto;
        top:-16%;
        left:0;
    }
}




@media (min-width: 1024px) {
  .container__header{
        width:100%;
        height:500px;
    }
    .flor-top{
        width:100%;
        height:auto;
        top:-28%;
        left:0;
    }
}

@media only screen and (min-width : 1224px) {
  .container__header{
        width:100%;
        height:400px;
    
    }
    .flor-top{
        width:50%;
        height:auto;
        top:-23%;
        left:0;
    
    }
    
}

</style>