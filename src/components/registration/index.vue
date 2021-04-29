<template>
  <div class="box">
    <div class="tile is-parent is-vertical is-align-items-center">
      <return-button class="tile is-child" route="/" text="На главную"/>

      <strong class="tile is-child">
        Здесь нельзя просто так взять и зарегистрироваться, мазафака
      </strong>
    </div>
  </div>
</template>

<script>
import ReturnButton from '@/components/buttons/return.vue';

export default {
  components: { ReturnButton },
};
</script>
