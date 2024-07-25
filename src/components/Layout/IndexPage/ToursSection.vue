<script setup>

import BaseButton from "@/components/UI/BaseButton.vue";
</script>

<template>
  <section class="section-tours" id="section-tours">
    <div class="u-center-text">
      <h2 class="heading-secondary u-margin-bottom-6">
        Most popular tours
      </h2>
    </div>
    <div class="row">
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">
                the sea explorer
              </span>
            </h4>
            <div class="card__details">
              <ul>
                <li>3 Day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>sleep in cozy hotels</li>
                <li>difficulty: easy</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back--1">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$297</p>
              </div>
              <base-button mode="white" href="#popup">Book now !</base-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--2">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--2">
                the forest hiker
              </span>
            </h4>
            <div class="card__details">
              <ul>
                <li>7 Day tours</li>
                <li>Up to 40 people</li>
                <li>6 tour guides</li>
                <li>sleep in provided tents</li>
                <li>difficulty: medium</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back--2">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$529</p>
              </div>
              <base-button mode="white" href="#popup">Book now !</base-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--3">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--3">
                the snow adventurer
              </span>
            </h4>
            <div class="card__details">
              <ul>
                <li>5 Day tours</li>
                <li>Up to 15 people</li>
                <li>3 tour guides</li>
                <li>sleep in provided tents</li>
                <li>difficulty: hard</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back--3">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$897</p>
              </div>
              <base-button href="#popup" mode="white">Book now !</base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="u-center-text u-margin-top-6">
      <base-button mode="green">
        discover all tours
      </base-button>
    </div>

  </section>
</template>

<style scoped lang="scss">
.section-tours {
  background-color: var(--color-gray-light-1);
  padding: 20rem 0 10rem 0;
  margin-top: -7rem;
}

</style>