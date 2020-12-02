<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="mx-auto" tile>
          <v-img
          class="align-end shrinkable-img"
          :src="image"
          :height="imgHeight"
          @click="selectNews"
          style="cursor: pointer" >
            <v-card-title class="white--text blend--difference">{{ title }}</v-card-title>
            <v-card-subtitle class="white--text blend--difference">
              {{ subtitle }}
            </v-card-subtitle>
          </v-img>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text v-html="text" class="body-1 text-justify"/>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import goTo from 'vuetify/es5/services/goto'

export default {
  name: 'News',
  props: {
    image: String,
    title: String,
    subtitle: String,
    text: String,
    minHeight:
    {
      default: '100px'
    },
    maxHeight: {
      default: '200px'
    }
  },
  data: () => ({
    show: false
  }),
  computed: {
    imgHeight: function () {
      return this.show ? this.minHeight : this.maxHeight
    }
  },
  methods: {
    selectNews: function (event) {
      this.show = !this.show
      if (this.show) { goTo(event.currentTarget, { offset: 20 }) }
    }
  }
}
</script>

<style src="../styles/news.scss" lang="scss"></style>
