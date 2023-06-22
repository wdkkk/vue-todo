<template lang="">
  <div
    class="modal"
    v-if="isVisible"
    @click="() => $emit('changeVisibleState')"
  >
    <div class="content" v-on:click.stop="">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      isVisible: Boolean,
    },
  };
</script>
<style lang="sass" scoped>
  @import '@/constants/globalStyle.sass'

  .modal
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh

    display: flex
    justify-content: center
    align-items: center
    background-color: rgb(0, 0, 0, 40%)

    .content
      background-color: #fff
      padding: 50px
      display: flex
      flex-direction: column
      border: 2px solid $global-blue
</style>
