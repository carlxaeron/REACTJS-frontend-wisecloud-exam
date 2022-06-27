<template>
  <div class="flex justify-between mx-auto gameHeader">
    <img :src="homeTeamLogo" />
    <p class="flex items-center text-lg font-bold text-black">VS</p>
    <img :src="awayTeamLogo" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'GameHeader',
  props: {
    homeTeam: String,
    awayTeam: String,
  },
  setup(props) {
    const homeTeamLogo = computed(() => require(`@/assets/${props.homeTeam}-120.png`));
    const awayTeamLogo = computed(() => require(`@/assets/${props.awayTeam}-120.png`));

    return {
      homeTeamLogo,
      awayTeamLogo,
    };
  },
});
</script>

<style scoped>
  .gameHeader {
    max-width: 425px;
  }
</style>
