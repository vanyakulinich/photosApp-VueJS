<template>
  <div>
    <h2>
      photos page
    </h2>
    <md-card>
      <md-card-header>Pictures filters</md-card-header>
      <md-card-content>
        <md-switch v-model="checked0" id="my-test0" name="my-test0">filter1</md-switch>
        <md-switch v-model="checked1" id="my-test1" name="my-test1" class="md-primary">filter2</md-switch>
        <md-switch v-model="checked2" id="my-test2" name="my-test2" class="md-warn">filter3</md-switch>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Photos',
  data: () => ({
    checked0: null,
    checked1: null,
    checked2: null,
  })
}
</script>
