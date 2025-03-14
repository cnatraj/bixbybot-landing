<template>
  <section class="how-it-works-section">
    <v-container>
      <v-row justify="center" class="mb-16">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h2 font-weight-bold mb-4">How it works</h2>
          <p class="text-h5 text-secondary">Simple steps to transform your financial management</p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col v-for="(step, index) in steps" :key="index" cols="12" md="4">
          <div class="step-card">
            <div class="step-number mb-6">{{ index + 1 }}</div>
            <h3 class="text-h4 font-weight-bold mb-4">{{ step.title }}</h3>
            <p class="text-body-1 text-secondary">{{ step.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Connect Your Accounts',
    description: 'Securely link your financial accounts in minutes for a complete view of your finances.'
  },
  {
    title: 'Set Your Goals',
    description: 'Define your financial objectives and create personalized plans to achieve them.'
  },
  {
    title: 'Track Progress',
    description: 'Monitor your progress in real-time and receive insights to optimize your financial strategy.'
  }
]
</script>

<style scoped lang="scss">
.how-it-works-section {
  padding: $section-spacing 0;
  background: white;
}

.step-number {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: $primary-gradient;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}

.step-card {
  padding: $component-spacing;
  height: 100%;
}
</style>