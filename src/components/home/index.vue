<template>
  <section class="h-100 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
    <div class="tile is-ancestor is-6 white-border py-3">
      <div class="tile is-parent is-vertical is-align-items-center">
        <div class="tile is-child">
          <b-button tag="router-link"
                    to="/login"
                    class="home-buttons">
            Войти
          </b-button>
        </div>

        <div class="tile is-child">
          <b-button tag="router-link"
                    to="/registration"
                    class="home-buttons">
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

<style scoped>
.white-border {
  border: 2px solid white;
  border-radius: 15px;
}

.home-buttons {
  background: black;
  color: white;
}

.home-buttons:hover {
  border-width: 3px;
  color: white;
}
</style>
