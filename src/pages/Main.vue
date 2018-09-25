<template>
  <h1>
    Main page
  </h1>
</template>

<script>
/* eslint-disable */
import apiRequest from '../api/request'
export default {
  name: 'Main',
  async mounted() {
     const res = await apiRequest()
     console.log(res)
  }
}
</script>
