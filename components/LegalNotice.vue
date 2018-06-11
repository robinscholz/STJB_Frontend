<template>
  <div class="legalnotice">
    <h4 class="legalnotice__headline">Legal Notice</h4>
    <p v-html="address"></p>
    <span>{{phone}} {{email}}</span>
    <p class="legalnotice__text" v-html="legalnotice"></p>
  </div>
</template>

<script>
export default {
  name: 'LegalNotice',
  props: ['information'],
  computed: {
    title() {
      return this.information.title
    },
    about() {
      return this.information.about
    },
    street() {
      return this.information.street
    },
    postcode() {
      return this.information.postcode
    },
    city() {
      return this.information.city
    },
    country() {
      return this.information.country
    },
    phone() {
      return this.information.phone
    },
    email() {
      return this.information.email
    },
    legalnotice() {
      let legal = this.information.legalnotice
      legal += `<span>Font customized by <a href='http://fabianharb.ch/'>Fabian Harb</a>, `
      legal += `website developed by <a href='http://studioscholz.info'>Studio Scholz</a>.</span>`

      return legal
    },
    address() {
      let fullAddress = '<span>' + this.title + '</span> '
      fullAddress += '<span>' + this.street + '</span>'
      fullAddress += this.postcode.length > 0 && this.city.length > 0 ? '<span class="nobr"> ' + this.postcode + ' ' + this.city  : ''
      fullAddress += this.country.length > 0 ? ' (' + this.country + ')</span>' : '</span>'

      return fullAddress
    }
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/variables.sass"

  .legalnotice
    max-width: 600px
    padding: $mp-e*3 0 0 0
    @include fs-xs()
    &__text
      a
        @include underline()

</style>
