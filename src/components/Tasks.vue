<template>
  <div>
    <header>
      <h1 id="pageTitle" tabindex="-1">Tasks</h1>
    </header>
    <main>
      <div v-if="!tasks.length">
        <p aria-live="polite">Looks like you've completed all your tasks!</p>
      </div>
      <ul v-else class="cards" aria-labelledby="pageTitle">
        <li v-for="(task, index) in tasks" :key="index" class="card">
          <div>
            <h2 class="name">{{task.name}}</h2>
            <p class="notes">{{task.notes}}</p>
          </div>
          <button
            @click="deleteTask({index, task})"
            class="delete"
            :aria-label="`Delete ${task.name}`"
          >❌</button>
        </li>
      </ul>
      <button @click="openModal()" class="addNew" id="addNew">Add New Task</button>
      <div role="status">{{announce}}</div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Tasks",
  computed: {
    ...mapState(["modalOpen", "tasks", "announce"])
  },
  methods: {
    ...mapActions(["deleteTask", "openModal"])
  }
};
</script>

<style lang='scss'>
.card {
  margin: auto;
  padding: 0 1em;
  &:nth-child(even) {background: #f7fcff}
  &:nth-child(odd) {background: #e4f5ff}
  max-width: 450px;
  word-break: break-all;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  .name {
    grid-column: 1 / 2;
    grid-row: 1;
  }
  .notes {
    grid-column: 1;
    grid-row: 2;
  }
  .delete {
    grid-column: 2;
    grid-row: 1 / 3;
    border: none;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;
  }
}
.cards{
  border: 1px solid black;
  max-width: 450px;
  padding: 0;
  margin: auto;
}

.addNew{
    border: 1px solid black;
    background-color: transparent;
    padding: .5em;
    font-size: 16px;
    margin: 1em;
    cursor: pointer;
    &:hover {
      background-color: #E3E3E3;
    }
}

div[role=status]{
  height: 0;
  overflow: hidden;
}

[tabindex="-1"]:focus {
  outline: none;
}

</style>
