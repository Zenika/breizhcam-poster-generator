<template>
  <Layout>
    <header>
      <p class="desc"><Calendar />{{ talk.day }} à {{ talk.start }}</p>
      <p class="desc"><Clock2 />{{ duration }}</p>
      <p class="desc"><MapPin />{{ talk.room }}</p>
    </header>
    <h1 :class="{ 'is-long': isLongTitle }">{{ talk.name }}</h1>
    <Authors :authors="talk.authors"></Authors>
  </Layout>
</template>

<script setup lang="ts">
import { Calendar, Clock2, MapPin } from "lucide-vue-next";

const props = defineProps(["talk"]);

const { humanDuration } = useTalks();

const duration = computed(() => humanDuration(props.talk.duration));

const isLongTitle = computed(() => props.talk.name.length > 80);
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
}

.desc {
  font-size: 4rem;
  margin: 0.16em 0;
  display: flex;
  align-items: center;

  svg {
    color: var(--primary-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }
}

h1 {
  margin: 0.8em 0 0;
  font-size: 8rem;
  line-height: 1.2;

  &.is-long {
    font-size: 7.2rem;
  }
}

.authors {
  font-size: 3.2rem;
  margin-top: 1em;
}
</style>
