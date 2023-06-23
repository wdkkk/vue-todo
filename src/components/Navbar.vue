<template lang="">
  <div class="navbar">
    <div class="navbar__row">
      <router-link class="navbar__el" v-for="link in links" :to="link.path">
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>
<script>
  import routes from "@/router/routes";
  import { RouterLink } from "vue-router";

  export default {
    data() {
      return {
        links: routes,
      };
    },
    components: {
      RouterLink,
    },
  };
</script>
<style lang="sass">
  @import '@/constants/globalStyle.sass'

  .navbar
    background-color: $global-blue
    padding: 20px 0

    .navbar__row
      display: flex
      gap: 30px
      width: 1000px
      margin: 0 auto

      .navbar__el
        text-decoration: none
        color: #fff
        font-size: 25px

        &::after
          content: ''
          background-color: #fff
          height: 2px
          width: 0
          display: block
          transition: width $transition

        &:hover
          &::after
            width: 100%
</style>
