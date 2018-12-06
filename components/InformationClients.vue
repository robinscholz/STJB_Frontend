<template>
  <section class="information__clients">
    <h2>Clients</h2>
    <ol>
      <li
        v-for="client in clients"
        :key="client"
        class="information__clients__entry">{{client}}</li>
    </ol>
  </section>
</template>

<script>
export default {
  name: 'InformationClients',
  props: ['clients'],
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="sass">
@import "../assets/sass/variables.sass"

.information
  @include fs-m()
  &__clients
    padding-bottom: $lh-m
    h2
    &__entry
      list-style: none
</style>
