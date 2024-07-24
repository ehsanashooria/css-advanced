<script setup>

import BaseButton from "@/components/UI/BaseButton.vue";
</script>

<template>
  <section class="section-booking">
    <div class="row">
      <div class="book">
        <div class="book__form">
          <form action="#" class="form">
            <div class="u-margin-bottom-2">
              <h2 class="heading-secondary">Start booking now!</h2>
            </div>
            <div class="form__group">
              <input class="form__input" required id="fullName" type="text" placeholder="Full name">
              <label for="fullName" class="form__label">Full name</label>
            </div>
            <div class="form__group">
              <input class="form__input" required id="email" type="email" placeholder="Email Address">
              <label for="email" class="form__label">Email address</label>
            </div>
            <div class="form__group">
              <div class="form__radio-group">
                <input name="tour" class="form__radio" type="radio" id="small">
                <label for="small" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Small tour group
                </label>
              </div>
              <div class="form__radio-group">
                <input name="tour" class="form__radio" type="radio" id="large">
                <label for="large" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Large tour group
                </label>
              </div>
            </div>
            <div class="form__group">
              <base-button class="u-margin-top-2" mode="green">Go ahead and book!</base-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-booking {
  padding: 12rem 0;
  background-image: linear-gradient(to bottom right, var(--color-primary-light, var(--color-primary-dark)), var(--color-primary-dark));
}

.book {
  height: 38rem;
  background-image: linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%), url(@/assets/image/nat-10.jpg);
  background-size: cover;

  &__form {
    width: 60%;
    padding: 4.5rem;
  }
}

</style>