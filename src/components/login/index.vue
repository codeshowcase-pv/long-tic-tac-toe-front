<template>
  <div class="box">
    <div class="tile is-vertical is-align-items-center">
      <b-field>
        <return-button route="/" text="На главную"/>
      </b-field>

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
import { login as loginRequest } from '@/api/session';
import ReturnButton              from '@/components/buttons/return';

export default {
  components: { ReturnButton },

  data: () => ({
    login:    null,
    password: null,
    loading:  false,
  }),

  methods: {
    submit() {
      this.loading = true;

      loginRequest(this.login, this.password)
          .then(({ data }) => {
            this.$store.commit('signUserIn', data);
            this.$router.push('/profile');
          })
          .finally(() => this.loading = false);
    },
  },
};
</script>
