<template>
  <div class="w-100 h-100 columns is-variable is-4">
    <div class="column is-three-fifths">
      <div class="panel h-100 is-flex is-flex-direction-column">
        <div class="panel-heading">
          Тут пишут и читают
        </div>
        <div class="panel-block is-flex-grow-1 is-flex is-flex-direction-column is-align-items-start limit-height-block">
          <p v-for="(message, key) in messages" :key="key">{{message}}</p>
        </div>
        <div class="panel-block is-flex-grow-1 is-flex is-align-items-end">
          <div class="is-flex column is-full">
            <input type="text"
                   class="input"
                   placeholder="ваше сообщение.."
                   v-model="message"
                   @keypress.enter="sendMessage">

            <b-button type="is-success" class="ml-2" @click="sendMessage">Отправить</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-two-fifths">
      <div class="panel h-100">
        <div class="panel-heading">
          Те, кто с нами
        </div>
        <div class="panel-block is-flex">
          <ul class="limit-height-block is-flex-grow-1">
            <li v-for="(user, key) in users" :key="key">{{user}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data: () => ({
    message: "",
    messages: [],
    users: [1,2,3,4,5,6,7,8,9,10]
  }),

  methods: {
    sendMessage(){
      console.log(this.message);
      //отправка сообщения на сервер
      //пока имитация
      this.messages.push(this.message)
      this.message = '';
    },
  }
}

</script>

<style scoped>
  .limit-height-block {
    min-height: 480px;
    max-height: 480px;
    overflow-y: scroll;
  }
</style>
