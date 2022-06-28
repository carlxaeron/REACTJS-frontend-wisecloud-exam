<template>
    <stats-data :statsData="statsData">
        <template v-slot:default="{
            SOG
        }">
            <comparer :combinedData="SOG"/>
            <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
            <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
        </template>
    </stats-data>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Comparer from '@/components/Comparer.vue';
import GameStatsInterface from "@/interfaces/GameStatsInterface";
import StatsData from '@/modules/statsData';

export default defineComponent({
    components: { Comparer, StatsData },
    name: "Stats",
    props: {
        statsData: {
            type: Object as PropType<GameStatsInterface>,
            required: true,
        },
    },
    setup(props) {
        // console.log(props.statsData);
    }
})
</script>

<style lang="sass" scoped>

</style>