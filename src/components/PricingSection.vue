<template>
  <section id="pricing" class="pricing-section">
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
              <v-icon start size="18">mdi-wallet</v-icon>
              Pricing
            </v-chip>
          </div>
          <h2 class="text-h2 font-weight-bold mb-4">Simple, transparent pricing</h2>
          <p class="text-h5 text-secondary">Choose the plan that works best for you</p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col v-for="(plan, index) in plans" :key="index" cols="12" md="4">
          <v-card class="pricing-card" :class="{ 'popular': plan.popular }" flat>
            <v-card-item>
              <div class="mb-6">
                <h3 class="text-h4 font-weight-bold mb-2">{{ plan.name }}</h3>
                <p class="text-secondary">{{ plan.description }}</p>
              </div>
              
              <div class="mb-6">
                <span class="text-h3 font-weight-bold">${{ plan.price }}</span>
                <span class="text-secondary">/month</span>
              </div>

              <v-btn
                block
                :color="plan.popular ? 'primary' : 'black'"
                size="x-large"
                class="mb-6"
                rounded="pill"
              >
                Get Started
              </v-btn>

              <v-list class="feature-list">
                <v-list-item
                  v-for="(feature, fIndex) in plan.features"
                  :key="fIndex"
                  class="px-0"
                >
                  <template v-slot:prepend>
                    <v-icon color="primary" class="mr-2">mdi-check-circle</v-icon>
                  </template>
                  {{ feature }}
                </v-list-item>
              </v-list>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals',
    price: '0',
    features: [
      'Basic financial tracking',
      'Up to 2 accounts',
      'Monthly reports',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    description: 'Best for growing businesses',
    price: '49',
    popular: true,
    features: [
      'Advanced financial tracking',
      'Unlimited accounts',
      'Real-time analytics',
      'Priority support',
      'Team collaboration'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: '99',
    features: [
      'Custom solutions',
      'Dedicated account manager',
      'API access',
      'Advanced security',
      'Custom integrations'
    ]
  }
]
</script>

<style scoped lang="scss">
.pricing-section {
  padding: $section-spacing 0;
  background: white;
}

.pricing-card {
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &.popular {
    border: 2px solid var(--v-primary-base);
    transform: scale(1.05);
  }
}

.feature-list {
  background: transparent;
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