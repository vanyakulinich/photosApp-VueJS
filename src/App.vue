<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from './layout/Layout.vue'
import store from './store'
export default {
  name: 'app',
  store,
  components: {
    Layout
  }, 
  mounted: function() {
    this.$router.push('/main')
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
