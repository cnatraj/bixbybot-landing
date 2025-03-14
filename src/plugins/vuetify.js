import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const lightTheme = {
  dark: false,
  colors: {
    primary: '#6366F1',
    secondary: '#475569',
    accent: '#8B5CF6',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-variant': '#FFFFFF',
    'on-surface-variant': 'rgb(17, 19, 24)',
    'on-surface': 'rgb(17, 19, 24)',
    'on-background': 'rgb(17, 19, 24)',
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    }
  },
  defaults: {
    global: {
      font: {
        family: 'Urbanist'
      }
    },
    VBtn: {
      fontFamily: 'Urbanist'
    },
    VTextField: {
      fontFamily: 'Urbanist'
    }
  }
})