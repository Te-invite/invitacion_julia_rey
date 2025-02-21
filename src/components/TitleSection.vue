<script>

export default {
  name: 'TitleSection',
  props: {
    title: {
      type: String,
      required: true, // El título debe ser pasado como prop
    }
  }
}
</script>
<template>
    <div class="container_title">
        <slot name="icon"></slot>
        <h1 class="titleSection" >{{ title }}</h1>
    </div>
</template>
<style>
.container_title {
    width: 100%;
    height: 150;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.titleSection {
    font-family: "Philadelphia";
    color:var(--font-primary-color);
    font-style: italic;
    font-weight: normal;
    font-size: 2.5rem;
    text-align: center;
}

@media (min-width: 768px) and (max-width: 991px) {
    .container_title {
        width: 100%;
        height: 250px;
    }

    .titleSection {
        font-size: 4rem;
    }
}

@media (min-width: 1025px) {
    .container_title {
        width: 100%;
        height: 200px;
    }

    .titleSection {
        font-size: 5.5rem;
    }
}
</style>