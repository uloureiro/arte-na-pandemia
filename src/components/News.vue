<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="mx-auto" tile>
          <v-img
          class="align-end shrinkable-img"
          :src="image"
          :height="imgHeight"
          @click="show = !show"
          style="cursor: pointer" >
            <v-card-title class="white--text blend--difference">{{ title }}</v-card-title>
            <v-card-subtitle class="white--text blend--difference">
              {{ subtitle }}
            </v-card-subtitle>
          </v-img>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                {{ text }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
  }
}
</script>

<style src="../styles/news.scss" lang="scss"></style>
