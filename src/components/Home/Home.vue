<template>
  <div class="home">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item,index) in swiper" :key="index">
        <img :src="item.imgurl" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">Home</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">Email</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">Chat</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">location</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">Search</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">Phone</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-gear"></span>
            <div class="mui-media-body">Setting</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-info"></span>
            <div class="mui-media-body">about</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-more"></span>
            <div class="mui-media-body">more</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
// scoped使用在style里，表示样式只在当前组件中有效。
export default {
  data() {
    return {
      swiper: [{
        imgurl: 'src/assets/images/0.jpg',
        name: '0'
      }, {
        imgurl: 'src/assets/images/1.jpg',
        name: '1'
      }, {
        imgurl: 'src/assets/images/2.jpg',
        name: '2'
      }, {
        imgurl: 'src/assets/images/3.jpg',
        name: '3'
      }]
    }
  },
  created() {

  }
}
</script>
<style scoped>
.mint-swipe {
  overflow: hidden;
  position: relative;
  height: 50vw;
}

.mint-swipe-items-wrap {
  position: relative;
  overflow: hidden;
  height: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0)
}

.mint-swipe-items-wrap>div {
  position: absolute;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  width: 100%;
  height: 100%;
  display: none;
}

.mint-swipe-items-wrap>div.is-active {
  display: block;
  -webkit-transform: none;
  transform: none;
}

.mint-swipe-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.mint-swipe-indicator {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
  margin: 0 3px;
}

.mint-swipe-indicator.is-active {
  background: #fff;
}

.mint-swipe-items-wrap>div img {
  width: 100%;
  height: 100%;
}
</style>


