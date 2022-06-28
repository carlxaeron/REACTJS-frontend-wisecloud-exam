<template>
  <div class="container relative p-4 mx-auto font-sans lg:p-6 text-main">
    <nav class="absolute right-0 mr-5 text-xl font-bold lg:mr-32 nav">
      <ul>
        <li class="flex items-center justify-center" @click="toggleMenu">Total <font-awesome-icon class="ml-1 text-sm" icon="caret-down" /></li>
        <ul :class="!showMenu && 'hidden'">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <!-- <li>
            <router-link to="/game/12771">Game #1</router-link>
          </li> -->
          <li>
            <router-link to="/game/12915">Game #2</router-link>
          </li>
          <li>
            <router-link to="/game/12939">Game #3</router-link>
          </li>
        </ul>
      </ul>
    </nav>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return { showMenu: false }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  },
});
</script>

<style scoped lang="sass">
  nav
    li
      cursor: pointer
</style>
