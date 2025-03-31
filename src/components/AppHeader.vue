<template>
  <v-app-bar app flat color="white" elevation="0">
    <v-container class="d-flex align-center justify-space-between py-2">
      <router-link to="/" class="d-flex align-center text-decoration-none">
        <v-icon color="primary" size="32" class="mr-2"
          >mdi-circle-multiple</v-icon
        >
        <span class="text-h6 font-weight-bold text-primary">BIXBYBOT</span>
      </router-link>

      <v-btn
        color="primary"
        class="rounded-pill font-weight-medium header-cta"
        size="x-large"
      >
        Try it for Free
        <v-icon end>mdi-arrow-right</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup></script>

<style scoped lang="scss">
.v-app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.9) !important;
    backdrop-filter: blur(10px);
  }
}

.v-btn {
  text-transform: none;
  letter-spacing: 0;
  font-weight: 500;
}

.header-cta {
  background: $primary-gradient !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  height: 48px !important;
  padding: 0 1.5rem !important;
  color: white !important;

  :deep(.v-icon) {
    color: white !important;
  }
}
</style>
