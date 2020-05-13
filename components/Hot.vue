<template>
  <div class="new">
    <div class="img">
      <img
        src="/img/icons/hot.png"
        alt
      />
    </div>

    <template>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="最新"
          name="first"
        >
          <div class="bot clearfix">
            <div
              v-for="(item, index) in adNewList"
              v-show="index < 4"
              :key="index"
              class="api"
            >
              <div
                :style="{ 'background-image': `url('${item.img}')` }"
                class="img1"
              >
                <div
                  v-if="item.tags"
                  class="skill"
                >
                  <template v-for="(el, i) in transArr(item.tags)">
                    <div
                      v-if="i<=1"
                      :key="i"
                      :title="el"
                      class="ellipsis"
                    >{{ el }}</div>
                  </template>
                  <!-- <div :title="item.CategoryName" class="ellipsis">{{item.CategoryName}}</div> -->
                </div>
                <span
                  v-if="item.mode == 2"
                  class="live"
                >直播</span>
                <div
                  v-if="item.mode == 2"
                  class="python"
                >
                  <template v-if="item.isLive">
                    <span>正在直播</span>
                    <img
                      src="/img/zyx.gif"
                      alt
                    />
                  </template>
                  <span v-if="item.liveStartTime > 0 && !item.isLive">
                    {{
                    $moment(item.liveStartTime * 1000).format('MM月DD日 HH:mm')
                    }}
                  </span>
                </div>
              </div>
              <div>
                <div
                  :title="item.title"
                  class="auto ellipsis"
                >{{ item.title }}</div>
                <div class="price">
                  <template>
                    <span
                      v-if="item.chargeMode === 1"
                      class="original"
                    >
                      <b>免费</b>
                    </span>
                    <span
                      v-else-if="item.chargeMode === 3"
                      class="original"
                    >
                      <b>面议</b>
                    </span>
                    <span
                      v-else-if="item.chargeMode === 2"
                      class="original"
                    >
                      <b v-if="item.promotionPrice">￥{{ item.promotionPrice }}</b>
                      <b v-else>￥{{ item.price }}</b>
                    </span>
                  </template>
                  <span
                    v-if="item.promotionPrice"
                    class="saleprice"
                  >￥{{ item.price }}</span>
                  <span class="people right">{{ item.sales }}</span>
                  <img
                    class="right"
                    src="../static/img/sales.png"
                    alt
                  />
                  <span class="right diffcult-rank">{{fillter_diffcultLeval(item.difficultylevel)}}</span>
                </div>
              </div>
              <!-- <span style="color:#0898ef;white-space: nowrap;">{{item.Duration}}</span> -->
            </div>
            <!-- </nuxt-link> -->
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="最热"
          name="second"
        >
          <div class="bot clearfix">
            <div
              v-for="(item, index) in adHotList"
              v-show="index < 4"
              :key="index"
              class="api"
            >
              <div
                :style="{ 'background-image': `url('${item.img}')` }"
                class="img1"
              >
                <!-- <img :src="item.Icon" alt> -->
                <div class="skill">
                  <template v-for="(el, i) in transArr(item.tags)">
                    <div
                      v-if="i<=1"
                      :key="i"
                      :title="el"
                      class="ellipsis"
                    >{{ el }}</div>
                  </template>
                </div>
                <span
                  v-if="item.mode == 2"
                  class="live"
                >直播</span>
                <div
                  v-if="item.mode == 2"
                  class="python"
                >
                  <template v-if="item.isLive">
                    <span>正在直播</span>
                    <img
                      src="/img/zyx.gif"
                      alt
                    />
                  </template>
                  <span v-if="item.liveStartTime > 0 && !item.isLive">
                    {{
                    $moment(item.liveStartTime * 1000).format('MM月DD日 HH:mm')
                    }}
                  </span>
                </div>
                <!-- <div v-if="item.Mode==2 && item.Duration" class="python">
                  <img v-if="item.Duration=='正在直播'" src="/img/zyx.gif" alt />
                  <span>直播时间</span>
                  {{$moment(item.duration * 1000).format('YYYY.MM.DD')}}~{{$moment(item.expiryEndDate * 1000).format('YYYY.MM.DD')}}
                </div>-->
              </div>
              <div>
                <div
                  :title="item.title"
                  class="auto ellipsis"
                >{{ item.title }}</div>
                <div class="price">
                  <template>
                    <span
                      v-if="item.chargeMode === 1"
                      class="original"
                    >
                      <b>免费</b>
                    </span>
                    <span
                      v-else-if="item.chargeMode === 3"
                      class="original"
                    >
                      <b>面议</b>
                    </span>
                    <span
                      v-else-if="item.chargeMode === 2"
                      class="original"
                    >
                      <b v-if="item.promotionPrice">￥{{ item.promotionPrice }}</b>
                      <b v-else>￥{{ item.price }}</b>
                    </span>
                  </template>
                  <span
                    v-if="item.promotionPrice"
                    class="saleprice"
                  >￥{{ item.price }}</span>
                  <span class="people right">{{ item.sales }}</span>
                  <img
                    class="right"
                    src="../static/img/sales.png"
                    alt
                  />
                  <span class="right diffcult-rank">{{fillter_diffcultLeval(item.difficultylevel)}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    adNewList: {
      type: Array,
      default: () => {
        return []
      }
    },
    adHotList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      activeName: 'first',
      diffcultLevelList: [
        { name: '入门', value: 1 },
        { name: '进阶', value: 2 },
        { name: '高级', value: 3 }
      ]
    }
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {},
    transArr(str) {
      if (str) {
        return str.split(',')
      } else {
        return []
      }
    },
    fillter_diffcultLeval(leval) {
      if (!leval) return ''
      const item = this.diffcultLevelList.find((item, index) => {
        return item.value === leval
      }, this)
      return item.name
    }
  }
}
</script>

