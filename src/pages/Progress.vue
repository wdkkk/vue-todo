<template lang="">
  <div class="wrapper">
    <div className="title" v-if="!isLoading">
      Number of today's tasks: <span>{{ tasks.length }}</span>
      <br />
      <router-link className="link" to="/tasks">Let's add more</router-link>
    </div>
    <loading-anim v-else />
  </div>
</template>
<script>
  import { RouterLink } from "vue-router";
  import LoadingAnim from "@/components/UI/LoadingAnim.vue";

  export default {
    components: { RouterLink, LoadingAnim },
    computed: {
      tasks() {
        return this.$store.getters.getTasks;
      },
      isLoading() {
        return this.$store.getters.getLoadingState;
      },
    },
  };
</script>
<style lang="sass">
  @import '@/constants/globalStyle.sass'

  .wrapper
    height: calc(100vh - 72px)
    display: flex
    justify-content: center
    align-items: center

    .title
      font-size: 50px
      text-align: center
      font-weight: 500

      span
        font-weight: 700
        color: $global-blue

    .link
      color: $global-blue
      transition: $transition

      &:hover
        color: $global-blue-hover
</style>
