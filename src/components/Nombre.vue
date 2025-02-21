<script>
export default {
    name:'Nombre',
    data(){
        return{
            nombre:'Julia Rey',
            fecha:'29 . 03 . 2025',
            evento:'MIS 15 AÑOS'
        }
    }
}
</script>

<template>
    <div class="container__nombre">
        <div class="container_fecha">
            <div class="line"></div>
            <span class="fecha">
                <p>{{ fecha }}</p>
            </span>
            <div class="line"></div>
        </div>
        <div class="content__nombre">
            <h1>{{ nombre }}</h1>
        </div>
        <div class="container__evento">
            <h2>{{ evento }}</h2>
        </div>
    </div>
  
</template>
<style>
.container__nombre{
    width:100%;
    height: auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    
}
.container_fecha{
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.line{
    width:72px;
    height:1px;
    background-color: var(--font-primary-color);
    
}
.fecha p{
    text-align: center;
    font-family: 'Recoleta';
    color:var(--font-primary-color);
    font-size: 1rem;
}
.content__nombre{
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.content__nombre h1{
    font-size: 2.5rem;
    font-family: "Philadelphia";
    color: var(--font-primary-color);
    line-height: 1;
    margin: 1rem 0;
    text-align: center;
}
.container__evento{
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.container__evento h2{
    text-align: center;
    font-family: 'Recoleta';
    color:var(--font-primary-color);
    font-size: 1.5rem;
    letter-spacing: 4.5px;
    font-weight: 400;

    
}


@media (min-width: 768px) and (max-width: 991px) {
    .container__nombre{
        width:100%;;
        height: auto;
    }
    .line{
        width:92px;
    }
    .fecha p{
        font-size: 1.5rem;
    }
    .content__nombre h1{
        font-size: 6.2rem;
        margin: 2rem 0;
    }
    .container__evento h2{
        font-size: 3rem;
    }
}


@media (min-width: 1024px) {
    .container__nombre{
        width:100%;
        height: auto;
    }
    .line{
        width:92px;
    }
    .fecha p{
        font-size: 1.5rem;
    }
    .content__nombre h1{
        font-size: 7.2rem;
        margin: 2.2rem 0;
    }
    .container__evento h2{
        font-size: 3rem;
    }
}

</style>