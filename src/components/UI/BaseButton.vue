<template>
  <a class="button" :class="[{'button--animated' : animated} , buttonClass ]">
    <slot></slot>
  </a>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
      mode: {
        type: String,
        default:
            'white',
        validator(value) {
          return ['white', 'green'].includes(value)
        }
        ,
      },
      animated: {
        type: Boolean,
        default: false
      }
    }
)

const buttonClass = computed(() => `button--${props.mode}`)
</script>

<style scoped lang="scss">
.button {
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 1.75rem;
  border-radius: 10rem;
  display: inline-block;
  transition: all 0.3s ease-out;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 8px 10px rgba(0, 0, 0, .2);
  }

  &--white {
    background-color: white;
    color: black;
  }

  &--green {
    color: var(--color-primary-dark);
    background: none;
    text-decoration: underline !important;
    border-radius: 0.3rem !important;
    border: 2px solid var(--color-primary-dark);

    &:hover {
      color: white;
      background-color: var(--color-primary-dark);
      text-decoration: none !important;
    }
  }

  &--animated {
    animation: moveInBottom 1.5s ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
  }
}

</style>