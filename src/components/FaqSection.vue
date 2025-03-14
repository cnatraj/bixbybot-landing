<template>
  <section class="faq-section">
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
              <v-icon start size="18">mdi-help-circle</v-icon>
              FAQ
            </v-chip>
          </div>
          <h2 class="text-h2 font-weight-bold mb-4">Frequently asked questions</h2>
          <p class="text-h5 text-secondary">Everything you need to know about BixbyBot</p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
              v-for="(item, i) in faqItems"
              :key="i"
              class="mb-4"
            >
              <v-expansion-panel-title class="text-h6">
                {{ item.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-body-1 text-secondary">
                {{ item.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const faqItems = [
  {
    question: 'How does BixbyBot help me book more appointments?',
    answer: 'BixbyBot is an AI-powered scheduling assistant that engages with visitors on your website, providing instant responses to their inquiries. It assists in qualifying leads, scheduling appointments, and ensuring consistent communication, ultimately enhancing customer satisfaction and increasing booking rates.'
  },
  {
    question: "How much does BixbyBot cost?",
    answer: "For a limited time, Bixby Bot is completely free for the first 50 users! After that, we'll offer flexible pricing plans based on your business needs. Get on the waiting list today to lock in your free access."
  },
  {
    question: 'How does BixbyBot handle appointment scheduling?',
    answer: 'BixbyBot seamlessly integrates with your existing scheduling tools, allowing customers to book services directly through the chatbot. This automation reduces manual booking errors and ensures efficient calendar management.'
  },
  {
    question: 'Can BixbyBot integrate with my current CRM system?',
    answer: 'Yes, BixbyBot is designed to sync with various Customer Relationship Management (CRM) systems, ensuring that all customer interactions and data are centralized, providing a comprehensive view of your customer base.'
  },
  {
    question: 'Is BixbyBot capable of following up with customers after service completion?',
    answer: 'Absolutely. BixbyBot can be programmed to send follow-up messages post-service, gathering customer feedback and encouraging reviews or referrals, which can help in building your online reputation.'
  },
  {
    question: 'How does BixbyBot ensure data privacy and security?',
    answer: 'BixbyBot adheres to stringent data protection protocols, ensuring that all customer information is securely stored and managed in compliance with relevant privacy regulations.'
  }
]
</script>

<style scoped lang="scss">
.faq-section {
  padding: $section-spacing 0;
  background: white;
}

:deep(.v-expansion-panel) {
  background: white !important;
  border: 1px solid rgba(0, 0, 0, 0.05) !important;
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