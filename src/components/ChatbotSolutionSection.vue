<template>
  <section class="chatbot-solution-section">
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
              <v-icon start size="18">mdi-robot</v-icon>
              AI Powered Features
            </v-chip>
          </div>
          <h2 class="text-h2 font-weight-bold mb-4">
            Bixbybot delivers more appointments by
          </h2>
        </v-col>
      </v-row>

      <v-row align="center" class="gx-16">
        <v-col cols="12" md="6">
          <div class="features-list">
            <div class="feature-item" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon" :class="{ 'purple': activeFeatureIndex === index }">
                <v-icon size="24">{{ feature.icon }}</v-icon>
              </div>
              <div class="feature-content">
                <h3 class="text-h5 font-weight-bold mb-2">{{ feature.title }}</h3>
                <p class="text-body-1 text-medium-emphasis">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-none d-md-flex">
          <chat-conversation :conversation="demoConversation" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ChatConversation from './ChatConversation.vue'

const activeFeatureIndex = ref(0)
let intervalId = null

onMounted(() => {
  let cycleCount = 0
  intervalId = setInterval(() => {
    if (cycleCount < features.length - 1) {
      activeFeatureIndex.value = (activeFeatureIndex.value + 1) % features.length
      cycleCount++
    } else {
      clearInterval(intervalId)
    }
  }, 5000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const features = [
  {
    icon: 'mdi-cash-lock',
    title: 'Predictable monthly costs',
    description: 'Fixed monthly pricing - No more paying per lead.'
  },
  {
    icon: 'mdi-filter-check',
    title: 'Smart Lead Filtering',
    description: 'Instantly qualify leads to focus on the best prospects.'
  },
  {
    icon: 'mdi-clock-outline',
    title: '24/7 Booking',
    description: 'Customers can schedule appointments anytime.'
  },
  {
    icon: 'mdi-message-badge',
    title: 'Automated Follow-Ups',
    description: 'Keep prospects engaged and boost conversions.'
  },
  {
    icon: 'mdi-star',
    title: 'Post-Service Reviews',
    description: 'Encourage feedback and referrals.'
  }
]

const demoConversation = [
  { 
    type: 'bot', 
    text: 'Hi John, thanks for choosing EverFlow Heating & Air! How was your service today?'
  },
  { 
    type: 'user', 
    text: 'It was great! The technician arrived on time and fixed my AC quickly.'
  },
  { 
    type: 'bot', 
    text: 'Awesome! We\'d love your feedback. Could you leave us a quick ⭐⭐⭐⭐⭐ review? It helps us serve more customers like you!',
    quickReplies: ['Leave a Review']
  },
  { 
    type: 'user', 
    text: 'Sure! I\'ll leave a review now. Thanks again!'
  },
  { 
    type: 'bot', 
    text: 'Thank you! Your feedback means a lot. Let us know if you ever need assistance again!'
  }
]
</script>

<style scoped lang="scss">
.chatbot-solution-section {
  padding: calc($section-spacing * 1.5) 0;
  background: white;
}

.text-h2 {
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.3;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.feature-item {
  display: flex;
  gap: 1.5rem;
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F9FAFB;
  border-left: 4px solid #E5E7EB;
  transition: all 0.3s ease;
  color: #6B7280;

  &.purple {
    color: #8B5CF6;
    border-left: 4px solid #8B5CF6;
  }
}

.feature-content {
  flex: 1;
}

.section-chip {
  font-size: 0.875rem;
  font-weight: 500;
  height: 32px;
  
  :deep(.v-chip__content) {
    line-height: 1;
  }
}

.gx-16 {
  margin: 0 -2rem;
  
  > [class*="col-"] {
    padding: 0 2rem;
  }
}
</style>