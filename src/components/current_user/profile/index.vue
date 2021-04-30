<template>
  <div class="box">
    <div class="tile is-vertical is-align-items-center">
      <strong>
        Хэллоу {{ userName }}, вы загрузили эту страницу {{ profileData.message }}
      </strong>
    </div>
  </div>
</template>

<script>
import { mapState }              from 'vuex';
import { profile as getProfile } from '@/api/current_user';

export default {
  computed: mapState(['userName']),

  data: () => ({
    profileData: {},
  }),

  mounted() {
    getProfile().then(({ data }) => this.profileData = data);
  },
};
</script>
