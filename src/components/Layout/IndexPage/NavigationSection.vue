<script setup>

</script>

<template>
  <div class="navigation">
    <input id="navi-toggle" type="checkbox" class="navigation__checkbox">
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>
    <div class="navigation__background">&nbsp;</div>
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#" class="navigation__link"><span>01</span>About Natours</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link"><span>02</span>Your benefits</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link"><span>03</span>Popular tours</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link"><span>04</span>Stories</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link"><span>05</span>Book now</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  &__checkbox {
    display: none;
  }

  &__button {
    background-color: var(--color-white);
    width: 4rem;
    height: 4rem;
    position: fixed;
    border-radius: 50%;
    top: 3.5rem;
    right: 3.5rem;
    z-index: 40;
    cursor: pointer;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    text-align: center;
  }

  &__background {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-image: radial-gradient(farthest-corner at center, var(--color-primary-light), var(--color-primary-dark));
    position: fixed;
    top: 4rem;
    right: 4rem;
    z-index: 20;
    transition: transform 0.8s ease;
  }

  &__nav {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 30;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.8s ease;
  }

  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }

  &__link {
    &:link, &:visited {
      display: inline-block;
      font-size: 2rem;
      font-weight: 400;
      color: var(--color-white);
      text-decoration: none;
      text-transform: uppercase;
      padding: 0.75rem 1.5rem;
      margin-bottom: 0.5rem;
      transition: all 0.3s ease;
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, var(--color-white) 50%);
      background-size: 250%;
      border-radius: 0.3rem;
    }

    &:hover {
      background-position: 100%;
      color: var(--color-primary-dark);
      transform: translateX(2%);
    }

    span {
      display: inline-block;
      margin-right: 0.75rem;
    }
  }

  &__icon {
    position: relative;
    top: 1.95rem;

    &, &::before, &::after {
      display: inline-block;
      width: 1.5rem;
      height: .3rem;
      background-color: gray;
      transition: all 0.3s ease;
      border-radius: 3px;
    }

    &::before, &::after {
      content: "";
      position: absolute;
      left: 0;
    }

    &::before {
      top: -0.5rem;
    }

    &::after {
      top: 0.5rem;
    }
  }

  &__checkbox:checked ~ &__background {
    transform: scale(100);
  }

  &__checkbox:checked ~ &__nav {
    opacity: 1;
    visibility: visible;
  }

  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(135deg);
    background-color: var(--color-gray-dark-3);
  }

  &__checkbox:checked + &__button &__icon::after {
    transform: rotate(-135deg);
    top: 0;
    background-color: var(--color-gray-dark-3);
  }
}
</style>