<template>
  <div class="box">
    <div class="tile is-vertical is-align-items-center">
      <b-field label="Хэллоу" horizontal>
        <b-input v-model="userName" readonly></b-input>
      </b-field>

      <b-field>
        <b-button label="Немедленно бежать с сайта"
                  class="is-primary"
                  :class="{ 'is-loading': loading }"
                  @click.prevent="logout"/>
      </b-field>
    </div>
  </div>
</template>

<script>
import { logout as logoutRequest } from '../../../api';

export default {
  data: () => ({
    loading:  false,
    userName: localStorage.name,
  }),

  mounted() {
    if (localStorage.loggedIn !== 'true') this.redirectToLoginPage();
  },

  methods: {
    redirectToLoginPage() {
      this.$router.push('/login');
    },

    logout() {
      this.loading = true;

      logoutRequest()
          .then(() => {
            localStorage.loggedIn = false;
            localStorage.name     = null;
            this.redirectToLoginPage();
          })
          .finally(() => this.loading = false);
    },
  },
};
</script>
