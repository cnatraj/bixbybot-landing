<template>
  <section id="features" class="features-section">
    <v-container>
      <v-row justify="center" class="mb-16">
        <v-col cols="12" md="8" class="text-center">
          <div class="d-flex justify-center mb-6">
            <v-chip
              class="section-chip"
              color="accent"
              variant="outlined"
              size="large"
            >
              <v-icon start size="18">mdi-currency-usd</v-icon>The Hidden Costs of Bad Leads
            </v-chip>
          </div>
          <h2 class="text-h2 font-weight-bold">
            Stop losing appointments to these common problems
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          sm="6"
          md="4"
        >
          <feature-card v-bind="feature" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import FeatureCard from './FeatureCard.vue'

const features = ref([
  {
    icon: 'mdi-account-alert',
    iconBg: '#FEF3C7',
    title: 'Missed Booking Opportunities',
    description: 'Wasting valuable time and resources on unqualified leads that go nowhere.'
  },
  {
    icon: 'mdi-currency-usd-off',
    iconBg: '#DCFCE7',
    title: 'High Cost Per Booking',
    description: 'Increasing lead costs with inconsistent ROI affecting your bottom line.'
  },
  {
    icon: 'mdi-clock-alert',
    iconBg: '#E0E7FF',
    title: 'After-Hours Booking Loss',
    description: 'Slow responses drive customers straight to your competitors.'
  },
  {
    icon: 'mdi-calendar-alert',
    iconBg: '#FEE2E2',
    title: 'Manual Scheduling Headaches',
    description: 'Manual booking processes leading to inefficiencies and lost time.'
  },
  {
    icon: 'mdi-account-group-outline',
    iconBg: '#DBEAFE',
    title: 'Limited Direct Bookings',
    description: 'Consent-driven leads will be the standard in 2025 - are you ready?'
  },
  {
    icon: 'mdi-cancel',
    iconBg: '#FCE7F3',
    title: 'Delayed Booking Confirmations',
    description: 'Every lead gets an immediate response, improving engagement and trust.'
  }
])
</script>

<style scoped lang="scss">
.features-section {
  padding: calc($section-spacing * 1.5) 0;
  background: white;
}

.text-h2 {
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.2;
}

.section-chip {
  font-size: 0.875rem;
  font-weight: 500;
  height: 32px;
  
  :deep(.v-chip__content) {
    line-height: 1;
  }
}
</style>