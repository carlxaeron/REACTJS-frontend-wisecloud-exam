<template>
  <div class="container relative p-4 mx-auto font-sans lg:p-6 text-main">
    <nav class="absolute right-0 mr-5 text-xl font-bold lg:mr-32 nav">
      <ul>
        <li class="flex items-center justify-center" @click="toggleMenu">Total <font-awesome-icon class="ml-1 text-sm" icon="caret-down" /></li>
        <ul :class="!showMenu && 'hidden'">
          <li><a>Link</a></li>
        </ul>
      </ul>
    </nav>
    <game-header :homeTeam="homeTeamId" :awayTeam="awayTeamId" />
    <game-body :homeTeam="homeTeamId" :awayTeam="awayTeamId" :statsData="statsData" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
// import {playersByTeam, recaps} from '@/games';
import GameHeader from '@/components/layouts/GameHeader.vue';
import GameBody from '@/components/layouts/GameBody.vue';
import axios from 'axios';

export default defineComponent({
  name: 'MainLayout',
  components: {
    GameHeader,
    GameBody,
  },
  data() {
    return { showMenu: false }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  },
  async setup() {
    const gameIsaId = 12771;

    let recaps, playersByTeam;

    const req = await axios.get('/json/games/' + gameIsaId + '.json');
    if (req.status == 200) {
      recaps = req.data.recaps
      playersByTeam = req.data.playersByTeam
    }

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

<style scoped lang="sass">
  nav
    li
      cursor: pointer
</style>
