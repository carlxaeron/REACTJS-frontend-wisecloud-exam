<template>
  <div class="pt-6 gameBody">
    <stats :statsData="statsData" />
  </div>
</template>

<script lang='ts'>
import GameStatsInterface from '@/interfaces/GameStatsInterface';
import { defineComponent, PropType } from 'vue';
import Stats from '../Stats.vue';

export default defineComponent({
  components: { Stats },
  name: 'GameBody',
  props: {
    statsData: {
      type: Object as PropType<GameStatsInterface>,
      required: true,
    },
  },
  setup(props) {

    return {
    };
  },
});
</script>

<style scoped>
</style>
