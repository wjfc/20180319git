import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui' //ui框架
import router from './route/router.js' //路由
import 'mint-ui/lib/style.min.css' //使用mint css 
import '../src/assets/css/mui.min.css' //mui css
import '../src/assets/css/icons-extra.css' //mui 字体css
import '../src/assets/css/base.css' //自定义css
import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer,
    /* {
  options: global default options,
  events: global videojs events
} */
)
Vue.use(Mint) //使用Mint

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})