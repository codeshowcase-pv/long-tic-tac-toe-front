<template>
  <div class="box">
    <div class="tile is-vertical is-align-items-center">
      <b-field>
        <b-button tag="router-link"
                  :to="{ name: 'login' }"
                  type="is-primary">
          Войти
        </b-button>
      </b-field>

      <b-field>
        <b-button tag="router-link"
                  :to="{ name: 'registration' }"
                  type="is-info">
          Зарегистрироваться (бесплатно без смс)
        </b-button>
      </b-field>
    </div>
  </div>
</template>
