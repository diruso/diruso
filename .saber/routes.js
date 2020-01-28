
    export default [
      {
          path: "/blog/2019/02/hello-world",
          meta: {
            __relative: '_posts/hello-world.md',
            __pageId: '97781754'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-hello-world-md" */ "/Users/noxium/shyrz/pages/_posts/hello-world.md?saberPage=97781754")
            
          }
        },
{
          path: "/blog/2020/01/post-test",
          meta: {
            __relative: '_posts/post-test.md',
            __pageId: '352c428e'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-post-test-md" */ "/Users/noxium/shyrz/pages/_posts/post-test.md?saberPage=352c428e")
            
          }
        },
{
          path: "/blog/2014/05/when-i-am-old-let-me-die-with-dignity",
          meta: {
            __relative: '_posts/when-i-am-old-let-me-die-with-dignity.md',
            __pageId: '6e897852'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-when-i-am-old-let-me-die-with-dignity-md" */ "/Users/noxium/shyrz/pages/_posts/when-i-am-old-let-me-die-with-dignity.md?saberPage=6e897852")
            
          }
        },
{
          path: "/about",
          meta: {
            __relative: 'about.md',
            __pageId: '647bdacb'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--about-md" */ "/Users/noxium/shyrz/pages/about.md?saberPage=647bdacb")
            
          }
        },
{
          path: "/friends",
          meta: {
            __relative: 'friends.md',
            __pageId: '79b99703'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--friends-md" */ "/Users/noxium/shyrz/pages/friends.md?saberPage=79b99703")
            
          }
        },
{
          path: "/",
          meta: {
            __relative: 'index.md',
            __pageId: '0aab1366'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--index-md" */ "/Users/noxium/shyrz/pages/index.md?saberPage=0aab1366")
            
          }
        },
{
          path: "/recommend",
          meta: {
            __relative: 'recommend.md',
            __pageId: '2f2e59bc'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--recommend-md" */ "/Users/noxium/shyrz/pages/recommend.md?saberPage=2f2e59bc")
            
          }
        },
{
          path: "/tag/测试标签",
          meta: {
            __relative: 'undefined',
            __pageId: 'internal_blog__tag__测试标签'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--internal_blog__tag__测试标签" */ "#cache/pages/internal_blog__tag__测试标签.saberpage?saberPage=internal_blog__tag__测试标签")
            
          }
        },
{
          path: "/tag/爱与死",
          meta: {
            __relative: 'undefined',
            __pageId: 'internal_blog__tag__爱与死'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--internal_blog__tag__爱与死" */ "#cache/pages/internal_blog__tag__爱与死.saberpage?saberPage=internal_blog__tag__爱与死")
            
          }
        },
{
          path: "/category/hello-world",
          meta: {
            __relative: 'undefined',
            __pageId: 'internal_blog__category__hello-world'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--internal_blog__category__hello-world" */ "#cache/pages/internal_blog__category__hello-world.saberpage?saberPage=internal_blog__category__hello-world")
            
          }
        },
{
          path: "/category/测试分类",
          meta: {
            __relative: 'undefined',
            __pageId: 'internal_blog__category__测试分类'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--internal_blog__category__测试分类" */ "#cache/pages/internal_blog__category__测试分类.saberpage?saberPage=internal_blog__category__测试分类")
            
          }
        },
{
          path: "/category/长相思",
          meta: {
            __relative: 'undefined',
            __pageId: 'internal_blog__category__长相思'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--internal_blog__category__长相思" */ "#cache/pages/internal_blog__category__长相思.saberpage?saberPage=internal_blog__category__长相思")
            
          }
        },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/noxium/shyrz/node_modules/saber/vue-app/404.vue")
        }
      }
    ]