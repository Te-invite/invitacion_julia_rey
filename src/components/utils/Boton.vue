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
    width: 200px;       
    min-height: 48px;
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 8px;
    color:var(--color_btn);
    border: 1px solid var(--font-primary-color);
    background: transparent;
    font-weight: 400;
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