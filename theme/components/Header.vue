<template>
  <header id="header">
    <!-- 导航栏 -->
    <nav id="nav">
      <div class="nav-info">
        <!-- 站点标题 -->
        <h1>
          <saber-link class="title" rel="author" to="/">{{ siteTitle }}</saber-link>
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
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
header#header {
  width: 732px;
  // margin-left: 15vw;
  margin: 0 auto;
  padding: 50px 0 21px;
  
  // border-bottom: 1px dashed $light-3;
  * { margin: 0; padding: 0; }

  nav#nav {
    display: flex;
    // height: 30px;
    align-items: flex-end;
    justify-content: space-between;
    
    a, a:link { text-decoration: none; }
    
    .nav-info {
      h1 {
        margin-bottom: 10px;
        font-size: 48px;
        line-height: 48px;
        color: $blue;

        a.title {
          // margin: 0 4px;
          // font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          font-size: 42px;
          font-weight: 900;
          text-shadow: 0 1px 1px rgba(0, 0, 0, .08);
          color: $black;
          
          // box-shadow: 5px 5px 0 0 $aeon-blue, inset 5px 5px 0 0 $aeon-blue;
          &:hover, &:active {
            text-decoration: underline;
          //   color: $aeon-blue;
          //   background: #FFF;
          //   box-shadow: 0 0 0 0 $aeon-yellow, inset 6em 3.5em 0 0 $aeon-yellow;
          }
        }
      }
    }
    .nav-bar ul {
      display: flex;
      list-style: none;
      li {
        margin: 0 5px;
        // a {
        //   padding: 21px;
        //   border-radius: 20px;
        //   box-shadow: rgba(198, 208, 235, 0.5) 0px 10px 20px;
        //   border: 1px solid rgb(198, 208, 235);
        //   transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        //   &:hover {
        //     box-shadow: rgb(198, 208, 235) 0px 30px 60px;
        //     transform: translateY(-5px);
        //   }
        // }
      }
    }
  }

}


</style>
