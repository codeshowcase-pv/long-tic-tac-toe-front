<template>
  <div id="app">
    <div class="container">
      <b-navbar>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <h1>Long tic tac toe</h1>
          </b-navbar-item>
        </template>

        <template #end>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Регистрация</strong>
              </a>
              <router-link to="/login" class="button is-light">
                Войти
              </router-link>

            </div>
          </b-navbar-item>
        </template>
      </b-navbar>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
