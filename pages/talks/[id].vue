<template>
  <Talk :talk="talk" />
</template>

<script setup lang="ts">
const { findById } = useTalks();
const route = useRoute();
const talk = ref();

if (route.params.id) {
  talk.value = findById(parseInt(route.params.id as string));
}
</script>
