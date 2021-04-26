<template>
  <section class="h-100 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
    <div class="tile is-ancestor is-4 box py-3">
      <div class="tile is-parent is-vertical is-align-items-center">
        <div class="tile is-child">
          <b-button tag="router-link"
                    to="/login"
                    type="is-primary">
            Войти
          </b-button>
        </div>

        <div class="tile is-child">
          <b-button tag="router-link"
                    to="/registration"
                    type="is-info">
            Зарегистрироваться (бесплатно без смс)
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    if (localStorage.loggedIn)
      this.$router.push('/current')
  }
}
</script>
