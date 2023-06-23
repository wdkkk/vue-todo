<template lang="">
  <div>
    <todo-form></todo-form>
    <loading-anim v-if="isLoading" />
    <tasks-list :tasks="tasks" v-if="!isLoading"></tasks-list>
  </div>
</template>
<script>
  import TodoForm from "@/components/TodoForm.vue";
  import TasksList from "@/components/TasksList.vue";
  import LoadingAnim from "@/components/UI/LoadingAnim.vue";

  export default {
    components: {
      TodoForm,
      TasksList,
      LoadingAnim,
    },

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
<style lang=""></style>
