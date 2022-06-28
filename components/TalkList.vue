<template>
  <ul>
    <li v-for="talk in talks">
      <MiniTalk :talk="talk" />
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ talks: any[] }>();
</script>

<style lang="scss" scoped>
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul {
  columns: 2;
  column-gap: var(--list-column-gap, 6em);
}

li {
  display: inline-block;
  font-size: var(--list-font-size, 2rem);
  margin-bottom: var(--list-margin, 4em);
  width: 100%;
}
</style>
