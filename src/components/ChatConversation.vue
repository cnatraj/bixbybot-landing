<template>
  <div class="chat-preview">
    <div class="chat-header">
      <div>
        <div class="text-subtitle-1 font-weight-medium">Everflow Heating and Air</div>
        <div class="font-weight-bold highlight">DEMO CONVERSATION</div>
      </div>
    </div>
    
    <div class="chat-window" ref="chatWindow">
      <div 
        v-for="(message, index) in visibleMessages" 
        :key="index"
        class="chat-message"
        :class="message.type"
      >
        <v-avatar v-if="message.type === 'bot'" size="32" color="#F3F4F6" class="mr-3">
          <v-icon size="24" color="primary">mdi-robot</v-icon>
        </v-avatar>
        <div class="message-content">
          {{ message.text }}
          <div v-if="message.quickReplies && message.quickReplies.length > 0" class="quick-replies">
            <v-chip
              v-for="(reply, replyIndex) in message.quickReplies"
              :key="replyIndex"
              class="quick-reply-chip"
              color="primary"
              variant="outlined"
              @click="handleQuickReply(reply)"
            >
              {{ reply }}
            </v-chip>
          </div>
        </div>
      </div>
      
      <div v-if="isTyping" class="chat-message bot">
        <v-avatar size="32" color="#F3F4F6" class="mr-3">
          <v-icon size="24" color="primary">mdi-robot</v-icon>
        </v-avatar>
        <div class="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div v-if="isUserTyping" class="chat-message user">
        <div class="typing-indicator user">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  conversation: {
    type: Array,
    required: true,
    default: () => []
  }
})

const chatWindow = ref(null)
const isTyping = ref(false)
const isUserTyping = ref(false)
const visibleMessages = ref([])

const scrollToBottom = async () => {
  await nextTick()
  if (chatWindow.value) {
    chatWindow.value.scrollTop = chatWindow.value.scrollHeight
  }
}

const addMessage = async (message) => {
  visibleMessages.value.push(message)
  await scrollToBottom()
}

const simulateTyping = async () => {
  isTyping.value = true
  await scrollToBottom()
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000))
  isTyping.value = false
}

const startUserTyping = () => {
  isUserTyping.value = true
}

const stopUserTyping = () => {
  isUserTyping.value = false
}

const handleQuickReply = async (reply) => {
  await addMessage({
    type: 'user',
    text: reply
  })
  
  await simulateTyping()
  await addMessage({
    type: 'bot',
    text: 'Thank you for your response! I\'ll help you with that right away.'
  })
}

const playConversation = async () => {
  for (const message of props.conversation) {
    if (message.type === 'bot') {
      await simulateTyping()
    } else {
      isUserTyping.value = true
      await new Promise(resolve => setTimeout(resolve, 1000))
      isUserTyping.value = false
    }
    await addMessage(message)
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

onMounted(() => {
  playConversation()
})
</script>

<style scoped lang="scss">
.chat-preview {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 1.25rem 2.5rem rgba(99, 102, 241, 0.1);
  padding: 0;
  height: 37.5rem;
  max-width: 31.25rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.chat-window {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  height: 100%;
}

.chat-message {
  display: flex;
  align-items: flex-start;
  max-width: 80%;

  &.user {
    margin-left: auto;
    flex-direction: row-reverse;

    .message-content {
      background: $primary-gradient;
      color: white;
    }

    .typing-indicator {
      background: $primary-gradient;
      
      span {
        background: white;
      }
    }
  }
}

.message-content {
  background: #F3F4F6;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 0.9rem;
}

.quick-replies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.quick-reply-chip {
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  
  &:hover {
    background: $primary-gradient;
    color: white;
    border-color: transparent;
  }
}

.typing-indicator {
  background: #F3F4F6;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  gap: 0.25rem;
  min-width: 3.75rem;
  
  span {
    width: 0.5rem;
    height: 0.5rem;
    background: #9CA3AF;
    border-radius: 50%;
    display: inline-block;
    animation: bounce 1.4s infinite ease-in-out;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
  }
}

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

.highlight {
  background: #FF8E53;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>