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
import { mapState }                from 'vuex';
import { logout as logoutRequest } from 'src/api';

export default {
  computed: mapState(['userName']),

  data: () => ({
    loading: false,
  }),

  methods: {
    logout() {
      this.loading = true;

      logoutRequest()
          .then(() => {
            this.$store.commit('clearLocalStorage');
            this.$router.push('/');
          })
          .finally(() => this.loading = false);
    },
  },
};
</script>
