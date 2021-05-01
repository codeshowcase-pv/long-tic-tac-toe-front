<template>
  <b-button tag="router-link"
            :to="route"
            size="is-small"
            icon-left="undo-variant">
    {{ text }}
  </b-button>
</template>

<script>
export default {
  props: ['route', 'text'],
};
</script>
