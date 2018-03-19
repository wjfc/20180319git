<template>
  <div id="app">
    <mt-header fixed title="简单的事情"></mt-header>
    <!--路由占位符-->
    <div class="mt40">
      <router-view></router-view>

    </div>
    <div class="footer">
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="person">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">视频</span>
        </router-link>
        <router-link class="mui-tab-item" to="cart">
          <span class="mui-icon icon-cart"></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </div>

  </div>
</template>

<script>
// route需要在App.vue里引用
import router from './route/router.js'
//使用mui css
export default {
  router,
  name: 'app',
  data() {
    return {
      selected: 'home',
      fixed: true
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  display: block
}

.wrap {
  height: 100%;
  width: 100%;
}
.mt40{
  margin-top: 40px;
}
</style>
