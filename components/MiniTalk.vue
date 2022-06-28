<template>
  <div class="infos">
    <p class="desc"><Calendar />{{ talk.start }}</p>
    <p class="desc"><Clock2 />{{ humanDuration(talk.duration) }}</p>
    <p class="desc"><MapPin />{{ talk.room }}</p>
  </div>
  <h2>{{ talk.name }}</h2>
  <Authors class="authors" :authors="talk.authors" />
</template>

<script setup lang="ts">
import { Calendar, Clock2, MapPin } from "lucide-vue-next";

defineProps<{ talk: any }>();

const { humanDuration } = useTalks();
</script>

<style lang="scss" scoped>
.authors {
  font-size: 0.9em;
}

h2 {
  margin: 0;
  font-size: 1.6em;
  margin: 0.25em 0;
  line-height: 1.2;
}

.infos {
  display: flex;
  align-items: center;
  gap: 2em;

  p {
    margin: 0;
  }
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
