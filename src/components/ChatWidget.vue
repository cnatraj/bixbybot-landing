<template>
  <chat-conversation :conversation="defaultConversation" />
</template>

<script setup>
import { ref } from 'vue'
import ChatConversation from './ChatConversation.vue'

const defaultConversation = [
  { 
    type: 'bot', 
    text: 'Hello! How can I help you today?',
  },
  { type: 'user', text: 'Hi, I think my AC isn’t cooling properly. Can you help?' },
  { 
    type: 'bot', 
    text: 'Happy to help! Can we start off with your name and email?',
  },
  { type: 'user', text: 'John Smith, john@email.com' },
  { 
    type: 'bot', 
    text: 'Thanks, John! Is your AC blowing warm air, or is it not turning on at all?',
  },
  { type: 'user', text: 'It’s blowing warm air.' },
  { 
    type: 'bot', 
    text: 'Got it! How soon do you need it fixed?',
    quickReplies: ['Urgent - Same Day', 'Couple of days', 'Sometime this week']
  },
  { type: 'user', text: 'Urgent - Same Day' },
  {
    type: 'bot',
    text: 'Thanks for the details! I can schedule a technician for tomorrow between 10 AM - 12 PM. Does that work for you?'
  },
  { type: 'user', text: 'Yes.. thats perfect!' },
  {
    type: 'bot',
    text: 'Great! Your appointment is confirmed. You’ll receive a confirmation email & text shortly.'
  }
]
</script>