<template>
  <div class="header">
    <div class="header__top">
      <span class="header__line">
        <span>{{title}}</span> 
        <span class="header__address" v-html="address"></span></span>
      <span class="header__line">
        <span>{{phone}}</span> 
        <a :href="`mailto:${email}`">{{email}}</a>
      </span>
    </div>
    <div class="header__bottom" ref="information">
      <nav :class="{fixed: stickNavigation}">
        <nuxt-link to="/information">Information</nuxt-link>, 
        <span><span class="strike">Projects</span> Soon …</span>
      </nav>
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
      if(this.$refs.information && this.$route.name !== 'information') {
        const element = this.$refs.information
        const distance = element.getBoundingClientRect()
        if(distance.top <= 0) {
          this.stickNavigation = true
        } else {
          this.stickNavigation = false
        }
      }
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
    padding: 0 0 26px 0
    margin: 0 0 $mp-c 0
    @include fs-m()
    &__line
      display: block
      a:hover
        @include underline()
    &__address
      span
        @include comma()
        :first-child
          white-space: pre-line
    &__bottom
      padding: $mp-a 0 0 0;
      position: absolute
      line-height: 1;
      nav
        &.fixed
          position: fixed
          top: $mp-a;
        a
          &:hover
            @include underline()
          &.nuxt-link-active
            @include underline()
</style>

