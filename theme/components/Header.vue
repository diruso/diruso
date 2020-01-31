<template>
  <header id="header">
    <!-- 导航栏 -->
    <nav id="nav">
      
      <div class="nav-info">
        <!-- 站点标题 -->
        
        <h1>
          <div
            id="logo"
            v-if="$siteConfig.logo">
            <img :src="$siteConfig.logo" alt="Site Logo" />
          </div>
          <saber-link
            class="title"
            rel="author"
            to="/"
          >{{ siteTitle }}</saber-link>
        </h1>
        <!-- 描述 -->
        <p class="description">{{ description }}</p>
      </div>

      <div class="nav-bar">
        <ul>
          <li v-for="(item, i) in $themeConfig.nav" :key="i">
            <saber-link
              class="page-link"
              :to="item.link"
            >{{ item.text }}</saber-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import defaults from '../constants/defaults.yml'

export default {
  props: {
    siteTitle: {
      type: String,
      default: defaults.site.title
    },
    description: {
      type: String,
      default: defaults.site.description
    }
  },
  computed: {
  
  },
  methods: {

  }
}
</script>
