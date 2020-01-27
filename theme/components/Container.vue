<template>
  <div id="container">
    <div class="recent-posts" v-if="page.posts">
      <ul>
        <li v-for="post in page.posts" :key="post.permalink">
          <h2>
            {{ formatDate(post.createdAt) }} -
            <a :href="post.permalink">{{
              post.title
            }}</a>
          </h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import formatDate from '../scripts/formatDate'

export default {
  components: {},
  props: ['page'],
  methods: {
    formatDate
  }
  
}
</script>
