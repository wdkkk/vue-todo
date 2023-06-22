<template lang="">
  <div class="task">
    <div class="task__row">
      <div class="task__text">
        {{ task.name }}
      </div>
      <input-button @click="() => (isModalVisible = true)">Edit</input-button>
      <input-button :class="{ freezed: isFreeze }" @click="deleteTask()">
        Delete
      </input-button>

      <modal-box
        :isVisible="isModalVisible"
        @changeVisibleState="() => (isModalVisible = !isModalVisible)"
      >
        <input-text
          :modelValue="modalText"
          @update:modelValue="(newValue) => (modalText = newValue)"
          @keypress="(e) => editTask(e.key)"
        />
        <input-button
          :style="{ marginTop: 30 + 'px' }"
          @click="editTask('Enter')"
          >Edit</input-button
        >
      </modal-box>
    </div>
  </div>
</template>
<script>
  import InputButton from "./InputButton.vue";
  import ModalBox from "@/components/UI/ModalBox.vue";
  import InputText from "./InputText.vue";

  export default {
    data() {
      return {
        isModalVisible: false,
        isFreeze: false,
        modalText: "",
      };
    },
    props: {
      task: Object,
    },
    components: {
      InputButton,
      ModalBox,
      InputText,
    },
    methods: {
      async deleteTask() {
        this.isFreeze = !this.isFreeze;

        const res = await this.$store.dispatch(
          "deleteTask",
          parseInt(this.task.id)
        );
      },
      async editTask(key) {
        if (key == "Enter") {
          if (this.name === "") alert("Empty name!");
          else {
            const res = await this.$store.dispatch("editTask", {
              id: this.task.id,
              newName: this.modalText,
            });

            this.isModalVisible = false;
          }
        }
      },
    },
  };
</script>
<style lang="sass" scoped>
  @import '@/constants/globalStyle.sass'
  .task
    width: 800px
    margin: 50px auto 0
    background-color: #00000010
    padding: 30px
    box-shadow: 11px 12px 19px 0px rgba(0, 0, 0, 0.2)

    .task__row
      display: flex
      justify-content: space-between
      align-items: center

      .task__text
        width: 60%


  .freezed
    pointer-events: none
</style>
