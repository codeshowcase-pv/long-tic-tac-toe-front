<template>
  <div id="app">
    <div class="columns is-variable is-2">
      <div class="column">
        <b-input v-model="hello"></b-input>
      </div>
      <div class="column">
        <b-button type="is-success">Войти</b-button>
      </div>
    </div>
    <p>{{hello}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      hello : 'Hello world'
    }
  }
}
</script>
