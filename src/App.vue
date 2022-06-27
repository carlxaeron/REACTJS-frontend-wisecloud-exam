<template>
  <game-header :homeTeam="homeTeamId" :awayTeam="awayTeamId" />
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import {playersByTeam, recaps} from './games';
import GameHeader from '@/components/GameHeader.vue';

export default defineComponent({
  name: 'GameCenter',
  components: {
    GameHeader,
  },
  setup() {
    const gameIsaId = 12771;

    console.warn('game', recaps, playersByTeam);
    const awayTeamId = computed(() => recaps?.gameRecap?.awayTeamId);
    const homeTeamId = computed(() => recaps?.gameRecap?.homeTeamId);

    return {
      homeTeamId,
      awayTeamId,
    };
  },
});
</script>

<style>
</style>
