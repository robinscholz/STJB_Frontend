<template>
  <div class="header">
    <div class="header__top">
      <span class="header__line">
        <a>{{title}}</a> 
        <a class="header__address" :href="`https://www.google.com/maps/place/${street}+${postcode}+${city}`" target="_blank" v-html="address"></a></span>
      <span class="header__line">
        <a :href="`tel:${phone}`">{{phone}}</a> 
        <a :href="`mailto:${email}`">{{email}}</a>
      </span>
    </div>
    <div class="header__bottom" ref="information" v-if="$route.name !== 'information'">
      <nuxt-link to="/information" :class="{fixed: stickNavigation}">Information</nuxt-link>
    </div>
    <div class="header__bottom underline" v-else-if="$route.name === 'information'">
      <span>Information</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexHeader",
  data() {
    return {
      stickNavigation: false
    }
  },
  computed: {
    information() {
      return this.$store.state.content["2-information"];
    },
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
    address() {
      let fullAddress = '<span>' + this.street + '</span>'
      fullAddress += this.postcode.length > 0 && this.city.length > 0 ? '<span class="nobr">' + this.postcode + ' ' + this.city  : ''
      fullAddress += this.country.length > 0 ? ' (' + this.country + ')</span>' : '</span>'

      return fullAddress
    }
  },
  methods: {
    handleScroll() {
      const element = this.$refs.information
      const distance = element.getBoundingClientRect()
      if(distance.top <= 0) {
        this.stickNavigation = true
      } else {
        this.stickNavigation = false
      }
      console.log("scrolled");
    }
  },
  beforeMount() {
    window.addEventListener("scroll", _.throttle(this.handleScroll));
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/variables.sass"

  .header
    display: block
    padding: 0 0 36px 0
    &__line
      display: block

      a
        // display: inline
        :first-child
        // padding-right: $mp-a
    &__address
      span
        @include comma()
        :first-child
          white-space: pre-line
    &__bottom
      padding: $mp-b 0 0 0;
      position: absolute
      line-height: 1;
      a
        &.fixed
          position: fixed
          top: $mp-b;
</style>
