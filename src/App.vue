<template>
  <suspense>
    <main-layout />
  </suspense>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import MainLayout from '@/components/layouts/Main.vue'

export default defineComponent({
  name: 'GameCenter',
  components: {
    MainLayout
  }
});
</script>

<style>
</style>
