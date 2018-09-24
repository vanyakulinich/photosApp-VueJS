<template>
  <div id="app">
    <md-card>
      <md-card-header>
        <img src="./assets/logo.png" class='logo'>
        <h1 class='header'>Vue App for dispalying photos from Pixabay</h1>
      </md-card-header>
    </md-card>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function() {
    this.$router.push('/main')
  }
}
</script>

<style scopped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .md-card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
  }
  .logo {
    height: 50px;
    width: 50px;
  }
  .header {
    text-align: center;
    margin-left: 20px;
    color: rgba(48, 48, 48, 0.7);
    width: fit-content;
  }
</style>
