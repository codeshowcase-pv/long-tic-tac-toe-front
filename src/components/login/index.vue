<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <form @submit.prevent="signIn">
        <b-field label="Логин">
          <b-input v-model="login"></b-input>
        </b-field>

        <b-field label="Пароль">
          <b-input type="password" password-reveal v-model="password"></b-input>
        </b-field>

        <b-button native-type="submit">Войти</b-button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        login: '',
        password: ''
      }
    },
    methods: {
      signIn: function () {
        console.log(this.login, this.password);
      }
    }
  }
</script>