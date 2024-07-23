<script setup>

import BaseButton from "@/components/UI/BaseButton.vue";
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
              <base-button mode="white">Book now !</base-button>
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
              <base-button mode="white">Book now !</base-button>
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
              <base-button mode="white">Book now !</base-button>
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
  padding: 20rem 0 20rem 0;
  margin-top: -7rem;
}

.card {
  perspective: 100rem;
  --moz-perspective: 150rem;
  height: 35rem;
  position: relative;

  &__side {
    height: 35rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    width: 100%;
    overflow: hidden;
    border-radius: 0.3rem;

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
    transform: rotateY(-180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }

  &__picture {
    background-size: cover;
    height: 14rem;
    background-blend-mode: screen;
    --webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

    &--1 {
      background-image: linear-gradient(to bottom right, var(--color-secondary-light), var(--color-secondary-dark)), url(@/assets/image/nat-5.jpg);
    }

    &--2 {
      background-image: linear-gradient(to bottom right, var(--color-primary-light), var(--color-primary-dark)), url(@/assets/image/nat-6.jpg);
    }

    &--3 {
      background-image: linear-gradient(to bottom right, var(--color-tertiary-light), var(--color-tertiary-dark)), url(@/assets/image/nat-7.jpg);
    }
  }

  &__heading {
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--color-white);
    position: absolute;
    top: 8rem;
    right: 1.5rem;
    text-align: right;
    font-weight: 300;
    width: 60%;
  }

  &__heading-span {
    opacity: 0.8;
    padding: 0.25rem 1.25rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;


    &--1 {
      background-image: linear-gradient(to right bottom, var(--color-secondary-light), var(--color-secondary-dark));
    }

    &--2 {
      background-image: linear-gradient(to right bottom, var(--color-primary-light), var(--color-primary-dark));
    }

    &--3 {
      background-image: linear-gradient(to right bottom, var(--color-tertiary-light), var(--color-tertiary-dark));
    }
  }

  &__details {
    padding: 2rem;

    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto;

      li {
        text-align: center;
        font-size: 1.25rem;
        padding: 0.65rem;


        &:not(:last-child) {
          border-bottom: 1px solid var(--color-gray-light-2);
        }
      }
    }
  }

  &__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;
  }

  &__price-box {
    text-align: center;
    margin-bottom: 6rem;
    color: var(--color-white);
  }

  &__price-only {
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  &__price-value {
    font-size: 4.5rem;
    font-weight: 200;
  }
}


</style>