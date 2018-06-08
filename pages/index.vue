<template>
  <div class="container">
    <IndexHeader></IndexHeader>
    <ProjectWrapper v-for="project in projects" :project="project" :key="project.uri"></ProjectWrapper>
  </div>
</template>

<script>
import IndexHeader from '~/components/IndexHeader.vue'
import ProjectWrapper from '~/components/ProjectWrapper.vue'


export default {
  components: {
    IndexHeader,
    ProjectWrapper
  },
  computed: {
    projects() {
      return this.$store.state.content['1-projects']
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
