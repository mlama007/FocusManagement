<template>
  <div v-if="modalOpen">
    <h1>THIS IS THE MODAL</h1>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <form>
            <label for="task">Task Name:</label>
            <input id="task" type="text" />
            <label for="task_notes">Task Notes:</label>
            <input id="task_notes" type="text" />

            <button type="button" @click="closeModal()">Cancel</button>
            <button type="submit" @click="submit()">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "AddFavModal",
  computed: {
    ...mapState(["modalOpen", "tasks"])
  },
  methods: {
    ...mapMutations({
      closeModal: "toggleModal"
    }),
    submit() {
      console.log("submit");
    }
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
