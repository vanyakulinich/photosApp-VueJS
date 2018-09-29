<template>
  <div>
    <h2>
      <!-- {{filter ? filter : 'All pictures'}} -->
      temporary header
    </h2>
    <md-card>
      <md-card-header>Pictures filters</md-card-header>
      <md-card-content>
        <md-switch 
          v-bind:value="filters['photo']" 
          v-model="filters['photo']" 
          id="photos" 
          name="photo"
        >
          photos
        </md-switch>
        <md-switch v-bind:value="filters['illustration']" v-model="filters['illustration']" id="illustrations" name="illustration" class="md-primary">illustrations</md-switch>
        <md-switch v-bind:value="filters['vector']" v-model="filters['vector']" id="vectors" name="vector" class="md-warn">vectors</md-switch>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Photos',
  data: () => ({
    // filters: {
    //   photo: false,
    //   illustration: false,
    //   vector: false,
    // },
  }),
  methods: {
    ...mapActions({
      api: 'api'
    }),
    manageFilters: function(filters) {
      const filterToApply = filters.find(el => el[1] === true)
      const newFilters = {...filters}
      if (filterToApply) {
         for ( const key in newFilters) {
          if (key !== filterToApply[0]) {
            newFilters[key] = false;
          }
        }
        console.log(newFilters)
      }
     
      this.api({
        params: {
          image_type: filterToApply ? filterToApply[0] : 'all',
        },
        filters: newFilters ? newFilters : null
      })
    },
  },
  watch: {
    filters: {
      handler: function(data) {
        const filters = Object.entries(data); 
        this.manageFilters(filters);
      },
      deep: true
    }
  },
  computed: mapState({
    data: state => state.data,
    filters: state => state.filters
  }),
}
</script>
