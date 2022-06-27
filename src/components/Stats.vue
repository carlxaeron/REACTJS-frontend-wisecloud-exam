<template>
    <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
    <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
    <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Comparer from '@/components/Comparer.vue';

export default defineComponent({
    components: { Comparer },
    name: "Stats",
    props: {
        recaps: String,
        playersByTeam: String,
    },
    setup(props) {

    }
})
</script>

<style lang="sass" scoped>

</style>