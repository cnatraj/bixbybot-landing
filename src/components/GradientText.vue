<template>
  <span class="gradient-text">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
.gradient-text {
  background: $primary-gradient;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}
</style>