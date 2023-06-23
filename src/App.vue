<template>
  <navbar></navbar>
  <router-view />
</template>

<script>
  import Navbar from "@/components/Navbar";
  import { mapGetters } from "vuex";

  export default {
    data() {
      return {};
    },
    components: {
      Navbar,
    },

    async mounted() {
      this.$store.dispatch("fetchTasks");
    },
  };
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')

  body
    overflow: hidden

  *
    padding: 0
    margin: 0
    box-sizing: border-box
    font-family: 'Roboto', sans-serif
</style>
