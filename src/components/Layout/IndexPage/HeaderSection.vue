<script setup>
import BaseButton from "@/components/UI/BaseButton.vue";
</script>

<template>
  <header class="header">
    <div class="header__logo-box">
      <img src="../../../assets/image/logo-white.png" alt="logo" class="header__logo">
    </div>
    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Outdoors</span>
        <span class="heading-primary--sub">is where life happens</span>
      </h1>
      <base-button animated mode="white" href="#">Discover our tours</base-button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/css/utilities/utilities";

.header {
  height: 95vh;
  background-image: linear-gradient(
          to right bottom,
          rgba(126, 213, 111, 0.8),
          rgba(85, 197, 122, 0.8)),
  url(@/assets/image/hero.jpg);
  background-size: cover;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  @include respond(phone){
    clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
  }


  &__logo-box {
    position: absolute;
    top: 3rem;
    left: 3rem;
  }

  &__logo {
    height: 2.5rem;
  }

  &__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}


</style>