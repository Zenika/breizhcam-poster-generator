<template>
  <Layout>
    <h1 class="desc"><Megaphone />Programme du {{ route.params.slug }}</h1>
    <TalkList :talks="filtered" />
  </Layout>
</template>

<script setup lang="ts">
import { Megaphone } from "lucide-vue-next";
const { talks } = useTalks();
const route = useRoute();

const filtered = computed(() =>
  talks.value.filter((talk) =>
    talk.day.toLowerCase().includes(route.params.slug as string)
  )
);
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4rem;
  margin: 2em 0;
}

.desc {
  display: flex;
  align-items: center;

  svg {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    color: var(--primary-color);
  }
}
</style>
