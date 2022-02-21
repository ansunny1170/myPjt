<template>
  <div>
    <div class="separate-body"></div>
    <b-container fluid style="padding-left: 0px">
      <b-row>
        <!-- Side bar -->
        <b-col cols="2" style="padding-right: 0px">
          <app-Sidebar />
        </b-col>
        <!-- Body contents -->
        <b-col style="padding-left: 0px; padding-right: 0px">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar.vue'
export default {
  name: 'Sidebar',
  components: {
    'app-Sidebar': Sidebar
  }
}
</script>

<style lang="scss" scoped></style>
