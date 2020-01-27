<template>
  <div class="paginator">
    <ul>
      <li v-if="page.prevPost">
        <router-link :to="page.prevPost.permalink">
          Previous: {{ page.prevPost.title }}
        </router-link>
      </li>
      <li v-if="page.nextPost">
        <router-link :to="page.nextPost.permalink">
          Next: {{ page.nextPost.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>