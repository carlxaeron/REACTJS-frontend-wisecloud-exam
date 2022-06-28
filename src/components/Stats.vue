<template>
    <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
    <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
    <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Comparer from '@/components/Comparer.vue';
import GameStatsInterface from "@/interfaces/GameStatsInterface";

export default defineComponent({
    components: { Comparer },
    name: "Stats",
    props: {
        statsData: {
            type: Object as PropType<GameStatsInterface>,
            required: true,
        },
    },
    setup(props) {
        console.log(props.statsData);
    }
})
</script>

<style lang="sass" scoped>

</style>