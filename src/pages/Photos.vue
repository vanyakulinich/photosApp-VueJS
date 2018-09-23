<template>
  <div>
    <h2>
      photos page
    </h2>
    <div>
      {{test}}
      <button @click='sampleAction'>dispatch action</button>
      <button @click='backToDefault'>dispatch action to default</button>
      <input type="text" v-on:input='dynamicInput'>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Photos',
  computed: mapState({
    test: state => state.test
  }),
  methods: {
    ...mapActions([
      'sampleAction',
      'backToDefault',
      'dynamicInput'
    ])
  }
}
</script>
