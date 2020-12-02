<template>
  <v-app id="app">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-card class="mx-auto" flat>
            <div class="text-h1 font-weight-thin">Arte na Pandemia</div>
            <div class="text-subtitle font-weight-light text-justify">
              <br/>
              Em novembro do ano passado, a OMS (Organização Mundial da Saúde) divulgou um estudo que analisou mais de novecentas pesquisas, que relacionam a arte à saúde e bem-estar social. O resultado confirma os benefícios que ela proporciona a nossa saúde física e mental. E no cenário atual, este estudo além de reforçar a importância da arte no nosso cotidiano, nos leva a refletir como a arte tem nos salvado em tempos de pandemia.
              <br/><br/>
              Desde a descoberta do primeiro caso de COVID-19 no Brasil, já se passaram nove meses. E certamente em algum momento, nos apoiamos na arte para enfrentar esse período. Mas quem são os responsáveis pela arte que vem nos acolhendo na pandemia? Qual o cenário artístico independente no meio disso tudo?
              <br/><br/>
              Entrevistamos artistas de segmentos diferentes para contar suas histórias.
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-main style="margin-top: 20px">
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
