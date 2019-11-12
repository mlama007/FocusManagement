<template>
  <div v-if="modalOpen">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="closeModal()">
        <div class="modal-container" @click.stop role="dialog" aria-labelledby="newTask" aria-modal="true">
          <h2 id="newTask">Create New Task</h2>
          <form action="submit">
            <!-- Focus Guard -->
            <div id="focusguard-1" tabindex="0" @focus="focusOnLast"></div>
            <div class="inputs">
              <label for="task">Name:</label>
              <input id="task" type="text" v-focus v-model="form.name" ref="first"/>
            </div>

            <div class="inputs">
              <label for="task_notes" id="notes">Notes:</label>
              <input id="task_notes" type="text" v-model="form.notes" required/>
            </div>

            <span class="buttons">
              <button type="button" @click="cancel()" id="cancel">Cancel</button>
              <button
                type="submit"
                @click="submit(form)"
                ref="last"
                :aria-invalid="!form.name || !form.notes ? true : false"
              >Add</button>
              <!-- Focus Guard -->
              <div id="focusguard-2" tabindex="0" @focus="focusOnFirst"></div>
            </span>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "AddFavModal",
  data() {
    return {
      form: {}
    };
  },
  computed: {
    ...mapState(["modalOpen", "tasks"])
  },
  created() {
    const escapeHandler = e => {
      if (e.keyCode === 27 && this.modalOpen) {
        this.closeModal();
      }
    };
    document.addEventListener("keydown", escapeHandler);

    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
    });
  },
  methods: {
    ...mapActions(["closeModal", "addTasks", "initialFocus"]),
    focusOnFirst() {
        this.$nextTick(() => this.$refs.first.focus())
    },
    focusOnLast() {
      this.$nextTick(() => this.$refs.last.focus())
    },
    cancel() {
      this.form = {};
      this.closeModal();
    },
    submit(form) {
      this.addTasks(form);
      this.form = {};
      this.closeModal();
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style lang='scss'>
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
  max-width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0.5em;
  button {
    background-color: transparent;
    padding: 0.5em;
    font-size: 14px;
    margin: 0.5em;
  }
}

.inputs {
  margin: 1em;
  label {
    margin-right: 0.2em;
  }
  input {
    font-size: 14px;
  }
}

#focusguard-1,
#focusguard-2{
  &:focus {
    outline: 0;
  }
}

</style>
