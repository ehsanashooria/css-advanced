<script setup>

import BaseButton from "@/components/UI/BaseButton.vue";
</script>

<template>
  <div class="popup" id="popup">
    <div class="popup__content">
      <a class="popup__close bi bi-x" href="#section-tours"></a>
      <div class="popup__left">
        <img src="@/assets/image/nat-8.jpg" class="popup__image" alt="Tour Photo">
        <img src="@/assets/image/nat-9.jpg" class="popup__image" alt="Tour Photo">
      </div>
      <div class="popup__right">
        <h2 class="heading-secondary u-margin-bottom-2">Start Booking now</h2>
        <h3 class="heading-tertiary u-margin-bottom-2">Important &nbsp; Please read these terms before booking</h3>
        <p class="popup__text">
          Start booking now to secure your dream vacation. Early reservations guarantee the best rates, prime
          accommodations, and exclusive offers. By booking in advance, you ensure availability and avoid last-minute
          hassles. Don't miss the chance to create unforgettable memories. Act fast and make your perfect getaway a
          reality. Your ideal vacation is just a booking away!
        </p>
        <base-button mode="green" class="popup__book">Book now</base-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/utilities/utilities";

.popup {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  z-index: 100;

  opacity: 0;
  visibility: hidden;
  transition: all .6s;


  &:target {
    opacity: 1;
    visibility: visible;
  }

  &:target &__content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &__content {
    width: 70%;
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
    background-color: var(--color-white);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;

    z-index: 101;
    border-radius: 0.3rem;
    display: table;
    overflow: hidden;
    transition: all .3s;

    @include respond(tab-land) {
      width: 90%;
    }

  }

  &__book {
    @include respond(tab-port) {
      display: block;
      width: 50%;
      min-width: 13rem;
      margin: 0 auto;
      text-align: center;
    }

  }

  &__left {
    width: 33.33333333%;
    display: table-cell;
    vertical-align: middle;
    @include respond(tab-port) {
      display: none;
    }
  }

  &__right {
    width: 66.66666666%;
    display: table-cell;
    vertical-align: middle;
    padding: 3rem 5rem;
    @include respond(tab-port) {
      display: block;
      width: 100%;
      padding: 5rem 2rem 3rem;
    }
  }

  &__image {
    display: block;
    width: 100%;

  }

  &__text {
    margin-bottom: 2rem;

    column-count: 2;
    column-gap: 2rem;
    @include respond(phone) {
      column-count: 1;
      column-gap: 0;
    }
  }

  &__close:visited, &__close:link {
    position: absolute;
    text-decoration: none;
    top: 2rem;
    right: 2.5rem;
    font-size: 2rem;
    transition: all 0.3s;
    color: var(--color-gray-dark-3);

    &:hover {
      color: var(--color-primary);
      cursor: pointer;
    }
  }
}
</style>