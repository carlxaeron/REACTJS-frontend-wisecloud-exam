<template>
    <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
    <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
    <comparer title="Possession" leftText="1" rightText="2" :leftPercent="33" :rightPercent="55"/>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
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