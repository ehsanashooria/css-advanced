<script setup>

import BaseButton from "@/components/UI/BaseButton.vue";
</script>

<template>
  <section class="section-stories">
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="@/assets/video/video.mp4" type="video/mp4"/>
        <source src="@/assets/video/video.webm" type="video/webm"/>
        Your browser does not support the video tag
      </video>
    </div>
    <div class="u-center-text u-margin-bottom-6">
      <h2 class="heading-secondary">
        we make people genuinely happy
      </h2>
    </div>
    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <img class="story__image" src="@/assets/image/nat-8.jpg" alt="Person on a tour">
          <figcaption class="story__caption">Mary Smith</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading--tertiary u-margin-bottom-1"> I had the best week ever with my family</h3>
          <p>
            Spending a blissful week with my family, filled with laughter, adventures, and cherished memories, made it
            the best time of my life, strengthening our bond like never before.
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <img class="story__image" src="@/assets/image/nat-9.jpg" alt="Person on a tour">
          <figcaption class="story__caption">Jack wilson</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading--tertiary u-margin-bottom-1"> WOW! my life is completely different now</h3>
          <p>
            WOW! My life is completely transformed, filled with new opportunities, experiences, and perspectives.
            Embracing change has brought an exciting and unexpected journey, redefining my path and future.
          </p>
        </div>
      </div>
    </div>

    <div class="u-center-text u-margin-top-6">
      <base-button mode="green">Read all stories</base-button>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/css/utilities/utilities";

.section-stories {
  padding: 12rem 0;
  position: relative;
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.2;
  overflow: hidden;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

</style>