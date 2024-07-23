<template>
  <section class="section-about">
    <div class="u-center-text">
      <h2 class="heading-secondary u-margin-bottom-6">
        Exciting tours for adventurous people
      </h2>
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <h3 class="heading-tertiary u-margin-bottom-1">
          You're going to fall in love with nature
        </h3>
        <p class="para">
          You're going to fall in love with nature's breathtaking beauty, from serene landscapes to vibrant wildlife,
          inspiring peace and wonder
        </p>
        <h3 class="heading-tertiary u-margin-bottom-1">
          Live adventurous like you never have before
        </h3>
        <p class="para">
          Live adventurous like you never have before, embracing new challenges, exploring unknown places, and pushing
          your limits. Experience the thrill of discovery and the joy of living life to its fullest.
        </p>
        <base-button mode="green">Let's See! <i class="bi bi-arrow-right"></i></base-button>
      </div>
      <div class="col-1-of-2">
        <div class="composition">
          <img src="@/assets/image/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
          <img src="@/assets/image/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
          <img src="@/assets/image/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-about {
  background-color: var(--color-gray-light-1);
  padding: 18rem 0;
  margin-top: -20vh;
}

.composition {
  position: relative;

  &__photo {
    width: 55%;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.4);
    position: absolute;
    transition: all 0.3s ease;
    outline-offset: 1.75rem;

    &--p1 {
      left: 0;
      top: -1.5rem;
    }

    &--p2 {
      right: 0;
      top: 2.5rem;
    }

    &--p3 {
      left: 20%;
      top: 8rem;
    }

    &:hover {
      outline: 1rem solid var(--color-primary);
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.5);
      z-index: 100;
    }
  }

  &:hover &__photo:not(:hover) {
    transform: scale(0.9);
  }
}

</style>