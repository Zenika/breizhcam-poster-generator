<template>
  <p class="authors">{{ authors.join(", ") }}</p>
</template>

<script setup lang="ts">
defineProps<{
  authors: string[];
}>();
</script>

<style lang="scss" scoped>
.authors {
  margin: 0;

  &::before {
    content: "";
    width: 2em;
    height: 0.08em;
    margin-right: 0.5em;
    opacity: 0.32;
    background: var(--primary-color);
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
