<template>
  <div>
    <md-card>
        <router-link tag="md-button" to="/main" class="md-raised md-primary">
          Main
        </router-link>
        <router-link tag="md-button" to="/photos" class="md-raised md-primary">
          Photos
        </router-link>
    </md-card>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style scoped>
  .md-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>

