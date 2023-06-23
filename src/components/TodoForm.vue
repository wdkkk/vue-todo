<template lang="">
  <div className="form" key="task.id">
    <input-text
      :modelValue="name"
      @update:modelValue="(newValue) => (name = newValue)"
      @keypress="(e) => pushTask(e.key)"
    />
    <input-button :isLoading="isLoading" @click="pushTask('Enter')"
      >Add</input-button
    >
  </div>
</template>
<script>
  import inputText from "./UI/InputText.vue";
  import InputButton from "./UI/InputButton.vue";

  export default {
    components: {
      inputText,
      InputButton,
    },
    data() {
      return {
        name: "",

        isLoading: false,
      };
    },
    methods: {
      async pushTask(key) {
        if (key == "Enter") {
          if (this.name === "") alert("Empty name!");
          else {
            this.isLoading = !this.isLoading;
            const newTask = {
              name: this.name,
              id: Date.now().toString(),
            };

            this.name = "";
            const res = await this.$store.dispatch("addTask", newTask);

            this.isLoading = !this.isLoading;
          }
        }
      },
    },
  };
</script>
<style lang="sass" scoped>
  .form
    display: flex
    justify-content: space-between
    width: 80%
    margin: 0 auto
    padding-top: 40px

    input[type="text"]
      width: 90%
</style>
