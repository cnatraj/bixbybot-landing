<template>
  <section class="testimonials-section">
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
              <v-icon start size="18">mdi-heart</v-icon>
              Testimonials
            </v-chip>
          </div>
          <h2 class="text-h2 font-weight-bold mb-4">What our clients say</h2>
          <p class="text-h5 text-secondary">Trusted by thousands of satisfied customers worldwide</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(testimonial, index) in testimonials" :key="index" cols="12" md="4">
          <v-card class="testimonial-card" flat>
            <v-card-item>
              <div class="mb-4">
                <v-rating
                  :model-value="5"
                  color="primary"
                  density="compact"
                  readonly
                ></v-rating>
              </div>
              <p class="text-body-1 mb-6">"{{ testimonial.quote }}"</p>
              <div class="d-flex align-center">
                <v-avatar class="mr-4" color="surface-variant">
                  <v-img :src="testimonial.avatar" />
                </v-avatar>
                <div>
                  <p class="font-weight-medium mb-1">{{ testimonial.name }}</p>
                  <p class="text-secondary text-caption">{{ testimonial.position }}</p>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "Findays has completely transformed how we manage our finances. The insights are invaluable.",
    name: "Sarah Johnson",
    position: "CEO at TechCorp",
    avatar: "https://placehold.co/100x100"
  },
  {
    quote: "The best financial management platform we've used. Simple yet powerful.",
    name: "Michael Chen",
    position: "Founder at StartupX",
    avatar: "https://placehold.co/100x100"
  },
  {
    quote: "Outstanding platform that has helped us scale our financial operations efficiently.",
    name: "Emma Davis",
    position: "CFO at GrowthCo",
    avatar: "https://placehold.co/100x100"
  }
]
</script>

<style scoped lang="scss">
.testimonials-section {
  padding: $section-spacing 0;
  background: white;
}

.testimonial-card {
  height: 100%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
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