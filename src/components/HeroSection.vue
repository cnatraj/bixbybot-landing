<template>
  <section class="hero-section">
    <v-container>
      <v-row align="center" class="hero-row">
        <v-col cols="12" md="6" class="hero-content">
          <h1 class="text-h1 font-weight-bold mb-6">
            10x Your Website Visitors into <span class="highlight">Booked Appointments</span>
          </h1>
          <p class="text-h5 text-medium-emphasis mb-8">
            Qualify leads, automate scheduling, and increase conversions. <br>Built for the <span class="text-decoration-underline">home service industry.</span>
          </p>
          <v-btn
            color="primary"
            size="x-large"
            rounded="pill"
            class="hero-cta mb-4"
          >
            Reserve My Spot
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
          
          <div class="d-flex font-weight-bold text-medium-emphasis">
            <p class="mr-3">🚀 Free for first 50 signups</p>
            <p class="">💳 No credit card required</p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <chat-widget />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import ChatWidget from './ChatWidget.vue'
</script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  align-items: center;
  background: $purple-light;
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
}

.hero-row {
  min-height: 600px;
}

.hero-content {
  padding-right: 4rem;
  @media (max-width: $tablet-breakpoint) {
    padding-right: 0;
    text-align: center;
  }
}

.text-h1 {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  line-height: 1.1;
  color: $text-primary;
  letter-spacing: -0.02em;
}

.text-h5 {
  font-size: 1.25rem;
  line-height: 1.6;
  color: $text-secondary;
}

.hero-cta {
  background: $primary-gradient !important;
  font-weight: 600 !important;
  font-size: 1.125rem !important;
  height: 56px !important;
  min-width: 200px !important;
  padding: 0 2rem !important;
}

.section-chip {
  font-size: 0.875rem;
  font-weight: 500;
  height: 32px;
  
  :deep(.v-chip__content) {
    line-height: 1;
  }
}

.highlight {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline;
}
</style>