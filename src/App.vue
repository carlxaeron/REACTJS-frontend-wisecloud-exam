<template>
  <div class="container p-4 mx-auto font-sans lg:p-6 text-main">
    <game-header :homeTeam="homeTeamId" :awayTeam="awayTeamId" />
    <game-body :homeTeam="homeTeamId" :awayTeam="awayTeamId" :statsData="statsData" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import {playersByTeam, recaps} from './games';
import GameHeader from '@/components/layouts/GameHeader.vue';
import GameBody from '@/components/layouts/GameBody.vue';

export default defineComponent({
  name: 'GameCenter',
  components: {
    GameHeader,
    GameBody,
  },
  setup() {
    const gameIsaId = 12771;

    console.warn('game', recaps, playersByTeam);
    const awayTeamId = computed(() => recaps?.gameRecap?.awayTeamId);
    const homeTeamId = computed(() => recaps?.gameRecap?.homeTeamId);
    const recapsData = recaps;
    const playersByTeamData = playersByTeam;
    const statsData = { recaps: recapsData, playersByTeam: playersByTeamData };

    return {
      homeTeamId,
      awayTeamId,
      statsData,
    };
  },
});
</script>

<style>
</style>
