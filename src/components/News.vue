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
            <v-card-title class="text-h6 white--text text-break"><span class="boxed--text">{{ title }}</span></v-card-title>
            <v-card-subtitle class="white--text blend--difference">
              {{ subtitle }}
            </v-card-subtitle>
          </v-img>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text v-html="htmlContent" class="body-1 text-justify"/>
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
    url: String,
    minHeight:
    {
      default: '100px'
    },
    maxHeight: {
      default: '200px'
    }
  },
  data: function () {
    return {
      show: false,
      htmlContent: ''
    }
  },
  computed: {
    imgHeight: function () {
      return this.show ? this.minHeight : this.maxHeight
    }
  },
  methods: {
    selectNews: function (event) {
      this.show = !this.show
      if (this.show) { goTo(event.currentTarget, { offset: 12 }) }
    },
    getContents: function (url) {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', window.location.href.concat(url), true)
        xhr.onload = function (e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr.responseText)
            } else {
              reject(xhr.statusText)
            }
          }
        }
        xhr.onerror = function (e) {
          reject(xhr.statusText)
        }
        xhr.send(null)
      })
    }
  },
  created: function () {
    this.getContents(this.url).then((result) => { this.htmlContent = result })
  }
}
</script>

<style src="../styles/news.scss" lang="scss"></style>
