<template>
  <section class="services-section">
    <v-container>
      <v-row justify="center" class="mb-8">
        <v-col cols="12" md="10" class="text-center">
          <div class="d-flex justify-center mb-6">
            <v-chip
              class="section-chip"
              color="accent"
              variant="outlined"
              size="large"
            >
              <v-icon start size="18">mdi-tools</v-icon>
              Industries Served
            </v-chip>
          </div>
          <h2 class="text-h2 font-weight-bold">
            Automated scheduling for these home services
          </h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="service in services" :key="service.title" cols="12" md="4">
          <div class="service-card">
            <v-img
              :src="service.providerImage"
              cover
              height="100%"
              class="service-image"
            />
            <div class="service-content">
              <div class="service-icon" :class="service.iconClass">
                
              </div>
              <div class="service-text d-flex">
                <div class="service-icon pt-1 mr-2">
                  <v-icon size="24" color="white">{{ service.icon }}</v-icon>
                </div>
                <div>
                <h3 class="text-h5 font-weight-bold mb-2">{{ service.title }}</h3>
                <p class="text-body-1">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const hvacImage = new URL('../assets/images/havc.png', import.meta.url).href
const pestControlImage = new URL('../assets/images/pestControl.png', import.meta.url).href
const plumberImage = new URL('../assets/images/plumber.jpeg', import.meta.url).href
const contractorsImage = new URL('../assets/images/contractor.png', import.meta.url).href
const roofingImage = new URL('../assets/images/roofing.png', import.meta.url).href
const solarImage = new URL('../assets/images/solar.png', import.meta.url).href

const services = [
  {
    icon: 'mdi-air-conditioner',
    iconClass: 'blue',
    title: 'HVAC',
    description: 'Available 24/7 when the AC fails.',
    providerImage: hvacImage
  },
  {
    icon: 'mdi-bug',
    iconClass: 'red',
    title: 'Pest Control',
    description: 'Stay ready 24/7 when pests invade.',
    providerImage: pestControlImage
  },
  {
    icon: 'mdi-water',
    iconClass: 'blue',
    title: 'Plumbing',
    description: 'Give customers peace of mind when a pipe bursts.',
    providerImage: plumberImage
  },
  {
    icon: 'mdi-hammer',
    iconClass: 'orange',
    title: 'Contractors',
    description: 'Access info on-site or in-office.',
    providerImage: contractorsImage
  },
  {
    icon: 'mdi-home',
    iconClass: 'green',
    title: 'Roofing',
    description: 'Grow your service business with professionals.',
    providerImage: roofingImage
  },
  {
    icon: 'mdi-solar-power',
    iconClass: 'yellow',
    title: 'Solar',
    description: 'Help customers switch to clean energy solutions.',
    providerImage: solarImage
  }
]
</script>

<style scoped lang="scss">
.services-section {
  padding: $section-spacing 0;
  background: #F4F4EE;
}

.text-h2 {
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(135deg, #FF4D4D 0%, #FF69B4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline;
}

.section-chip {
  font-size: 0.875rem;
  font-weight: 500;
  height: 32px;
  
  :deep(.v-chip__content) {
    line-height: 1;
  }
}

.service-card {
  height: 400px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
}

.service-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
    pointer-events: none;
  }
}

.service-content {
  position: relative;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
}

.service-icon {
}

.service-text {
  color: white;

  h3 {
    color: white !important;
  }

  p {
    opacity: 0.9;
  }
}
</style>