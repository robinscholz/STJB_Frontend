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
    <a class="information__pdf" v-if="pdf.length > 0" :href="pdf" target="_blank">Profile PDF (download)</a>
    <InformationProject></InformationProject>
    <LegalNotice :information="information"></LegalNotice>
  </div>
</template>

<script>
import IndexHeader from '~/components/IndexHeader.vue'
import InformationClients from '~/components/InformationClients.vue'
import LegalNotice from '~/components/LegalNotice.vue'
import InformationProject from '~/components/InformationProject.vue'



export default {
  components: {
    IndexHeader,
    InformationClients,
    LegalNotice,
    InformationProject
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
    },
    pdf() {
      return this.information.pdf
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/variables.sass"

.information
  max-width: 1100px
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
          display: table-row
          &:before 
            content: '•'
            display: table-cell
            padding-right: 8px
  &__footnotes
    // max-width: 600px
    @include fs-s()
    padding-left: $mp-e
    li
      counter-increment: step-counter
      list-style: none
      display: table-row
      &:before
        display: table-cell
        padding-right: 8px
        content: '('counter(step-counter)')'
  &__pdf
    display: inline-block
    padding: $lh-m 0 0 0

</style>