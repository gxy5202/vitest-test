<script setup lang="ts">
import Table from './components/table/index.vue';

const data = ref([{
  name: 'gxy',
  age: 12
}])
</script>

<template>
  <Table :data="data"></Table>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
