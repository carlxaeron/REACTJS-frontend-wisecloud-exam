<template>
  <div class="flex flex-wrap items-center mx-auto comparer">
    <div class="pr-4 text-right comparerLeft">{{leftText}}</div>
    <div class="flex comparerP">
        <div class="comparerPLeft">
            <div class="ml-auto bg-main-100" :style="{width: leftPercent+'%'}"></div>
        </div>
        <div class="comparerPRight">
            <div class="bg-main-700" :style="{width: rightPercent+'%'}"></div>
        </div>
    </div>
    <div class="pl-4 comparerRight">{{rightText}}</div>
    <div class="w-full text-center text-black comparerTitle">{{title}}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Comparer',
  props: {
    leftText: String,
    rightText: String,
    leftPercent: Number,
    rightPercent: Number,
    title: String,
  },
  setup(props) {
    return {
    };
  },
});
</script>

<style scoped lang="sass">
  .comparer 
    max-width: 930px
    margin-bottom: 2rem
    margin-top: 3.2rem

    .comparerLeft, .comparerRight 
      min-width: 12.5%
      font-size: 2rem
      font-weight: bold
      
    .comparerP 
      min-width: 75%
      height: 0.9rem
      background-color: #cecece

        
      .comparerPLeft, .comparerPRight 
        width: 50%

        > div
          widows: 50%
          height: 100%
  
    .comparerTitle 
      font-size: 1.5rem
      line-height: 1rem
    
</style>
