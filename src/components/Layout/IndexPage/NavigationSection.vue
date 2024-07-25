<script setup>

</script>

<template>
  <div class="navigation">
    <input id="navi-toggle" type="checkbox" class="navigation__checkbox">
    <label for="navi-toggle" class="navigation__button">
      <i class="bi bi-list navigation__icon"></i>
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

    transform: scale(80);
  }

  &__nav {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 30;
  }

  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }

  &__item {

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
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }
}
</style>