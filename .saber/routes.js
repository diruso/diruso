
    export default [
      {
          path: "/posts/hello-world.html",
          meta: {
            __relative: '_posts/hello-world.md',
            __pageId: '014956be'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-hello-world-md" */ "/Users/noxium/Repository/shyrz.github.io/pages/_posts/hello-world.md?saberPage=014956be")
            
          }
        },
{
          path: "/posts/post-test.html",
          meta: {
            __relative: '_posts/post-test.md',
            __pageId: '69771ef6'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-post-test-md" */ "/Users/noxium/Repository/shyrz.github.io/pages/_posts/post-test.md?saberPage=69771ef6")
            
          }
        },
{
          path: "/posts/when-i-am-old-let-me-die-with-dignity.html",
          meta: {
            __relative: '_posts/when-i-am-old-let-me-die-with-dignity.md',
            __pageId: '20a728ba'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-when-i-am-old-let-me-die-with-dignity-md" */ "/Users/noxium/Repository/shyrz.github.io/pages/_posts/when-i-am-old-let-me-die-with-dignity.md?saberPage=20a728ba")
            
          }
        },
{
          path: "/about.html",
          meta: {
            __relative: 'about.md',
            __pageId: '4542a13a'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--about-md" */ "/Users/noxium/Repository/shyrz.github.io/pages/about.md?saberPage=4542a13a")
            
          }
        },
{
          path: "/friends.html",
          meta: {
            __relative: 'friends.md',
            __pageId: '4539a59b'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--friends-md" */ "/Users/noxium/Repository/shyrz.github.io/pages/friends.md?saberPage=4539a59b")
            
          }
        },
{
          path: "/",
          meta: {
            __relative: 'index.md',
            __pageId: 'f8e43004'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--index-md" */ "/Users/noxium/Repository/shyrz.github.io/pages/index.md?saberPage=f8e43004")
            
          }
        },
{
          path: "/tags/测试标签",
          meta: {
            __relative: 'undefined',
            __pageId: 'internal_blog__tag__测试标签'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--internal_blog__tag__测试标签" */ "#cache/pages/internal_blog__tag__测试标签.saberpage?saberPage=internal_blog__tag__测试标签")
            
          }
        },
{
          path: "/categories/测试分类",
          meta: {
            __relative: 'undefined',
            __pageId: 'internal_blog__category__测试分类'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--internal_blog__category__测试分类" */ "#cache/pages/internal_blog__category__测试分类.saberpage?saberPage=internal_blog__category__测试分类")
            
          }
        },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/noxium/Repository/shyrz.github.io/node_modules/saber/vue-app/404.vue")
        }
      }
    ]