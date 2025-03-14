<template>
  <section class="contact-section">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="5">
          <div class="d-flex mb-6">
            <v-chip
              class="section-chip"
              color="accent"
              variant="outlined"
              size="large"
            >
              <v-icon start size="18">mdi-message</v-icon>
              Join the waiting list
            </v-chip>
          </div>
          <h2 class="text-h2 font-weight-bold mb-4">
            Join the waiting list for free!
          </h2>
          <p class="text-body-1 text-medium-emphasis mb-12">
            BixbyBot launches to the public on April 14th. As part of our launch, we are offering BixbyBot for free for the first 50 users. 
          </p>
        </v-col>

        <v-col cols="12" md="7">
          <div class="contact-form">
            <v-form @submit.prevent="handleSubmit">
              <div class="mb-6">
                <label class="form-label">Full Name *</label>
                <v-text-field
                  v-model="formData.fullName"
                  variant="outlined"
                  placeholder="Your full name"
                  :error-messages="errors.fullName"
                  class="form-input"
                ></v-text-field>
              </div>

              <div class="mb-6">
                <label class="form-label">Email Address *</label>
                <v-text-field
                  v-model="formData.email"
                  variant="outlined"
                  placeholder="email@mail.com"
                  :error-messages="errors.email"
                  class="form-input"
                ></v-text-field>
              </div>

              <v-btn
                type="submit"
                color="black"
                size="x-large"
                rounded="pill"
                class="send-message-btn"
                :loading="loading"
                :disabled="loading"
              >
                {{ loading ? 'Submitting...' : 'Reserve my spot' }}
              </v-btn>

              <v-alert
                v-if="submitStatus.message"
                :type="submitStatus.type"
                class="mt-4"
                variant="tonal"
              >
                {{ submitStatus.message }}
              </v-alert>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'

const formData = reactive({
  fullName: '',
  email: ''
})

const errors = reactive({
  fullName: '',
  email: ''
})

const loading = ref(false)
const submitStatus = reactive({
  message: '',
  type: 'success'
})

const validateForm = () => {
  let isValid = true
  errors.fullName = ''
  errors.email = ''

  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required'
    isValid = false
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  loading.value = true
  submitStatus.message = ''

  try {
    if (!db) {
      throw new Error('Firebase not initialized')
    }

    await addDoc(collection(db, 'waitlist'), {
      ...formData,
      createdAt: serverTimestamp()
    })

    submitStatus.type = 'success'
    submitStatus.message = 'Thank you for joining our waitlist! We\'ll be in touch soon.'
    
    // Reset form
    formData.fullName = ''
    formData.email = ''
  } catch (error) {
    console.error('Error submitting form:', error)
    submitStatus.type = 'error'
    submitStatus.message = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
.contact-section {
  padding: calc($section-spacing * 2) 0;
  background: white;
}

.text-h2 {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  line-height: 1.2;
}

.contact-form {
  background: #F9FAFB;
  padding: 2rem;
  border-radius: 24px;
}

.form-label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: $text-primary;
}

:deep(.form-input) {
  .v-field {
    background: white !important;
    border-radius: 12px !important;
    
    &__outline {
      --v-field-border-opacity: 0.1 !important;
    }
  }

  .v-field__input {
    padding: 8px 16px !important;
  }
}

.send-message-btn {
  width: 100%;
  margin-top: 1rem;
  font-weight: 600 !important;
}

.text-medium-emphasis {
  color: $text-secondary !important;
}

.section-chip {
  font-size: 0.875rem;
  font-weight: 500;
  height: 32px;
  
  :deep(.v-chip__content) {
    line-height: 1;
  }
}

@media (max-width: $tablet-breakpoint) {
  .contact-section {
    padding: $section-spacing 0;
  }
}
</style>