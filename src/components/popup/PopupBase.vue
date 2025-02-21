<script>
import img from '../../assets/img/flores_separador.webp';
export default {
    name: 'BasePopup',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            img
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }

}
</script>

<template>
    <div class="pop-up">
        <div class="pop-up-inner">
            <img :src="img" class="flor-top" alt="flor-top">
            <div class="popup_body">
                <div class="pop-up-close" @click="close">
                    <i class="fa-solid fa-xmark icon__close"></i>
                </div>
                <div class="pop-up-body">
                    <h1 class="title">{{ title }}</h1>
                    <slot></slot>
                </div>
                <div class="pop-up-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
            <img :src="img" class="flor-bottom" alt="flor-top">
        </div>
        
    </div>
</template>


<style scoped>
.pop-up {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, .6);
    display: grid;
    place-items: center;
}
.pop-up-inner[data-v-5c395a1b]{
    border-radius: 0;
} 

.pop-up-inner {
    width:300px;
    height:450px;
    background-color: #fff;
    color: black;
    position: relative;
    padding: 20px;
    box-shadow: var(--shadow);
    transition: all 250ms ease-in-out;
    overflow: hidden;
    display:flex;
    flex-direction:column;
}
.flor-top{
    position:absolute;
    width:auto;
    height:80px;
    top:-5%;
    left: 50%;
    transform: translate(-50%, 0) rotate(180deg);
}
.flor-bottom{
    position:absolute;
    width:auto;
    height:80px;
    bottom: -5%;
    left:50%;
    transform: translateX(-50%);
    z-index: 1;
}

.popup_body {
    background-image: url('../../assets/img/Fondo.webp');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: 0;
}

.icon__close {
    position: absolute;
    height: 52px;
    width: 52px;
    display: flex;
    border-radius: 50%;
    padding: .5rem;
    margin: .5rem;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    cursor: pointer;
    color: #4E2855;
    z-index: 2;
}

.pop-up-body {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}

.title {
    font-family: 'Philadelphia';
    font-size: 28px;
    font-weight: 500;
    color: var(--font-primary-color);
    text-align: center;
    line-height: 110%;
    position: relative;
    margin-top:4rem;
    z-index: 2;

}

.pop-up-footer {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.fade-enter .pop-up-inner,
.fade-leave-to .pop-up-inner {
    opacity: 0;
    transform: translateY(-32px);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 250ms ease-in-out
}

.fade-leave-active {
    transition-delay: 250ms;
}

@media (min-width: 768px) and (max-width: 991px) {
    .pop-up-inner {
        width:500px;
        height:650px;
    }

    .title {
        font-size: 45px;
    }
    

}

@media (min-width: 1024px) {
    .pop-up-body {
        margin-top:4rem;
    }
    .flor-top{
        width:auto;
        height:130px;
    }
    .flor-bottom{
        width:auto;
        height:130px;
    }
    .pop-up-inner {
        width:600px;
        height:650px;
    }

    .title {
        font-size: 45px;
    }

    .title {
        font-size: 90px;
    }
    .form-control::placeholder{
        font-size:1rem;
    }
  

}
</style>