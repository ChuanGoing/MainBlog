<template>
  <div class="banner_c">
    <div class="b_img">
      <el-carousel
        :interval="5000"
        height="26.875em"
        arrow="allways"
      >
        <el-carousel-item
          v-for="(banner, key) in bannerList"
          :key="key"
        >
          <a
            :href="banner.link"
            :style="`background-image: url('${banner.img}')`"
            class="banner-link"
            target="_blank"
          >
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerList: { type: Array, default: () => [] }
  },
  data() {
    return {
      isShow: '',
      issubShow: ''
    }
  },
  mounted() {},
  methods: {
    showToggle(index) {
      this.issubShow = index
      this.isShow = index
    },
    remove(index) {
      this.issubShow = ''
      this.isShow = ''
    }
  }
}
</script>

<style lang="scss">
.banner_c {
  width: 100%;
  height: 26.875em;
  position: relative;
  .b_img {
    width: 100%;
    .banner-link {
      width: 100%;
      height: 26.875em;
      display: block;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
.el-carousel {
  width: 100%;
}
.el-carousel__indicators {
  z-index: 100;
}
.el-carousel__item .is-animating {
  z-index: 100;
}
</style>
