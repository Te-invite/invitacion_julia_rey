<script>
export default {
  name: 'Boton',
  props: {
    label: {
      type: String,
      required: false 
    },
    customClass: {
      type: String,
      default: 'btn-mayor'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
   <button 
     type="button" 
     :class="['btn', customClass, 'btn-lg']"
     :disabled="disabled"
     :aria-label="label || 'Botón'"
   >
      {{ label }}
   </button>
</template>

<style>
.btn-mayor {
    width: 200px;       
    min-height: 48px;
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 8px;
    color: var(--color_btn);
    border: 1px solid var(--font-primary-color);
    background: transparent;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s ease;
    will-change: transform, background-color;
}

.btn-mayor:hover {
  background: var(--font-primary-color);
  color: white;
}

.btn-mayor:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.btn-mayor:active {
  transform: scale(0.98);
}

.btn-mayor:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (min-width: 1024px) {
  .btn-mayor {
    width: 250px;
    height: 60px;
  }
}
</style>