<template>
  <div>
    <h1>
      Main page
    </h1>
    <div v-if="data">
      <img v-for="item in data" :key='item.id' :src='item.webformatURL'>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import apiRequest from '../api/request'
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Main',
  mounted() {
     this.api({
       editors_choice: true, 
       per_page: 10,
       order: 'latest'
     })
  },
  methods: {
    ...mapActions({
      api: 'api'
    })
  },
  computed: mapState({
    data: state => state.data
  }),
}
</script>
