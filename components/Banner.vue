<template>
  <div class="banner_c">
    <div class="b_img">
      <el-carousel height="26.875em" arrow="never">
        <el-carousel-item v-for="(banner, key) in banners" :key="key">
          <a            
            :href="banner.link"
            :style="`background-image: url('${banner.img}')`"
            class="banner-link"
            target="_blank"
          >
            <!-- <img :src="banner.img" :alt="banner.title"> -->
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="course">
      <div class="posi">
        <ul>
          <li
            v-for="(item, index) in categories"
            v-show="index < 6"
            :key="index"
            :class="{ isHover: isShow === index }"
            @mouseenter="showToggle(index)"
            @mouseleave="remove(index)"
          >
            <div @click.stop="goCourseSelect(item)" class="top">
              {{ item.title }}
            </div>
            <p @click.stop="goCourseSelect(item)" class="bot">
              <span v-for="el in item.subCategories" :key="el.id">{{
                el.title
              }}</span>
            </p>
            <ul
              v-if="issubShow === index"              
              @mouseenter="showToggle(index)"
              @mouseleave="remove(index)"
              class="submenu"
            >
              <li
                v-for="el in item.subCategories"
                :key="el.id"
                @click="
                  $router.push(
                    `courseselect?CategoryFId=${item.id}&CategoryId=${el.id}`
                  )
                "
              >
                {{ el.title }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banners: { type: Array, default: () => [] },
    categories: { type: Array, default: () => [] }
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
    },
    goCourseSelect(info) {
      this.$router.push(`/courseselect?CategoryFId=${info.id}`)
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
    .banner-link {
      width: 100%;
      height: 26.875em;
      display: block;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .course {
    width: 75em;
    height: 26.875em;
    margin: 0 auto;
    .posi {
      width: 15em;
      height: 26.875em;
      position: absolute;
      // left: 0;
      top: 0;
      z-index: 99;
      // overflow: hidden;
      > ul {
        width: 15em;
        height: 26.875em;
        background-color: rgba(0, 0, 0, 0.6);
        position: relative;
        > li {
          width: 100%;
          list-style: none;
          color: #fff;
          padding: 1.2em 1.2em;
          height: 4.475em;
          cursor: pointer;
          // position: relative;
          &:hover {
            background-color: #fefefe;
            color: #4b82dc;
            .bot {
              opacity: 1;
            }
          }
          .top {
            font-size: 1em;
            margin-bottom: 6px;
          }
          .bot {
            width: 100%;
            height: 22px;
            font-size: 0.75em;
            text-overflow: ellipsis;
            white-space: nowrap;
            opacity: 0.5;
            margin-right: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            span {
              margin-right: 6px;
            }
          }
          .submenu {
            width: 20em;
            // width: 0;
            height: 26.875em;
            background-color: rgba(254, 254, 254, 0.96);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 15em;
            z-index: 1000;
            overflow: hidden;
            > li {
              margin-left: 2.5em;
              margin-right: 2.5em;
              padding-top: 1.875em;
              padding-bottom: 1.875em;
              border-bottom: 1px dashed #e8e8e8;
              height: 4.4375em;
              font-size: 0.875em;
              color: #666;
              &:hover {
                color: #4b82dc;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
.el-carousel__indicators {
  z-index: 100;
}
.el-carousel__item .is-animating {
  z-index: 100;
}
</style>
