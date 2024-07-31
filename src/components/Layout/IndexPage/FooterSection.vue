<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer__logo-box">
      <img src="@/assets/image/logo-green-2x.png" alt="full logo" class="footer__logo">
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="" class="footer__link">Company</a>
            </li>
            <li class="footer__item">
              <a href="" class="footer__link">Contact us</a>
            </li>
            <li class="footer__item">
              <a href="" class="footer__link">Carrers</a>
            </li>
            <li class="footer__item">
              <a href="" class="footer__link">Privacy policy</a>
            </li>
            <li class="footer__item">
              <a href="" class="footer__link">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-1-of-2">
        <p class="footer__copyright">
          Built my <a href="" class="footer__link">Ehsan Ashoori</a> for his online course <a href=""
                                                                                              class="footer__link">Advanced
          CSS and Sass</a> Copyright &copy; by Ehsan Ashoori. You are 100% allowed to use this page for both personal
          and commercial use bot not to claim it as your design. A credit to the original author , Ehsan Ashoori , is of
          course highly appreciated!
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/css/utilities/utilities";

.footer {

  background-color: var(--color-gray-dark-3);
  padding: 10rem 0;
  @include respond(tab-port) {
    padding: 6rem 0;
  }

  &__logo-box {
    text-align: center;
    margin-bottom: 6rem;
  }

  &__logo {
    width: 8rem;
    height: auto;
  }

  &__navigation {
    padding-top: 1rem;
    border-top: 2px solid var(--color-gray-dark-1);
    display: inline-block;
  }

  &__list {
    list-style: none;
  }

  &__item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  &__link {
    transition: all 0.2s ease;


    &:link, &:visited {
      color: var(--color-gray-light-1);
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
    }

    &:hover, &:active {
      color: var(--color-primary);
      box-shadow: 0 .75rem 1.5rem rgba(0, 0, 0, 0.3);
      transform: rotate(5deg) scale(1.03);
    }
  }

  &__copyright {
    color: var(--color-gray-dark-1);
    padding-top: 1rem;
    border-top: 2px solid var(--color-gray-dark-1);
  }
}
</style>