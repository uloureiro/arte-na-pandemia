const ghpages = require('gh-pages')

ghpages.clean()

ghpages.publish('dist', {
  src: [
    'css/**',
    'js/*.js',
    '*.html',
    '*.ico',
    'contents.json'
  ],
  branch: 'main',
  repo: 'https://github.com/artenapandemia/artenapandemia.github.io.git',
  history: false
})
