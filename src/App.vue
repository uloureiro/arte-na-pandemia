<template>
  <v-app id="app">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-card class="mx-auto" flat>
            <div class="text-sm-h1 text-h2 font-weight-thin">Arte na Pandemia</div>
            <div class="text-subtitle font-weight-light text-justify">
              <br />
              <p>Em novembro do ano passado, a OMS (Organização Mundial da Saúde) divulgou um <a href="https://www.euro.who.int/en/publications/abstracts/what-is-the-evidence-on-the-role-of-the-arts-in-improving-health-and-well-being-a-scoping-review-2019">estudo</a> que analisou mais de novecentas pesquisas, que relacionam a arte à saúde e bem-estar social. O resultado confirma os benefícios que ela proporciona a nossa saúde física e mental. E no cenário atual, este estudo além de reforçar a importância da arte no nosso cotidiano, nos leva a refletir como ela tem nos salvado em tempos de pandemia.</p>
              <p>Desde a descoberta do primeiro caso de Covid-19 no Brasil, já se passaram nove meses. E certamente em algum momento, nos apoiamos na arte para enfrentar esse período. Mas quem são os responsáveis por essas produções que vem nos acolhendo no período de isolamento? Qual o cenário artístico independente em meio a tudo isso?</p>
              <p>Entrevistamos artistas de segmentos diferentes para contar suas histórias.</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-main style="margin-top: 12px">
      <News v-for="(item, index) in news" :key="index"
        :image='item.image'
        :title='item.title'
        :subtitle='item.subtitle'
        :url="item.url"
      />
      <ToTop />
    </v-main>
    <v-footer tile color="#fff" class="footer" padless>
      <v-col class="text-caption text-center font-weight-thin"><a href="https://github.com/uloureiro/arte-na-pandemia">Sourced</a> and <a href="https://github.com/artenapandemia/artenapandemia.github.io">hosted</a> by Github. Coded by <a href="https://github.com/uloureiro">uloureiro</a>.</v-col>
    </v-footer>
  </v-app>
</template>

<script>
import News from './components/News'
import ToTop from './components/ToTop'
export default {
  name: 'App',
  components: { News, ToTop },
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
