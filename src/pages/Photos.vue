<template>
  <div>
    <h2>
      {{filter ? `${filter}s` : 'All pictures'}}
    </h2>
    <md-card>
      <md-card-header>Filter to display images</md-card-header>
      <md-card-content>
        <md-switch 
          v-bind:value="filters['photo']" 
          @change="applyFilterPhoto"
        >
          Photos
        </md-switch>
        <md-switch 
          v-bind:value="filters['illustration']" 
          @change="applyFilterIllustration" 
          class="md-primary"
        >
          illustrations
        </md-switch>
        <md-switch 
          v-bind:value="filters['vector']" 
          @change="applyFilterVector" 
          class="md-warn"
        >
          vectors
        </md-switch>
      </md-card-content>
      <md-card-content v-if="filter">
        <img 
          class="image"
          v-for="item in data" 
          :key='item.id' 
          :src='item.previewURL'
          :name='item.webformatURL'
        >
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Photos',
  data: () =>({
    filter: null
  }),
  methods: {
    ...mapActions({
      api: 'api'
    }),
    applyFilterPhoto: function(e) {this.applyFilter('photo', e)},
    applyFilterIllustration: function(e) {this.applyFilter('illustration', e)},
    applyFilterVector: function(e) {this.applyFilter('vector', e)},
    applyFilter: function(filter, value) {
      const buffer = {...this.filters}
      for(const key in buffer) buffer[key] = false;
      buffer[filter] = value;
      this.filter = filter;
      this.api({
        params: {
          image_type: value ? filter : 'all',
          per_page: 50
        },
        filters: {...buffer}
      })
    },
  },
  computed: mapState({
    data: state => state.data,
    filters: state => state.filters
  }),
}
</script>

<style scoped>
  h2 {
    text-transform: uppercase;
  }
</style>
