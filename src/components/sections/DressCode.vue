<script>
import InfoSection from '../utils/InfoSection.vue';
export default {
    name: 'DressCode',
    components: {
        InfoSection
    },
    data() {
        return {
            code: 'Elegante'
        }
    }
}
</script>

<template>
    <div id="dresscode" class="container-dresscode">
        <InfoSection
            title="Dress Code"
            subtitle="dresscode"
            :mainText="code"
            containerClass="container__dresscode"
            textClass="text_dresscode"
        />
    </div>
</template>

<style>
.container-dresscode{
    margin-bottom: 10%;
}
</style>

