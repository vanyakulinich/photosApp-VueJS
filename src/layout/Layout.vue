<template>
  <div class='wrap'>
    <div class='menu-wrap'>
      <router-link 
        v-for="route in routes"
        :key='route'
        tag="md-button" 
        :to='route'
        class="md-raised md-dense"
      >
        <span class='menu'>{{route}}</span>
      </router-link>
    </div>
    <md-card>
      <md-card-content>
        <router-view></router-view>
      </md-card-content>
    </md-card>
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
  .wrap {
    height: 100%;
  }
  .md-card {
    height: 80%;
    width: 90%;
    margin: 0 auto;
  }
  .menu-wrap {
    background-color: rgba(48, 48, 48, 0.2)
  }
</style>

