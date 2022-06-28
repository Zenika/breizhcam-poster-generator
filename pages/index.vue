<template>
  <Layout>
    <h1 class="desc"><Megaphone />Liste des talks</h1>
    <TalkList class="list" :talks="talks" />
  </Layout>
</template>

<script setup lang="ts">
import { Megaphone } from "lucide-vue-next";

const { talks } = useTalks();
</script>

<style lang="scss" scoped>
.list {
  --list-font-size: 1.4rem;
  --list-margin: 1.8em;
}

h1 {
  margin: 1.4em 0;
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
