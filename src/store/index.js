import { createStore } from "vuex";
import constants from "@/constants/constants";
import axios from "axios";

export default createStore({
  state: {
    tasks: [],
    isLoading: true,
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getLoadingState(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setTasks(state, newTasks) {
      state.tasks = newTasks;
      state.isLoading = false;
    },
    addTask(state, newTask) {
      state.tasks = [...state.tasks, newTask];
    },
    deleteTask(state, task) {
      state.tasks = state.tasks.filter((t) => t.id !== task.id);
    },
    editTask(state, editedTask) {
      state.tasks[state.tasks.findIndex((t) => t.id === editedTask.id)] =
        editedTask;
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const res = await axios(constants.BASE_URL);

      commit("setTasks", res.data);
    },
    async addTask({ commit }, newTask) {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify(newTask);

      let reqOptions = {
        url: "https://6492f073428c3d2035d0f1f3.mockapi.io/tasks",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      let response = await axios.request(reqOptions);
      commit("addTask", response.data);
    },
    async deleteTask({ commit }, index) {
      const res = await axios.delete(`${constants.BASE_URL}/${index}`);
      commit("deleteTask", res.data);
    },
    async editTask({ commit }, data) {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        id: data.id.toString(),
        name: data.newName.toString(),
      });

      let reqOptions = {
        url: "https://6492f073428c3d2035d0f1f3.mockapi.io/tasks/1",
        method: "PUT",
        headers: headersList,
        data: bodyContent,
      };

      let response = await axios.request(reqOptions);
      commit("editTask", response.data);
    },
  },
  modules: {},
});
