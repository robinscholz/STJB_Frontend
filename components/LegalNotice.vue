<template>
  <div class="legalnotice" :class="{fixed: showNotice}">
    <h4 class="legalnotice__headline">Legal Notice</h4>
    <div v-html="address"></div>
    <span>{{phone}} {{email}}</span>
    <div class="legalnotice__text" v-html="legalnotice"></div>
  </div>
</template>

<script>
export default {
  name: 'LegalNotice',
  props: ['information'],
  data() {
    return {
      showNotice: false
    }
  },
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
      legal += `<span>Font cosmetics <a href='http://fabianharb.ch/'>Fabian Harb</a>, `
      legal += `development <a href='http://studioscholz.info'>Studio Scholz</a>.</span>`

      return legal
    },
    address() {
      let fullAddress = '<span>' + this.title + '</span> '
      fullAddress += '<span>' + this.street + '</span>, '
      fullAddress += this.postcode.length > 0 && this.city.length > 0 ? '<span class="nobr"> ' + this.postcode + ' ' + this.city  : ''
      fullAddress += this.country.length > 0 ? ' (' + this.country + ')</span>' : '</span>'

      return fullAddress
    }
  },
  // methods: {
  //   async showHideNotice () {
  //     if(process.browser) {
  //       this.showNotice = await !this.showNotice
  //       window.scrollTo(0, document.body.scrollHeight + 400)
  //     }
  //   }
  // }
}
</script>

<style lang="sass">
  @import "../assets/sass/variables.sass"

  .legalnotice
    max-width: 600px
    @include fs-xs()
    div
      display: block
      &.hidden
        display: none
    &__text
      a
        @include underline()

</style>
