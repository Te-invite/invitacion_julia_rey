<script>
export default {
    name:'Frases',
    data(){
        return{
            frase:'Este día marca un nuevo capítulo en mi vida, lleno de sueños, ilusiones y momentos que espero vivir con todos ustedes.'
        }
    }
}
</script>


<template>
  <div class="container__frases">
    <div class="linea_separacion"></div>
    <span class="content_frase">
        <p>{{ frase }}</p>
    </span>
    <div class="linea_separacion"></div>
  </div>
</template>
<style>
.container__frases{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    margin-top: 2rem;
}
.linea_separacion{
    width:72px;
    height:1px;
    background-color: var(--font-primary-color);
}
.content_frase p{
    text-align: center;
    font-family: 'Recoleta';
    color:var(--font-primary-color);
    font-size: 1rem;

}
@media (min-width: 768px) and (max-width: 991px) {
    .container__frases p{
        font-size: 1.5rem;
    }
}



@media (min-width: 1024px) {
    .container__frases p{
        font-size: 1.5rem;
    }
}

</style>