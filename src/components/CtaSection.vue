<template>
  <section class="cta-section">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="7">
          <div class="d-flex mb-6">
            <v-chip
              class="section-chip"
              color="accent"
              variant="outlined"
              size="large"
            >
              <v-icon start size="18">mdi-flag</v-icon>
              Get Started
            </v-chip>
          </div>
          <h2 class="text-h2 font-weight-bold mb-4">
            Grow your home services business with BixbyBot
          </h2>
          <p class="text-h5 text-secondary mb-8">
            Unlock the full potential of AI with our innovative solutions.
            Experience the future of customer engagement and operational
            efficiency today
          </p>
          <div class="d-flex gap-4">
            <v-btn
              color="#7C3AED"
              size="x-large"
              rounded="pill"
              class="get-started-btn"
              to="/waitlist"
            >
              Reserve My Spot
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="5" class="position-relative">
          <div class="chat-bubbles">
            <div class="chat-bubble">No credit card required</div>
          </div>
          <v-img
            :src="businessOwner"
            class="cta-image"
            alt="Business professional with tablet"
            height="500"
            cover
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const businessOwner = new URL("../assets/images/happy.webp", import.meta.url)
  .href;
</script>
<style scoped lang="scss">
.cta-section {
  padding: calc($section-spacing * 2) 0;
  background: #fdf4ff;
  position: relative;
  overflow: hidden;
}

.text-h2 {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  line-height: 1.2;
}

.text-h5 {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 600px;
}

.get-started-btn {
  font-weight: 600 !important;
  padding: 0 2rem !important;
  height: 56px !important;
}

.explore-btn {
  font-weight: 600 !important;
  padding: 0 2rem !important;
  height: 56px !important;
  border: 2px solid rgba(124, 58, 237, 0.1) !important;
  color: #7c3aed !important;
}

.cta-image {
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(124, 58, 237, 0.1);
}

.chat-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.chat-bubble {
  position: absolute;
  background: white;
  padding: 0.75rem 1.5rem;
  border-radius: 100px;
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &:first-child {
    top: 10%;
    right: 10%;
  }

  &:last-child {
    top: 40%;
    right: 5%;
  }
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
  .cta-section {
    padding: $section-spacing 0;
  }

  .chat-bubbles {
    display: none;
  }
}
</style>
