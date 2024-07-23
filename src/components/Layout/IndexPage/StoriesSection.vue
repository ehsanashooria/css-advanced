<script setup>

import BaseButton from "@/components/UI/BaseButton.vue";
</script>

<template>
  <section class="section-stories">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi minus nostrum quidem. Commodi ducimus eius
            hic ipsa, ipsam nostrum officiis perspiciatis quis quo quod, tenetur ut. Magni reiciendis rem sit!
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
          <h3 class="heading--tertiary u-margin-bottom-1"> WOw! my life is completely different now</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi minus nostrum quidem. Commodi ducimus eius
            hic ipsa, ipsam nostrum officiis perspiciatis quis quo quod, tenetur ut. Magni reiciendis rem sit!
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
  padding: 15rem 0;
  background-color: var(--color-gray-light-1);
}

</style>