<template>
  <div id="app" class="h-100 is-flex is-flex-direction-column">
    <b-navbar v-if="loggedIn" >
      <template #brand>
        <b-navbar-item tag="router-link" to="/">
          <img src="./assets/logo.svg" alt="Картинка с крестиками-ноликами">
        </b-navbar-item>
      </template>

      <template #start>
        <b-navbar-item href="#">
          Home
        </b-navbar-item>

        <b-navbar-item href="#">
          Documentation
        </b-navbar-item>

        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>

          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>

            <a class="button is-light">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <router-view></router-view>
    </div>
  </div>
</template>
