<template>
  <section class="contact-section">
    <v-container>
      <v-row align="center">
        <v-col class="text-center">
          <h2 class="text-h2 font-weight-bold mb-4">
            Join the launch for free!
          </h2>

          <p class="text-body-1 text-medium-emphasis mb-4">
            BixbyBot launches to the public on April 14th. As part of our
            launch, we are offering BixbyBot for free for the first 50 users.
          </p>
        </v-col>
      </v-row>
      <div class="contact-form">
        <v-form @submit.prevent="handleSubmit">
          <v-row>
            <v-col cols="12" md="6">
              <div>
                <label class="form-label">Full Name *</label>
                <v-text-field
                  v-model="formData.fullName"
                  variant="outlined"
                  placeholder="Your full name"
                  :error-messages="errors.fullName"
                  class="form-input"
                ></v-text-field>
              </div>

              <div>
                <label class="form-label">Email Address *</label>
                <v-text-field
                  v-model="formData.email"
                  variant="outlined"
                  placeholder="email@mail.com"
                  :error-messages="errors.email"
                  class="form-input"
                ></v-text-field>
              </div>

              <div>
                <label class="form-label">Phone Number *</label>
                <v-text-field
                  v-model="formData.phone"
                  variant="outlined"
                  placeholder="(555) 555-5555"
                  :error-messages="errors.phone"
                  class="form-input"
                  @input="formatPhoneNumber"
                  maxlength="14"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div>
                <label class="form-label">Business Name *</label>
                <v-text-field
                  v-model="formData.businessName"
                  variant="outlined"
                  placeholder="Your business name"
                  :error-messages="errors.businessName"
                  class="form-input"
                ></v-text-field>
              </div>

              <div>
                <label class="form-label">Type of Industry *</label>
                <v-select
                  v-model="formData.industry"
                  :items="industries"
                  variant="outlined"
                  placeholder="Select your industry"
                  :error-messages="errors.industry"
                  class="form-input"
                ></v-select>
              </div>

              <div>
                <label class="form-label">Business Website</label>
                <v-text-field
                  v-model="formData.website"
                  variant="outlined"
                  placeholder="www.example.com"
                  :error-messages="errors.website"
                  class="form-input"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                type="submit"
                color="black"
                size="x-large"
                rounded="pill"
                class="send-message-btn"
                :loading="loading"
                :disabled="loading"
              >
                {{ loading ? "Submitting..." : "Reserve my spot" }}
              </v-btn>

              <v-alert
                v-if="submitStatus.message"
                :type="submitStatus.type"
                class="mt-4"
                variant="tonal"
              >
                {{ submitStatus.message }}
              </v-alert>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const industries = [
  "HVAC",
  "Plumbing",
  "Pest Control",
  "Roofing",
  "Solar Installation",
  "General Contracting",
  "Other",
];

const formData = reactive({
  fullName: "",
  email: "",
  phone: "",
  businessName: "",
  industry: "",
  website: "",
});

const errors = reactive({
  fullName: "",
  email: "",
  phone: "",
  businessName: "",
  industry: "",
  website: "",
});

const loading = ref(false);
const submitStatus = reactive({
  message: "",
  type: "success",
});

const formatPhoneNumber = () => {
  // Remove all non-numeric characters
  let phoneNumber = formData.phone.replace(/\D/g, "");

  // Format the number as (XXX) XXX-XXXX
  if (phoneNumber.length >= 3) {
    phoneNumber = `(${phoneNumber.slice(0, 3)})${
      phoneNumber.length > 3 ? " " : ""
    }${phoneNumber.slice(3)}`;
  }
  if (phoneNumber.length >= 9) {
    phoneNumber = `${phoneNumber.slice(0, 9)}-${phoneNumber.slice(9)}`;
  }

  // Update the form data
  formData.phone = phoneNumber;
};

const validateForm = () => {
  let isValid = true;
  errors.fullName = "";
  errors.email = "";
  errors.phone = "";
  errors.businessName = "";
  errors.industry = "";
  errors.website = "";

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
    isValid = false;
  } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
    errors.phone = "Please enter a valid phone number: (555) 555-5555";
    isValid = false;
  }

  if (!formData.businessName.trim()) {
    errors.businessName = "Business name is required";
    isValid = false;
  }

  if (!formData.industry) {
    errors.industry = "Industry is required";
    isValid = false;
  }

  if (
    formData.website.trim() &&
    !/^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/.test(
      formData.website.replace(/^(https?:\/\/)?(www\.)?/, "")
    )
  ) {
    errors.website = "Please enter a valid website domain";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  loading.value = true;
  submitStatus.message = "";

  try {
    if (!db) {
      throw new Error("Firebase not initialized");
    }

    await addDoc(collection(db, "waitlist"), {
      ...formData,
      createdAt: serverTimestamp(),
    });

    submitStatus.type = "success";
    submitStatus.message =
      "Thank you for joining our waitlist! We'll be in touch soon.";

    // Reset form
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    submitStatus.type = "error";
    submitStatus.message = "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.contact-section {
  padding: calc($section-spacing * 2) 0;
  background: white;
}

.text-h2 {
  line-height: 1.2;
}

.contact-form {
  background: #f9fafb;
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
