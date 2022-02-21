<template>
  <div>
    <b-list-group>
      <b-list-group-item>QnA</b-list-group-item>
      <b-list-group-item href="#" @click="onClickAll">All</b-list-group-item>
      <b-list-group-item href="#" @click="onClickChinese">중국어</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  methods: {
    onClickAll() {
      // 상세 조회 태그 설정
      this.$store.dispatch('actinputNav', 'All')
    },
    onClickChinese() {
      // 상세 조회 태그 설정
      this.$store.dispatch('actinputNav', 'chinese')
    }
  }
}
</script>

<style lang="scss" scoped></style>
