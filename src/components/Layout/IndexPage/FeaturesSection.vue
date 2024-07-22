<script setup>
import "bootstrap-icons/font/bootstrap-icons.min.css"
</script>
<template>
  <section class="section-features">
    <div class="row">
      <div class="col-1-of-4">
        <div class="feature-box">
          <i class="feature-box__icon bi bi-globe-americas"></i>
          <h3 class="heading-tertiary u-margin-bottom-1">
            Explore the world
          </h3>
          <p class="feature-box__text">
            Discover diverse cultures, breathtaking landscapes, and unique experiences worldwide
          </p>
        </div>
      </div>
      <div class="col-1-of-4">
        <div class="feature-box">
          <i class="feature-box__icon bi bi-compass"></i>
          <h3 class="heading-tertiary u-margin-bottom-1">
            Meet nature
          </h3>
          <p class="feature-box__text">
            Embrace nature's beauty and serenity in immersive, enriching experiences together
          </p>
        </div>
      </div>
      <div class="col-1-of-4">
        <div class="feature-box">
          <i class="feature-box__icon bi bi-map"></i>
          <h3 class="heading-tertiary u-margin-bottom-1">
            Find your way
          </h3>
          <p class="feature-box__text">
            Discover your path with guidance, insight, and personal growth journey
          </p>
        </div>
      </div>
      <div class="col-1-of-4">
        <div class="feature-box">
          <i class="feature-box__icon bi bi-heart"></i>
          <h3 class="heading-tertiary u-margin-bottom-1">
            Live a healthier life
          </h3>
          <p class="feature-box__text">
            Adopt healthy habits for a balanced, vibrant, and fulfilling lifestyle
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-features {
  padding: 20rem 0;
  background-image: linear-gradient(
          to right bottom,
          rgba(126, 213, 111, 0.8),
          rgba(85, 197, 122, 0.8)),
  url(@/assets/image/nat-4.jpg);
  background-size: cover;
  transform: skewY(-7deg);
  margin-top: -8rem;

  & > * {
    transform: skewY(7deg);
  }
}

.feature-box {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  min-height: 20rem;

  &:hover {
    transform: scale(1.05) translateY(-1rem);
  }

  &__icon {
    background-image: linear-gradient(
            to right,
            rgba(126, 213, 111, 0.8),
            rgba(85, 197, 122, 0.8));
    display: inline-block;
    background-clip: text;
    color: transparent;
    font-size: 4.5rem;
    margin-bottom: 0.5rem;
  }

  &__text {
    font-size: 0.9rem;
  }
}
</style>