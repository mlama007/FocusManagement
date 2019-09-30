<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Tasks/>
    <AddFavModal/>
  </div>
</template>

<script>
import Tasks from './components/Tasks.vue'
import AddFavModal from './components/AddFavModal.vue'

export default {
  name: 'app',
  components: {
    Tasks,
    AddFavModal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
