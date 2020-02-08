import './styles/modern-normalize.css';
import 'saber-highlight-css/default.css';
import './styles/aeon.scss';


export default ({ router, setHead }) => {
  // Progress bar is not needed on server-side
  if (process.browser) {
    // These dependencies are only bundled in client build
    const nprogress = require('nprogress')
    require('nprogress/nprogress.css')

    const loaded = Object.create(null)

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        // Start progress bar before entering page
        nprogress.start()
      }
      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      // Stop progress bar after entering page
      nprogress.done()
    })
  }

  setHead({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css'
      },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
      // }
    ],
    // script: `mermaid.initialize({startOnLoad:true,theme:'neutral'});`
  })
}
