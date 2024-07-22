<script setup>

</script>

<template>
  <section class="section-tours">
    <div class="u-center-text">
      <h2 class="heading-secondary u-margin-bottom-6">
        Most popular tours
      </h2>
    </div>
    <div class="row">
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            FRONT
          </div>
          <div class="card__side card__side--back card__side--back--1">
            BACK
          </div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            FRONT
          </div>
          <div class="card__side card__side--back card__side--back--2">
            BACK
          </div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            FRONT
          </div>
          <div class="card__side card__side--back card__side--back--3">
            Backend
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-tours {
  background-color: var(--color-gray-light-1);
  padding: 20rem 0 30rem 0;
  margin-top: -7rem;
}

.card {
  perspective: 100rem;
  --moz-perspective: 150rem;
  height: 40rem;
  position: relative;

  &__side {
    height: 40rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    width: 100%;

    &--back {
      transform: rotateY(180deg);

      &--1 {
        background-image: linear-gradient(to bottom right, var(--color-secondary-light), var(--color-secondary-dark));
      }

      &--2 {
        background-image: linear-gradient(to bottom right, var(--color-primary-light), var(--color-primary-dark));
      }

      &--3 {
        background-image: linear-gradient(to bottom right, var(--color-tertiary-light), var(--color-tertiary-dark));
      }

    }

    &--front {
      background-color: var(--color-white);
    }
  }

  &:hover &__side--front {
    transform: rotateY(180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }
}
</style>