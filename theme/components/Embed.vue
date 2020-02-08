<template>
  <div class="extension">
    <!-- Spotify -->
    <div
      class="embed-audio embed-spotify"
      v-if="type === 'Spotify' || type === 'spotify' || type === 'sptf'">
      <iframe
        :src="`https://open.spotify.com/embed/track/${id}`"
        width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">
      </iframe>
    </div>
    <!-- 网易云音乐 -->
    <div
      class="embed-audio embed-netease-music"
      v-if="type === 'NeteaseMusic' || type === 'neteasemusic' || type === 'nm'">

      <iframe
        v-if="mode == 'song'"
        :src="`//music.163.com/outchain/player?type=2&id=${id}&auto=${+auto}`"
        width="352" height="140">
      </iframe>

      <iframe
        v-if="mode === 'list'"
        :src="`//music.163.com/outchain/player?type=0&id=${id}&auto=${+auto}&height=430`"
        width="330" height="450">
      </iframe>
    </div>
    <!-- SoundCloud -->
    <div
      class="embed-audio embed-soundcloud"
      v-if="type === 'SoundCloud' || type === 'soundcloud' || type === 'sc'">
      <iframe
        :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=${auto}&hide_related=${!related}&show_comments=${comment}&show_user=${user}&show_reposts=${repost}&show_teaser=${teaser}&visual=${visual}`"
        allow="autoplay">
      </iframe>
    </div>


    <!-- YouTube -->
    <div
      class="embed-video embed-youtube"
      v-if="type === 'YouTube' || type === 'youtube' || type === 'ytb'">
      <iframe
        :src="`https://www.youtube-nocookie.com/embed/${id}`"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
      </iframe>
    </div>
    <!-- Bilibili -->
    <div
      class="embed-video embed-bilibili"
      v-if="type === 'Bilibili' || type === 'bilibili' || type === 'bl'">
      <iframe
        :src="`//player.bilibili.com/player.html?aid=${id}`"
        scrolling="no" border="0" framespacing="0" allowfullscreen="true">
      </iframe>
    </div>
    <!-- TED -->
    <div
      class="embed-video embed-ted"
      v-if="type === 'TED' || type === 'ted'">
      <iframe
        :src="`https://embed.ted.com/talks/${id}`" scrolling="no" allowfullscreen>
      </iframe>
    </div>
    
    <!-- Codepen -->
    <div
      class="embed-playground embed-codepen"
      v-if="type === 'CodePen' || type === 'codepen' || type === 'cp'">
      <iframe
        :src="`//codepen.io/${username}/embed/${id}/?theme-id=0&default-tab=result`"
        scrolling="no" width="100%" height="400" allowfullscreen>
      </iframe>
    </div>
    <!-- JSFiddle -->
    <div
      class="embed-playground embed-jsfiddle"
      v-if="type === 'JSFiddle' || type === 'jsfiddle' || type === 'jsfd'">
      <iframe
        :src="`//jsfiddle.net/${username}/${id}/embedded/js,html,css,result/dark/`"
        width="100%" height="300" allow="fullscreen payment">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    id: String,
    mode: String,
    auto: {
      type: Boolean,
      default: false
    },
    related: {
      type: Boolean,
      default: false
    },
    comment: {
      type: Boolean,
      default: false
    },
    user: {
      type: Boolean,
      default: false
    },
    username: String,
    repost: {
      type: Boolean,
      default: false
    },
    teaser: {
      type: Boolean,
      default: false
    },
    visual: {
      type: Boolean,
      default: false
    },
    options: Object
  },
}
</script>
