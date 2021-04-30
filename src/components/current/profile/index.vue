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
import { logout as logoutRequest } from '@/api/authentication';

// TODO: удалить после тестирования
import { profile as getProfile } from '@/api/current_user';

export default {
  computed: mapState(['userName']),

  data: () => ({
    loading: false,
  }),

  // TODO: удалить после тестирования
  mounted() {
    getProfile();
    // this.sendErrorNotification('Работает блеать');
  },

  methods: {
    logout() {
      this.loading = true;

      logoutRequest()
          .then(() => this.$store.commit('signUserOut'))
          .finally(() => this.loading = false);
    },

    // TODO: удалить после тестирования
    // sendErrorNotification(text) {
    //   this.$buefy.notification.open({
    //     duration: 5000,
    //     message:  `<strong>Ошибка!</strong></br>${ text }`,
    //     position: 'is-bottom-right',
    //     type:     'is-danger',
    //     hasIcon:  true,
    //   });
    // },
  },
};
</script>
