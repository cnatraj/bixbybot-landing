<template>
  <section class="integrations-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <div class="d-flex justify-center mb-6">
            <v-chip
              class="section-chip"
              color="accent"
              variant="outlined"
              size="large"
            >
              <v-icon start size="18">mdi-connection</v-icon>
              Integrations
            </v-chip>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="logos-grid">
            <div v-for="(logo, index) in logos" :key="index" class="logo-wrapper">
              <v-img
                :src="logo.src"
                :alt="logo.name"
                class="integration-logo"
                :class="logo.class"
                contain
                height="100"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const logos = [
  {
    name: 'ServiceTitan',
    src: new URL('../assets/images/logos/serviceTitan.jpg', import.meta.url).href,
    class: 'service-titan'
  },
  {
    name: 'HubSpot',
    src: new URL('../assets/images/logos/HubSpot-Logo-700x394.png', import.meta.url).href,
    class: 'hubspot'
  },
  {
    name: 'Salesforce',
    src: new URL('../assets/images/logos/salesforce.png', import.meta.url).href,
    class: 'salesforce'
  },
  {
    name: 'Zapier',
    src: new URL('../assets/images/logos/zapier.png', import.meta.url).href,
    class: 'zapier'
  },
  {
    name: 'WordPress',
    src: new URL('../assets/images/logos/wordpress.png', import.meta.url).href,
    class: 'wordpress'
  },
  {
    name: 'HouseCall Pro',
    src: new URL('../assets/images/logos/housecallPro.png', import.meta.url).href,
    class: 'housecall-pro'
  }
]
</script>

<style scoped lang="scss">
.integrations-section {
  padding: $section-spacing 0;
  background: #FFF2D6;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-items: center;
}

.logo-wrapper {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.integration-logo {
  max-width: 180px;
}

@media (max-width: $tablet-breakpoint) {
  .logos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>