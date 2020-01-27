<template>
  <div class="contact">
    <ul>
      <li v-for="(item, name, i) in contact" v-if="contact[name]">
        <a :href="handleContact(name, 'url') + item" :title="contact[name]">
          <i :class="handleContact(name, 'icon')"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import handleContact from '../scripts/utils/handleContact';

export default {
  computed: {
    contact() {
      return this.$themeConfig.contact || {}
    },
    feed() {
      return this.$feed
    },
  },
  methods: {
    handleContact
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

.contact {
  ul {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      padding: 0 3px;
      a, a:link {
        color: $gray;
        &:hover, &:active {
          color: $black;
          background: transparent;
        }
      }
    }
  }
}
</style>
