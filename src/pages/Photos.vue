<template>
  <div>
    <h2>
      photos page
    </h2>
    <div>
      {{movies}}
      <button @click='sampleAction'>dispatch action</button>
      <button @click='backToDefault'>dispatch action to default</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Photos',
  computed: mapState({
    movies: state => state.movies
  }),
  methods: {
    ...mapActions([
      'sampleAction',
      'backToDefault'
    ])
  }
}
</script>
