<template>
  <div class="box">
    <strong>
      Здесь нельзя просто так взять и зарегистрироваться, мазафака
    </strong>
  </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.loggedIn === 'true')
      this.$router.push('/profile');
  },
};
</script>
