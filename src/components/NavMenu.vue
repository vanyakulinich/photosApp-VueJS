<template>
  <md-card>
      <router-link 
        v-for="(route, index) in routes"
        v-bind:key='index'
        tag="md-button" 
        :to="route.name"
        class="md-raised md-primary"
      >
        {{route.name}}
      </router-link>
  </md-card>
</template>

<script>
import {routeNames} from '../routes'
export default {
  name: 'NavMenu',
  data: () => ({
    routes: routeNames
  })
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

