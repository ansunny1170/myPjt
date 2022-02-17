<template>
  <div>
    <app-Sidebar v-if="this.$route.meta.Sidebar !== false" />
    <router-view />
  </div>
</template>

<script>
// import Sidebar from './components/layout/Sidebar'

export default {}
</script>

<style src="./assets/style/main.css"></style>
