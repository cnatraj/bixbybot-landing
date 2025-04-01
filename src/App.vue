<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<style>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
}

.v-container {
  max-width: 1280px !important;
}

.v-application {
  background: white;
}
</style>
