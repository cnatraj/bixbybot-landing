<template>
  <section class="waitlist-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="text-h1 font-weight-bold mb-6">
            Join the BixbyBot Launch
          </h1>
          <p class="text-h4 text-medium-emphasis">
            10x your website visitors into booked appointments with our AI
            Chatbot.
          </p>
        </v-col>
      </v-row>

      <v-row justify="center" class="mb-4">
        <v-col cols="12" md="6">
          <div class="d-flex font-weight-bold text-medium-emphasis">
            <p class="mr-3">🚀 Free for first 50 signups</p>
            <p class="">💳 No credit card required</p>
            <p class="">📅 Early access on April 14th</p>
          </div>
        </v-col>
      </v-row>
      <contact-section />
      <trusted-by-section />
    </v-container>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

import ContactSection from "@/components/ContactSection.vue";
import TrustedBySection from "@/components/TrustedBySection.vue";
</script>

<style scoped lang="scss">
.waitlist-section {
  padding: calc($section-spacing * 2) 0;
  background: $purple-light;
}

.waitlist-form {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.form-label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: $text-primary;
}

:deep(.form-input) {
  .v-field {
    border-radius: 12px !important;

    &__outline {
      --v-field-border-opacity: 0.1 !important;
    }
  }

  .v-field__input {
    padding: 8px 16px !important;
  }
}

.submit-btn {
  font-weight: 600 !important;
  background: $primary-gradient !important;
}

.text-medium-emphasis {
  color: $text-secondary !important;
}

.avatars-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.avatar-overlap {
  margin-left: -8px;
  border: 2px solid white;

  &:first-child {
    margin-left: 0;
  }
}

@media (max-width: $tablet-breakpoint) {
  .waitlist-section {
    padding: $section-spacing 0;
  }
}
</style>
