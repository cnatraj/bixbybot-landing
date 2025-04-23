<template>
  <section class="stats-section">
    <v-container>
      <v-row align="center" class="gx-16">
        <v-col cols="12" md="6" class="position-relative">
          <h3 class="text-h3 font-weight-black">
            Qualify leads, schedule appointments, and boost conversions - hands
            free.
          </h3>
        </v-col>
        <v-col cols="12" md="6" class="content-col">
          <div class="text-h5 mb-8">
            <p>
              <v-icon icon="mdi-check" color="primary"></v-icon>
              Use content from your website
            </p>
            <p>
              <v-icon icon="mdi-check" color="primary"></v-icon>
              Add custom sales materials
            </p>
            <p>
              <v-icon icon="mdi-check" color="primary"></v-icon>
              Connect with existing tools and CRMs
            </p>
            <p>
              <v-icon icon="mdi-check" color="primary"></v-icon>
              24/7 Availability
            </p>
            <p>
              <v-icon icon="mdi-check" color="primary"></v-icon>
              Remembers user preferences to provide personalized responses
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-chip
            variant="outlined"
            color="secondary"
            class="mr-4 mb-4"
            size="x-large"
            >Instant Setup</v-chip
          >
          <v-chip
            variant="outlined"
            color="secondary"
            class="mr-4 mb-4"
            size="x-large"
            >No complexity</v-chip
          >
          <v-chip
            variant="outlined"
            color="secondary"
            class="mr-4 mb-4"
            size="x-large"
            >No coding required</v-chip
          >
          <v-chip
            variant="outlined"
            color="secondary"
            class="mr-4 mb-4"
            size="x-large"
            >Minimal ongoing maintenance</v-chip
          >
          <v-chip
            variant="outlined"
            color="secondary"
            class="mr-4 mb-4"
            size="x-large"
            >Fixed monthly cost</v-chip
          >
          <v-chip
            variant="outlined"
            color="secondary"
            class="mr-4 mb-4"
            size="x-large"
            >Easy to use reporting</v-chip
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const industries = [
  "HVAC Companies",
  "Plumbing Services",
  "Pest Control",
  "Roofing Contractors",
  "Solar Installers",
  "Home Services",
];

const currentIndustry = ref(industries[0]);
let intervalId = null;

onMounted(() => {
  let index = 0;
  intervalId = setInterval(() => {
    index = (index + 1) % industries.length;
    currentIndustry.value = industries[index];
  }, 3000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped lang="scss">
.stats-section {
  padding: calc($section-spacing * 1.5) 0;
  background: #f4f4ee;
  position: relative;
}

.highlight {
  color: #ff4d00;
}

.get-started-btn {
  font-weight: 600 !important;
  padding: 0 2rem !important;
  height: 56px !important;
  letter-spacing: 1px !important;
}

.gx-16 {
  margin: 0 -2rem;

  > [class*="col-"] {
    padding: 0 2rem;
  }
}

.content-col {
  padding-left: 4rem;

  @media (max-width: $tablet-breakpoint) {
    padding-left: 2rem;
    margin-top: 2rem;
  }
}

.cycling-text {
  display: inline-block;
  color: #ff4d00;
  transition: opacity 0.3s ease;
}

.highlight-text {
  color: #ff4d00;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  text-decoration-color: currentColor;
}

.text-accent {
  color: #6366f1;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
}
</style>
