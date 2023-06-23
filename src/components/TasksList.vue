<template lang="">
  <div className="tasks">
    <transition-group name="tasks">
      <task-display v-for="task in tasks" :key="task.id" :task="task" />
    </transition-group>
  </div>
</template>
<script>
  import TaskDisplay from "./UI/TaskDisplay.vue";
  export default {
    props: {
      tasks: Array,
    },
    components: { TaskDisplay },
  };
</script>
<style lang="sass" scoped>
  .tasks
    padding-top: 50px
    overflow-y: auto
    height: 100vh

  .tasks-enter-active,
  .tasks-leave-active
    transition: all 0.5s ease

  .tasks-enter-from,
  .tasks-leave-to
    opacity: 0
    transform: translateX(30px)
</style>
