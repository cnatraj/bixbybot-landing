<template>
  <v-card
    class="feature-card rounded-xl"
    flat
  >
    <v-card-item>

      <v-card-title class="text-h5 font-weight-bold mb-4 pa-0 d-flex align-center">
        <div class="feature-icon-wrapper mr-3" :style="{ background: iconBg }">
          <v-icon
            color="black"
            size="24"
            class="feature-icon"
          >
            {{ icon }}
          </v-icon>
        </div>
        <div>
        {{ title }}</div>
      </v-card-title>
      <v-card-text class="text-body-1 text-medium-emphasis pa-0">
        {{ description }}
      </v-card-text>
    </v-card-item>
  </v-card>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  iconBg: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.feature-card {
  padding: $component-spacing;
  height: 100%;
  background: #F9FAFB;
}

.feature-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-medium-emphasis {
  color: $text-secondary !important;
  line-height: 1.6;
}

.text-h5 {
  color: $text-primary;
  font-size: 1.25rem !important;
}

.text-body-1 {
  font-size: 1rem !important;
}
</style>