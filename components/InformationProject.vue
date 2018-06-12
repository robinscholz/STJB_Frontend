<template>
  <div class="infoproject" :class="size">
      <img class="infoproject__img" :src="mainimg.url" :class="[size, mainimg.orientation]">
    <div class="infoproject__text" v-html="text"></div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: 'ProjectWrapper',
  data() {
    return {};
  },
  computed: {
    projects() {
      return this.$store.state.content['1-projects']
    },
    project() {
      return this.projects['licht-und-leinwand']
    },
    uri() {
      return this.project.uri
    },
    size() {
      return this.project.size
    },
    text() {
      return this.project.text
    },
    images() {
      return this.project.images
    },
    mainimg() {
      return this.project.mainimg
    },
    thumbs() {
      return this.project.thumbs
    }
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/variables.sass"

  .infoproject
    width: 100%
    max-width: 2000px
    padding: $mp-e*1.5 0 $mp-e*4 0
    display: block;
    @include fs-s()
    &__img
      width: 100%
      display: block
      &.small
        max-width: 550px
        &.portrait
          max-width: 300px
        &.square
          max-width: 450px
      &.medium
        max-width: 750px
        &.portrait
          max-width: 400px
        &.square
          max-width: 550px
      &.large
        max-width: 100%
      &.thumbs
        width: auto;
        height: 200px;
        display: inline-block;
        padding: 0 $mp-a 0 0;

    &__text
      margin: $mp-a/1.5 0 0 0
      max-width: 900px
      a
        @include underline()


  @media all and (max-width: 400px)
    .infoproject
      &__img
        &.small
          &.portrait
            max-width: none


</style>
