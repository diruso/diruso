<template>
  <Base :page="page">
    <div class="post">
      <!-- 文章信息 -->
      <header class="post-header">
        <h1 class="post-title" itemprop="name headline">{{ page.attributes.title }}</h1>
        <div class="post-meta">
          <time
            class="published"
            :datetime="page.attributes.createdAt"
            itemprop="datePublished"
          >{{ formatDate(page.attributes.createdAt) }}</time>
          <div
            class="category"
            v-if="page.attributes.categories"
          >
            <span class="label"><i class="fas fa-folder"></i></span>
            <span class="categories">
              <a
                v-for="(category, i) in page.attributes.categories"
                :key="category.toString()"
                :href="page.attributes.categoriesInfo[i].permalink"
              >{{ category }}</a>
            </span>
          </div>
          <div
            class="tag"
            v-if="page.attributes.tags"
          >
            <span class="label"><i class="fas fa-tag"></i></span>
            <span class="tags">
              <a
                v-for="(tag, i) in page.attributes.tags"
                :key="tag.toString()"
                :href="page.attributes.tagsInfo[i].permalink"
              >#{{ tag }}</a>
            </span>
          </div>
        </div>
      </header>

      <!-- 文章内容 -->
      <article class="han-init-context">
        <slot name="default" />
      </article>

      <!-- 分页 -->
      <div class="pagination">
        <router-link class="prev" v-if="page.prevPost" :to="page.prevPost.permalink">
          <strong>{{ $siteConfig.pagination && $siteConfig.pagination.prevPost || '上一篇' }}</strong>
          <p>{{ page.prevPost.title }}</p>
        </router-link>
        <i class="separator"></i>
        <router-link class="next" v-if="page.nextPost" :to="page.nextPost.permalink">
          <strong>{{ $siteConfig.pagination && $siteConfig.pagination.nextPost || '下一篇' }}</strong>
          <p>{{ page.nextPost.title }}</p>
        </router-link>
      </div>

      <!-- 第三方评论系统 -->
      <!-- Disqus -->
      <Disqus
        v-if="page.attributes.comments !== false && $themeConfig.disqus"
        :url="$siteConfig.url"
        :permalink="page.attributes.permalink"
        :shortname="$themeConfig.disqus"
      />
    </div>
  </Base>
</template>

<script>
import Base   from '../components/Base'
import Disqus from '../components/_plugins/Disqus'

import formatDate from '../scripts/formatDate'

export default {
  components: { Base, Disqus },
  props: ['page'],

  head() {
    const { title, layout, excerpt } = this.page.attributes;

    return {
      title: title ? `${title} » ${this.siteTitle}` : this.siteTitle,
    }
  },
  methods: {
    formatDate,
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

h1.post-title {
  margin: 21px 21px 12px;
  font-family: $aeon-font-latin-sans, $aeon-font-sans, sans-serif, $aeon-font-emoji;
  color: $black;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.post-meta {
  margin: 12px 21px;
  font-style: italic;
  time.published {
    font-family: $aeon-font-latin-sans, $aeon-font-sans, sans-serif;
    color: $gray;
  }
  .category, .tag {
    margin-top: 12px;
    color: $gray;
    a {
      margin-right: 12px;
      font-family: $aeon-font-latin-sans, $aeon-font-sans, sans-serif;
      color: $gray;
      &:hover, &:active {
        color: $highlight;
        background: transparent;
      }
    }
  }
}

// article.han-init-context {
//   padding: 0 21px;
// }

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  a {
    padding: 21px 0;
    font-family: $aeon-font-latin-sans, $aeon-font-sans, sans-serif, $aeon-font-emoji;
    // font-weight: 00;
    text-decoration: none;
    &:hover, &:active {
      // background: $dark-0;
      strong {
        color: $black;
      }
      p {
        color: $highlight;
      }
    }
    
    p {
      font-weight: 200;
      margin: 10px 0 0;
    }
  }
  a.prev {
    text-align: left;
  }
  a.next {
    text-align: right;
  }
}
</style>
