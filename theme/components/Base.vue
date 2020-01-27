<template>
  <div id="app">
    <div id="top">
      <div id="topbar"></div>
    </div>
    <div id="wrapper">
      <Header
        :siteTitle="siteTitle"
        :description="description" />
      <main id="container">
        <div id="content">
          <slot></slot>
        </div>
      </main>
      <Footer
        :siteTitle="siteTitle" />
      <!-- <script src="//cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min.js"></script> -->
      <!-- <script type="text/javascript">Han( document.getElementById('content')).render()</script> -->
    </div>
  </div>
</template>

<script>
import variables from 'saber/variables'
import Header    from '../components/Header'
import Footer    from '../components/Footer'

import defaults from '../constants/defaults.yml'

import formatDate from '../scripts/formatDate'

export default {
  props: ['page'],
  components: { Header, Footer },
  head() {
    const { title, layout, excerpt } = this.page.attributes

    let { description } = this.$siteConfig
    if (layout === 'page' || layout === 'post') {
      if (excerpt) {
        description = excerpt.replace(/<(?:.|\n)*?>/gm, '')
      }
    }

    return {
      title: title ? `${title} » ${this.siteTitle}` : this.siteTitle,
      meta: [ description && {
        name: 'description',
        content: description
      }].filter(Boolean),
      link: this.$feed ? [
        {
          rel: 'alternate',
          title: `${this.siteTitle} - Feed`,
          type: `application/${
            this.$feed.type === 'atom'
              ? 'atom+xml'
              : this.$feed.type === 'rss'
              ? 'rss+xml'
              : 'json'
          }`,
          href: this.$feed.permalink
        }, 
        {
          rel: 'stylesheet',
          media: 'all',
          href: '//cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min.css',
        }
      ].filter(Boolean) : [],
      script: [
        // FontAwesome
        {
          src: 'https://kit.fontawesome.com/9e8cab954f.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  computed: {
    siteTitle() {
      return this.$siteConfig.title;
    },
    description() {
      return this.$siteConfig.description;
    }
  },
  methods: {
    formatDate
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

#app {
  // background: $black;
}

#wrapper {
  width: 100vw;
  max-width: 100vw;
  // padding-top: 10px;
}

#top {
  // position: fixed;
  // width: 100vw;
  // height: 10px;
  // background: #0A0A0A;
}

#container {

}

#content {
  display: block;
  position: relative;
  padding: 21px 0;
  width: 70vw;
  max-width: 732px;
  // margin: 50px auto 0 15vw;
  margin: 50px auto 0;
  border-radius: 20px;
  // background: $dark-0;
  background: $white;
  backdrop-filter: blur(20px);
  // box-shadow: 0px 10px 20px 0px rgba(236, 236, 236, 0.86);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px;
  // transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
}


</style>
