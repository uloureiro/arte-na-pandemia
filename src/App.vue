<template>
  <v-app id="app">
    <v-app-bar
        absolute
        hide-on-scroll
        scroll-threshold="45">
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-main style="margin-top: 75px">
      <News v-for="(item, index) in news" :key="index"
        :image='item.image'
        :title='item.title'
        :subtitle='item.subtitle'
        :text='item.text'
      />
    </v-main>
  </v-app>
</template>

<script>
import News from './components/News'
export default {
  name: 'App',
  components: { News },
  data: () => {
    return { news: [] }
  },
  mounted () {
    this.getNews().then((result) => {
      this.news = result
    })
  },
  methods: {
    getNews: function () {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', '/contents.json', true)
        xhr.onload = function (e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText))
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
  }
}
</script>
