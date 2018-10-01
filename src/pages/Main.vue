<template>
  <div class="imageWrap">
    <h3 class="header">
      Latest 50 photos from Pixabay
    </h3>
    <div v-if="data" class="imgContainer">
      <img 
        class="image"
        v-for="item in data" 
        :key='item.id' 
        :src='item.previewURL' 
        @click="showPicture"
        :name='item.webformatURL'
      >
    </div>
    <md-dialog-alert
      :md-content-html="this.selectedPhoto"
      :md-ok-text="this.modalButton"
      ref="modal">
    </md-dialog-alert>
  </div>
</template>

<script>
/* eslint-disable */
import apiRequest from '../api/request'
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Main',
  data: () => ({
    selectedPhoto: '<md-spinner md-indeterminate></md-spinner>',
    modalButton: 'x'
  }),
  mounted() {
     this.api({
       params: {
          editors_choice: true, 
          per_page: 50,
          order: 'latest'
       }
     })
  },
  methods: {
    showPicture (e) {
      this.selectedPhoto = `<img src="${e.target.name}"/>`;
      this.$refs['modal'].open();
    },
    ...mapActions({
      api: 'api'
    })
  },
  computed: mapState({
    data: state => state.data
  }),
}
</script>

<style scoped>
  .header {
    width: 100%;
    color: rgba(48, 48, 48, 0.5)
  }
  .imageWrap {
    overflow: hidden;
  }
  .image {
    padding: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .image:hover {
    box-shadow: 0 0 3px 0;
  }
  .imgContainer {
    overflow: hidden;
  }
</style>
