<template>
  <div>
    <NavMenu/>
    {{$route.params.id}}
  </div>
</template>

<script>
import NavMenu from '../components/NavMenu.vue'
export default {
  name: 'Layout',
  components: {
    NavMenu
  }
}
</script>