<style lang="scss">
.new {
  width: 75em;
  margin: 0 auto;
  position: relative;
  padding-top: 2.5em;
  .el-tabs__nav-scroll {
    font-size: 1.5em;
  }
  .el-tabs__item {
    font-size: 0.75em;
    padding: 0 13px;
    // height: 3.125em;
    // line-height: 3.125em;
  }
  .el-tabs__nav-wrap::after {
    width: 0;
  }
  .el-tabs__nav-scroll {
    padding-left: 3em;
  }
  .el-tabs__header {
    margin: 0;
    + .el-tabs__content {
      overflow: visible;
      padding-top: 2.5em;
    }
  }
  .img {
    position: absolute;
    left: 8px;
    top: 2.5em;
  }

  .center {
    overflow: hidden;
    margin-bottom: 2.5em;
    img {
      border-radius: 6px;
      width: 586px;
      height: 110px;
    }
    .ke2 {
      float: left;
    }
    .ke1 {
      float: right;
    }
    .ke {
      a {
        border-radius: 6px;
        width: 580px;
        height: 110px;
        display: block;
        background-size: contain;
        background-position: center;
      }
    }
  }
  .clearfix {
    &::before,
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .bot {
    // height: 17.625em;
    margin-left: -2.5em;
    margin-bottom: 2.625em;
    &::before,
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    .api {
      width: 16.875em;
      // height: 17.6em;
      margin-left: 2.5em;
      cursor: pointer;
      float: left;
      transition: all 0.3s ease;

      &:hover {
        .img1 {
          transform: translateY(-3px);
          box-shadow: 2px 8px 10px #ccc;
        }
        .auto {
          transform: translateY(-3px);
          color: #5688ca;
        }
      }

      .img1 {
        position: relative;
        height: 10.125em;
        border-radius: 6px;
        transition: all 0.3s ease;
        background-size: cover;
        background-position: center;
        // img {
        // 	width: 270px;
        // 	height: 162px;
        // 	border-radius: 6px;
        // }
        .live {
          background-color: #e30054;
          color: #fff;
          padding: 3px 0.75em;
          border-radius: 1em;
          position: absolute;
          top: -0.5em;
          left: -0.4em;
          font-size: 13px;
          border: 2px #fff solid;
        }
        .python {
          font-size: 0.875em;
          color: #fff;
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          width: 13em;
          height: 1.6875em;
          line-height: 1.6875em;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(51, 51, 51, 0.5)
          );
          text-align: right;
          padding-right: 0.75em;
          img {
            margin-right: 10px;
            border-radius: 0;
            vertical-align: middle;
          }
        }
        .skill {
          position: absolute;
          bottom: 0.625em;
          padding-left: 1em;
          width: 100%;
          height: 1.625em;
          white-space: nowrap;
          overflow: hidden;
          div {
            float: left;
            height: 1.625em;
            font-size: 0.875em;
            background-color: rgba(0, 0, 0, 0.5);
            // margin-top: -2em;
            border-radius: 12px;
            padding: 2px 8px;
            color: #fff;
            margin-right: 10px;
            max-width: 16.875em;
            margin-bottom: 10px;
          }
        }
      }
      .auto {
        font-size: 1em;
        color: #333;
        line-height: 28px;
        margin-top: 0.8em;
        transition: all 0.3s ease;
      }
      .price {
        width: 100%;
        margin-top: 0.6em;
        .original {
          font-size: 18px;
          color: #e40055;
          font-weight: bold;
          vertical-align: middle;
        }
        img {
          vertical-align: middle;
          margin-left: 1em;
          width: 15px;
          height: 15px;
        }
        .saleprice {
          font-size: 0.875em;
          color: #999;
          text-decoration: line-through;
          margin-left: 0.5em;
        }
        .people {
          color: #909090;
          font-size: 0.875em;
          overflow: hidden;
          line-height: 2em;
          font-size: 14px;
          vertical-align: middle;
        }

        img {
          vertical-align: middle;
          margin-right: 1em;
          margin-top: 0.35em;
        }
      }
    }
  }
}
</style>
