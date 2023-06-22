<template lang="">
  <img src="@/assets/loading.gif" v-if="isLoading" />
  <div v-else classname="button">
    <slot></slot>
  </div>
</template>
<script>
  import LoadingAnim from "./LoadingAnim.vue";
  export default {
    props: { isLoading: Boolean },
    components: { LoadingAnim },
  };
</script>
<style lang="sass" scoped>
  @import '@/constants/globalStyle.sass'

  div
    background-color: $global-blue
    display: inline-block
    color: #fff
    height: 50px
    padding: 15px 50px
    font-weight: 500
    cursor: pointer
    transition: background-color $transition
    text-align: center

    &:hover
      background-color: $global-blue-hover

  img
    height: 50px
    padding: 15px 50px
    pointer-events: none
    user-select: none
</style>
