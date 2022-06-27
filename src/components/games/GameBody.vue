<template>
  <div class="pt-6 gameBody">
    <comparer title="Posession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
    <comparer title="Posession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
    <comparer title="Posession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
  </div>
</template>

<script lang='ts'>
import Comparer from '@/components/Comparer.vue';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  components: { Comparer },
  name: 'GameBody',
  props: {
    recaps: String,
    playersByTeam: String,
  },
  setup(props) {

    return {
    };
  },
});
</script>

<style scoped>
</style>
