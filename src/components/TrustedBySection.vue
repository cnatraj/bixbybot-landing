<template>
  <section class="trusted-by-section">
    <v-container>
      <div class="text-center">
        <h2 class="text-h2 font-weight-bold mb-4">
          Trusted by <span class="highlight">hundreds</span> of home<br>
          services businesses
        </h2>
        <p class="text-h5 text-secondary mb-12">
          Results-driven lead conversion platform
        </p>
        
        <div class="avatars-row mb-12">
          <v-avatar
            v-for="(avatar, index) in avatars"
            :key="index"
            size="64"
            class="avatar-overlap"
          >
            <v-img :src="avatar" />
          </v-avatar>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const avatars = [
  'https://i.pravatar.cc/150?u=M96QKEb',
  'https://i.pravatar.cc/150?u=kAnBFpO',
  'https://i.pravatar.cc/150?u=HM7qTnM',
  'https://i.pravatar.cc/150?u=zXJkpSR',
  'https://i.pravatar.cc/150?u=ta3cQob',
  'https://i.pravatar.cc/150?u=2aBAcnK',
  'https://i.pravatar.cc/150?u=IUMYWbe',
  'https://i.pravatar.cc/150?u=ieOpb1G',
  'https://i.pravatar.cc/150?u=I3g2gk7',
  'https://i.pravatar.cc/150?u=2C7BFXa',
  'https://i.pravatar.cc/150?u=2mmSB7r',
  'https://i.pravatar.cc/150?u=81ipGh5'
]
</script>

<style scoped lang="scss">
.trusted-by-section {
  padding: $section-spacing 0;
  background: #FAF9F6;
}

.text-h2 {
  line-height: 1.2;
}

.text-h5 {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.highlight {
  color: #FF4D00;
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

.book-demo-btn {

}
</style>