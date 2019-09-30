<template>
  <div>
    <h1>Tasks {{modalOpen}} </h1>
    <div class="cards">
      <div v-for="(task, index) in tasks" :key="index" class="card">
        <div>
          <h2>{{task.title}}</h2>
          <p>{{task.content}}</p>
          <button @click="deleteItem(index)" class="delete">Delete</button>
        </div>
      </div>
    </div>

    <button @click="openModal()">Add New Favorite</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: "Tasks",
  computed: {
    ...mapState(['modalOpen', 'tasks'])
  },
  methods: {
    ...mapMutations({
      openModal: 'toggleModal',
      deleteItem: 'deleteTask'
    })
  }
};
</script>

<style>
@media only screen and (min-width: 600px) {
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 850px;
    margin: auto;
  }
}

.card{
  margin: 1em;
  padding: .5em;
  background-color: #e8e8e8;
  border: 1px solid black;
}

.delete {
  float: right;
}


</style>
