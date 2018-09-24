<template>
  <div>
    <router-link 
      v-for="route in routes"
      :key='route'
      tag="md-button" 
      :to='route'
      class="md-raised md-dense"
    >
      <span class='menu'>{{route}}</span>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {routesNames} from '../routes'
export default {
  name: 'Layout',
  data: () => ({
    routes: routesNames
  })
}
</script>

<style scoped>
  .menu {
    color: rgba(48, 48, 48, 0.7)
  }
  .menu:hover {
    color: rgba(48, 48, 48, 0.9)
  }
</style>

