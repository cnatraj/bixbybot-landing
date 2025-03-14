<template>
  <v-footer class="footer">
    <v-container>
      <v-row class="mb-12">
        <v-col cols="12" md="4" class="mb-8 mb-md-0">
          <div class="d-flex align-center mb-4">
            <v-icon color="primary" size="32" class="mr-2">mdi-circle-multiple</v-icon>
            <span class="text-h6 font-weight-bold text-primary">FINDAYS</span>
          </div>
          <p class="text-secondary mb-4">
            Transform your financial future with our innovative platform
          </p>
          <div class="social-links">
            <v-btn v-for="icon in socialIcons" :key="icon" icon class="mr-2">
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col v-for="(section, index) in footerSections" :key="index" cols="6" md="2">
          <h3 class="text-h6 font-weight-bold mb-4">{{ section.title }}</h3>
          <v-list density="compact" class="footer-links">
            <v-list-item
              v-for="(link, linkIndex) in section.links"
              :key="linkIndex"
              :to="link.href"
              class="px-0"
            >
              {{ link.text }}
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-divider class="mb-8"></v-divider>

      <div class="d-flex flex-column flex-md-row justify-space-between align-center">
        <p class="text-secondary text-center text-md-left mb-4 mb-md-0">
          © {{ new Date().getFullYear() }} Findays. All rights reserved.
        </p>
        <div class="d-flex">
          <v-btn variant="text" class="text-secondary mr-4">Privacy Policy</v-btn>
          <v-btn variant="text" class="text-secondary">Terms of Service</v-btn>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
const socialIcons = [
  'mdi-twitter',
  'mdi-facebook',
  'mdi-linkedin',
  'mdi-instagram'
]

const footerSections = [
  {
    title: 'Product',
    links: [
      { text: 'Features', href: '#features' },
      { text: 'Pricing', href: '#pricing' },
      { text: 'Security', href: '/security' },
      { text: 'Updates', href: '/updates' }
    ]
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Blog', href: '/blog' },
      { text: 'Careers', href: '/careers' },
      { text: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { text: 'Documentation', href: '/docs' },
      { text: 'Help Center', href: '/help' },
      { text: 'Guides', href: '/guides' },
      { text: 'API', href: '/api' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy', href: '/privacy' },
      { text: 'Terms', href: '/terms' },
      { text: 'Security', href: '/security' },
      { text: 'Status', href: '/status' }
    ]
  }
]
</script>

<style scoped lang="scss">
.footer {
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: $section-spacing 0;
}

.footer-links {
  background: transparent;

  :deep(.v-list-item) {
    min-height: 32px;
    color: $text-secondary;
    
    &:hover {
      color: $text-primary;
    }
  }
}

.social-links {
  .v-btn {
    color: $text-secondary;
    
    &:hover {
      color: $text-primary;
    }
  }
}
</style>