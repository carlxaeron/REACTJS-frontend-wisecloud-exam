<template>
  <div class="flex flex-wrap items-center mx-auto comparer">
    <div class="pr-4 text-right comparerLeft">{{result.leftText}}</div>
    <div class="flex comparerP">
        <div class="comparerPLeft">
            <div class="ml-auto bg-main-100" :style="{width: result.leftPercent+'%'}"></div>
        </div>
        <div class="comparerPRight">
            <div class="bg-main-700" :style="{width: result.rightPercent+'%'}"></div>
        </div>
    </div>
    <div class="pl-4 comparerRight">{{result.rightText}}</div>
    <div class="w-full text-center text-black comparerTitle">{{result.title}}</div>
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
    combinedData: Object,
  },
  setup(props) {
    let result = {
      leftText: '',
      rightText: '',
      leftPercent: 0,
      rightPercent: 0,
      title: '',
    }
    if (props?.combinedData != null) {
      result = {
        leftText: props.combinedData.home.text as string,
        rightText: props.combinedData.away.text as string,
        leftPercent: props.combinedData.home.perc as number,
        rightPercent: props.combinedData.away.perc as number,
        title: props.combinedData.title as string,
      }
    } else {
      result = {
        leftText: props.leftText as string,
        rightText: props.rightText as string,
        leftPercent: props.leftPercent as number,
        rightPercent: props.rightPercent as number,
        title: props.title as string,
      }
    }

    return {
      result
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
      width: 12.5%
      font-size: 2rem
      font-weight: bold
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
      
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
