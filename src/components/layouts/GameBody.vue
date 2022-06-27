<template>
  <div class="pt-6 gameBody">
    <stats :recaps="recaps" :playersByTeam="playersByTeam" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import Stats from '../Stats.vue';

export default defineComponent({
  components: { Stats },
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
