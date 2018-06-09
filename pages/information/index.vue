<template>
  <div class="container information">
    <IndexHeader></IndexHeader>
    <section class="information__text">
      <div v-html="about"></div>
    </section>
    <InformationClients :clients="clients"></InformationClients>
    <section class="information__footnotes">
      <div v-html="footnotes"></div>
    </section>
    <LegalNotice :information="information"></LegalNotice>
  </div>
</template>

<script>
import IndexHeader from '~/components/IndexHeader.vue'
import InformationClients from '~/components/InformationClients.vue'
import LegalNotice from '~/components/LegalNotice.vue'


export default {
  components: {
    IndexHeader,
    InformationClients,
    LegalNotice
  },
  computed: {
    information() {
      return this.$store.state.content['2-information']
    },
    about() {
      return this.information.about
    },
    clients() {
      return this.information.clients
    },
    footnotes() {
      return this.information.footnotes
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/variables.sass"

.information
  max-width: 1200px
  margin-bottom: $mp-a
  &__text
    padding: $mp-e 0 0 0
    div 
      p
        padding-bottom: $lh-m
      ul, ol
        padding-left: $mp-e
        padding-bottom: $lh-m
        li
          list-style: none;
          &:before 
            content: '• '
  &__footnotes
    div
      p
        padding-left: $mp-e

</style>