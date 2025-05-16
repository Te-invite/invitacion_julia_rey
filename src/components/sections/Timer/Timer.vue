<script>
import Counter from './Counter.vue';
export default {
    name: 'Timer',
    components: {
        Counter
    }
};
</script>

<template>
    <div id="dias" class="section__timer" >
        <div class="countdown">
            <Counter :year="2025" :month="3" :date="29" :hour="0" :minute="0" :second="0" :millisecond="31" />
        </div>
    </div>
</template>

<style>
.section__timer {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; 
    margin-bottom: 1rem;
}


@media (min-width: 768px) and (max-width: 991px) {
    .section__timer {
        width: 100%;
        height: 150px;
        margin-bottom: 0;
    }

    .section__timer {
        width: 100%;
    }


    .countdown {
        width: 500px;
        height: 300px;
    }
}

@media (min-width: 1024px) {
    .section__timer {
        width: 100%;
        height: 200px;
        margin-bottom: 2.5rem;
    }

    .background_paper{
        width: 860px;
        height: auto;

    }
    .countdown {
        width: 600px;
        height:auto;
    }

}
</style>