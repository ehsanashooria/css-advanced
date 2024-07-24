<script setup>

</script>

<template>
  <section class="section-booking">
    <div class="row">
      <div class="book">
        <div class="book__form">
          <form action="#" class="form">
            <div class="u-margin-bottom-2">
              <h2 class="heading-secondary">Start booking now!</h2>
            </div>
            <div class="form__group">
              <input class="form__input" required id="fullName" type="text" placeholder="Full name">
              <label for="fullName" class="form__label">Full name</label>
            </div>
            <div class="form__group">
              <input class="form__input" required id="email" type="email" placeholder="Email Address">
              <label for="email" class="form__label">Email address</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-booking {
  padding: 12rem 0;
  background-image: linear-gradient(to bottom right, var(--color-primary-light, var(--color-primary-dark)), var(--color-primary-dark));
}

.book {
  height: 38rem;
  background-image: linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%), url(@/assets/image/nat-10.jpg);
  background-size: cover;

  &__form {
    width: 60%;
    padding: 4.5rem;
  }
}

.form {
  &__group {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  &__input {
    padding: 1rem 1.5rem;
    border-radius: 0.3rem;
    background-color: rgba(255, 255, 255, 0.8);
    font-family: inherit;
    transition: all 0.3s ease;
    border-bottom: 4px solid transparent;
    color: inherit;
    width: 70%;
    display: block;

    &:focus {
      outline: none;
      border-bottom: 4px solid var(--color-primary);
      box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.10);

      &:invalid {
        border-bottom: 4px solid var(--color-secondary-dark);
      }
    }


    &::placeholder {
      color: var(--color-gray-dark-2);
    }
  }

  &__label {
    font-size: 0.8rem;
    font-weight: 700;
    margin-left: 1.5rem;
    margin-top: 0.7rem;
    display: block;

    transition: all 0.3s ease;
  }

  &__input:placeholder-shown + .form__label {
    transform: translateY(-2rem);
    opacity: 0;
  }
}


</style>