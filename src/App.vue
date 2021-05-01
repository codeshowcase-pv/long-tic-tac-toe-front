<template>
  <div id="app" class="h-100 is-flex is-flex-direction-column">
    <b-navbar v-if="loggedIn">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'root' }">
          <img src="@/assets/logo.svg" alt="Картинка с крестиками-ноликами">
        </b-navbar-item>
      </template>

      <template #start>
        <b-navbar-item tag="router-link" :to="{ name: 'my_profile' }">
          Мой профиль
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item>
          <b-button label="Окно (сюда выходят)"
                    class="is-primary"
                    :class="{ 'is-loading': logoutLoading }"
                    icon-right="exit-run"
                    @click.prevent="logout"/>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState }                from 'vuex';
import { logout as logoutRequest } from '@/api/session';

export default {
  computed: mapState(['loggedIn']),

  data: () => ({
    logoutLoading: false,
  }),

  methods: {
    logout() {
      this.logoutLoading = true;

      logoutRequest()
          .then(() => this.$store.commit('signUserOut'))
          .finally(() => this.logoutLoading = false);
    },
  },
};
</script>
