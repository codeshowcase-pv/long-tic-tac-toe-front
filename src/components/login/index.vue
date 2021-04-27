<template>
  <div class="box">
    <div class="tile is-vertical is-align-items-center">
      <b-field label="Логин" :label-position="'on-border'">
        <b-input v-model="login"
                 @keypress.native.enter.prevent="submit"/>
      </b-field>

      <b-field label="Пароль" :label-position="'on-border'">
        <b-input type="password"
                 v-model="password"
                 @keypress.native.enter.prevent="submit"/>
      </b-field>

      <b-field>
        <b-button label="Проникнуть на сайт"
                  class="is-primary"
                  :class="{ 'is-loading': loading }"
                  @click.prevent="submit"/>
      </b-field>
    </div>
  </div>
</template>

<script>
import { login as loginRequest } from '../../api';

export default {
  data: () => ({
    login:    null,
    password: null,
    loading:  false,
  }),

  mounted() {
    if (localStorage.loggedIn === 'true') this.redirectToProfile();
  },

  methods: {
    redirectToProfile() {
      this.$router.push('/profile');
    },

    submit() {
      this.loading = true;

      loginRequest(this.login, this.password)
          .then(({ data }) => {
            localStorage.loggedIn = true;
            localStorage.name     = data.name;
            this.redirectToProfile();
          })
          .finally(() => this.loading = false);
    },
  },
};
</script>
