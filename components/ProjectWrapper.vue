<template>
  <div class="project" :class="size">
    <img class="project__img" :src="mainimg.url" :class="[size, mainimg.orientation]">
    <div class="project__text" v-html="text"></div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: 'ProjectWrapper',
  props: ['project'],
  data() {
    return {};
  },
  computed: {
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
      return this.project.images[1]
    },
    thumbs() {
      return this.project.thumbs
    }
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/variables.sass"

  .project
    width: 100%
    max-width: 2000px
    margin: $mp-e*2 0
    @include fs-s()
    &__img
      width: 100%
      &.medium
        max-width: 800px
        &.portrait
          max-width: 400px
      &.large
        max-width: 100%;
    &__text
      margin: $mp-a 0 0 0
      max-width: 1000px


</style>
