<template>
  <v-app>
    <app-header />
    <v-main>
      <hero-section />
      <stats-section />
      <trusted-by-section />
      <features-section />
      <chatbot-solution-section />
      <!-- <testimonials-section /> -->
      <services-section />
      <!-- <pricing-section /> -->
      <faq-section />
      <!-- <integrations-section /> -->
      <cta-section />
      <contact-section />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import TrustedBySection from './components/TrustedBySection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ChatbotSolutionSection from './components/ChatbotSolutionSection.vue'
import StatsSection from './components/StatsSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PricingSection from './components/PricingSection.vue'
import FaqSection from './components/FaqSection.vue'
import IntegrationsSection from './components/IntegrationsSection.vue'
import CtaSection from './components/CtaSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
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