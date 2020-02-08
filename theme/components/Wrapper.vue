<template>
  <div>
    <Header :siteTitle="siteTitle"/>
    <main class="page-content" aria-label="Content">
      <div class="wrapper">
        <slot></slot>
      </div>
    </main>
    <Footer :siteTitle="siteTitle"/>
  </div>
</template>

<script>
import variables from 'saber/variables'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  
}
</script>
