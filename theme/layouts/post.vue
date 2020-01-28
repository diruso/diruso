<template>
  <Base :page="page">
    <div class="post">
      <!-- 头部信息 -->
      <header class="post-header">
        <h1 class="post-title" itemprop="name headline">{{ page.attributes.title }}</h1>
        <div class="post-meta">
          <time
            class="published"
            :datetime="page.attributes.createdAt"
            itemprop="datePublished"
          >{{ formatDate(page.attributes.createdAt) }}</time>
        </div>
      </header>

      <!-- 文章内容 -->
      <article class="han-init-context">
        <slot name="default" />
      </article>


      <!-- 底部信息 -->
      <footer class="post-footer">
        <div class="post-note">
          <p>欢迎在<strong>评论区</strong>留言，同时也欢迎<a href="mailto:i@sh7.me">发电子邮件</a>与我讨论。</p>
          <p>如果觉得本文还不错，欢迎<saber-link rel="donate" to="/donate">请我一杯咖啡</saber-link>。</p>
          <p>本作品采用<a class="license-link" rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议</a>进行许可。</p>
        </div>
        <div class="post-meta">
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
              >{{ tag }}</a>
            </span>
          </div>
        </div>
      </footer>

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
        v-if="page.comments !== false && $themeConfig.disqus"
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

</style>
