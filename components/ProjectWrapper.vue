<template>
  <div class="project" :class="size">
    <template v-if="size !== 'thumbs'">
      <img class="project__img" :src="mainimg.url" :class="[size, mainimg.orientation]">
    </template>
    <template v-else-if="size === 'thumbs'">
      <img class="project__img" v-for="image in images" :src="image.url" :class="[size, mainimg.orientation]">
    </template>
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

  .project
    width: 100%
    max-width: 2000px
    margin: $mp-e 0
    @include fs-s()
    &:last-child 
      margin-bottom: $mp-a
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


</style>
