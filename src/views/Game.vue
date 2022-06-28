<template>
  <game-header :homeTeam="homeTeamId" :awayTeam="awayTeamId" />
  <game-body :homeTeam="homeTeamId" :awayTeam="awayTeamId" :statsData="statsData" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import Axios from "axios";
import GameHeader from '@/components/layouts/GameHeader.vue';
import GameBody from '@/components/layouts/GameBody.vue';
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    GameHeader,
    GameBody,
  },
  async setup(props) {
    const route = useRoute()
    let gameIsaId = route?.params?.gameId ?? 12771;

    let recaps, playersByTeam;

    const req = await Axios.get('/json/games/' + gameIsaId + '.json');
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
})
</script>

<style lang="sass">

</style>