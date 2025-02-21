<script>
export default{
    name:'Boton',
    props: {
    label: {
      type: String,
      required: false 
    },
    customClass: {
      type: String,
      default: 'btn-mayor'
    }
  }

}
</script>
<template>
   <button type="button" :class="['btn', customClass, 'btn-lg']">
      {{ label }}
    </button>
</template>
<style>
.btn-mayor{
    width: 270px;
    height: 60px;
    color:var(--color_btn);
    border: 1px solid var(--font-primary-color);
    background: transparent;
    padding: .75rem 1.5rem;
    font-weight: normal;
    border-radius: 10px;
    font-size: .8rem;
}
.btn-mayor:hover{
  background: var(--font-primary-color);
  color:white;
}
@media (min-width: 1024px) {
  .btn-mayor{
    width: 250px;
    height: 60px;
    font-size: .8rem;
  }
}
</style>