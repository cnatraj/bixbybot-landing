<template>
  <v-app>
    <app-header />
    <v-main>
      <hero-section />
      <features-section />
    </v-main>
  </v-app>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
</script>