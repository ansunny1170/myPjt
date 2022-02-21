<template>
  <div>
    <div class="separate-body"></div>
    <b-container fluid style="padding-left: 0px">
      <b-row>
        <!-- Nav bar -->
        <b-col>
          <Sidebar-Nav />
        </b-col>
        <!-- Body contents -->
        <b-col cols="9" style="padding-left: 0px">
          <div class="content-body">
            {{ getQnANav }}
            <p />
            <b-list-group>
              <b-list-group-item href="#" class="flex-column align-items-start" @click="$router.push('/QnA/create')">
                <div class="d-flex w-100 justify-content-between">
                  <p class="mb-1"><font size="2">게시물 번호</font></p>
                  <p class="mb-1"><font size="2">Nav Tag 위치</font></p>
                  <h6>사용자 ID위치</h6>
                </div>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">게시물 제목</h5>
                  <small>생성일 위치</small>
                </div>
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Nav from './nav.vue'

export default {
  name: 'Nav',
  components: {
    'Sidebar-Nav': Nav
  },
  computed: {
    inputNav() {
      return this.$store.getters.inputNav
    },
    getQnANav() {
      let title = ''
      if (this.inputNav === 'All') {
        title = 'QnA'
      } else if (this.inputNav === 'chinese') {
        title = '중국어'
      }
      return title
    }
  }
}
</script>

<style lang="scss" scoped></style>
