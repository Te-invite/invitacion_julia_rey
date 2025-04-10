<script>
import logo from '../../assets/img/logo.svg';
import Separador3 from '../Separador3.vue';
export default {
    name:'Footer',
    data(){
        return{
            logo,
            link:'https://www.instagram.com/teinviteok/'
        }
    },
    components:{
        Separador3
    },
    methods: {
        scrollTo(hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>
<template>
    <div class="footer">    
        <Separador3/>
        <div class="option">
            <a href="#dias" class="opcion" @click.prevent="scrollTo('#dias')">Día</a>
            <a href="#asistencia" class="opcion" @click.prevent="scrollTo('#asistencia')">Asistencia</a>
            <a href="#lugar" class="opcion" @click.prevent="scrollTo('#lugar')">¿Cómo llegar?</a>
            <a href="#dresscode" class="opcion" @click.prevent="scrollTo('#dresscode')">Dress Code</a>
            <a href="#regalo" class="opcion" @click.prevent="scrollTo('#regalo')">Regalo</a>
            <a href="#musica" class="opcion" @click.prevent="scrollTo('#musica')">Música</a>
        </div>
            <div class="section_invitation">
                <a :href="link" target="_blank">
                    <img :src="logo" class="img_logo" alt="logo">
                </a>
            </div>
            <div class="banner_bottom">
                <div class="text_banner">
                    <h4 class="text_1">Developed by </h4>
                        <h4 class="text_2"> Teinvite.ar</h4>
                </div>
            </div>
        </div>
</template>
<style>
.footer{
    width:100%;
    height:300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    position:relative;
    margin-top: 3rem;
}
.section_invitation{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
}

.img_logo{
    margin-top:.5rem;
    width: 108px;
    height: auto;
}
.banner_bottom{
    width: 100%;
    height:auto;
    background-color:#D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.text_banner{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.text_banner > h4{
    margin-top: .5rem;
    font-size: .7rem;
}
.text_1{
    color:white;
}
text_2{
    font-size: .5rem;
}
.text_{
    text-decoration: none;
    color:black;
    font-size: .5rem;
    
}
.option{
    margin-top:1rem;
    width:250px;
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    position:relative;
    z-index:2;
    margin-top:2rem;
    
}

.opcion{
    color:var(--font-secondary);
    font-size:.5rem;
    font-family:var(--font-subtitle);
    text-decoration: none;
    text-align: center;
    cursor: pointer;
}
@media (min-width: 768px) and (max-width: 991px) {
    .footer{
        width:100%;
        height:160px;
    }
    .img_logo{
        width: 200px;
        height: auto;
        margin-top:1rem;
    }
    .option{
        margin-top:3.5rem;
        width:50%;
    }
    .opcion{
        font-size:1rem;
    }
}
@media (min-width: 1024px) {
    .footer{
        width:100%;
        height:600px;
        margin-top:4rem;
    
    }
    .img_logo{
        width: 220px;
        height: 160px;
    
    }
    .option{
        margin-top:3rem;
        width:50%;
    }
    .opcion{
        font-size:1rem;
    }
}
@media only screen and (min-width : 1224px) {
    .footer{
        margin-top: 4rem;
    }
    .option {
        margin-top: 2rem;
        width: 40%;
        border: none;
        margin-top: 8rem;
    }
    .opcion {
        font-size: 1.2rem;
        transition: all 0.3s ease;
    }
    .opcion:hover {
        color: var(--font-primary);
        transform: scale(1.1);
    }
}

@media only screen and (min-width : 1824px) {
    .option {
        margin-top: 3rem;
        width: 30%;
    }
    .opcion {
        font-size: 1.4rem;
    }
}
</style>