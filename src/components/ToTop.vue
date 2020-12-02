// inspired on https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/layouts/default/FabToTop.vue
<template>
  <v-fab-transition>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      aria-label="Scroll to top"
      :style="{
        marginBottom: `${$vuetify.application.snackbar}px`,
      }"
      title="Scroll to top"
      bottom
      class="transition-swing"
      color="secondary"
      fab
      fixed
      right
      small
      style="z-index: 6"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'ToTop',
  data: () => ({ fab: false }),
  methods: {
    onScroll () {
      if (typeof window === 'undefined') return

      const top = (
        window.pageYOffset ||
          document.documentElement.offsetTop ||
          0
      )

      this.fab = top > 300
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
