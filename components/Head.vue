<template>
  <div class="wrap">
    <div class="top">
      <div class="img">
        <a href="/">
          <img
            src="/img/logo.png"
            alt="logo"
          />
        </a>
      </div>
      <ul>
        <li
          v-for="(item, index) in navigate"
          :key="index"
        >
          <nuxt-link
            :class="{ active: iscur === index }"
            :to="item.value"
            @click.native="page(index)"
          >{{ item.label }}</nuxt-link>
        </li>
      </ul>
      <div class="search">
        <el-input
          v-model="searchContent"
          @keyup.enter.native="search"
          placeholder="搜索"
          class="input-with-select"
          autocomplete="new-password"
          clearable
        >
          <el-button
            slot="append"
            @click.stop="search"
            class="btn"
          >
            <i class="el-icon-search el-icon--right"></i>
          </el-button>
        </el-input>
      </div>
      <div class="t_right">
        <div
          v-if="!user.isAuthenticated"
          class="login"
        >
          <el-button
            @click="login"
            class="pre"
            type="text"
          >登录</el-button>&nbsp;&nbsp;|
          <el-button
            @click="reg"
            type="text"
          >注册</el-button>
        </div>
        <div
          v-else
          class="login"
        >
          <div
            @mousemove="showBar(true)"
            @mouseleave="showBar(false)"
            class="bar"
          >
            <img
              :src="user.icon||'/img/avatar.png'"
              alt="头像"
            />
            <owner-bar
              v-show="isShowBar"
              class="abs"
            />
          </div>
        </div>
      </div>
      <login-Modal
        v-show="$store.getters.onLogin"
        @close="showBind"
      />
    </div>
  </div>
</template>

<script>
import consola from 'consola'
import loginModal from '~/components/Login'
import OwnerBar from '~/components/OwnerBar'

export default {
  components: { loginModal, OwnerBar },
  data() {
    return {
      iscur: '',
      selfdata: 1,
      isShowBar: false,
      user: this.$store.getters.user,
      loginType: '',
      connection: null,
      searchContent: '',
      navigate: [
        { label: '首页', value: '/' },
        { label: '论坛', value: '/' },
        { label: '问答', value: '/' },
        { label: '资讯', value: '/' }
      ],
      bindPhone: false,
      isBindMobile: false
    }
  },
  computed: {},
  watch: {
    $route: {
      handler(newVal, oldVal) {
        if (newVal.path === '/') {
          this.iscur = 0
        } else if (newVal.path === '/') {
          this.iscur = 1
        } else if (newVal.path === '/') {
          this.iscur = 2
        } else if (newVal.path === '/') {
          this.iscur = 3
        } else if (newVal.path === '/') {
          this.iscur = 4
        } else {
          this.iscur = ''
        }
      },
      deep: true,
      immediate: true
    }
  },
  beforeMount() {
    consola.log('beforeMount-user=', this.user)
    if (this.user.isAuthenticated) {
      console.log('this.user.token=', this.user.token)
    }
  },
  methods: {
    login() {
      console.log()
      this.$store.commit('setOnLogin', true)
      this.$store.commit('setModalType', 'login')
    },
    reg() {
      this.$store.commit('setOnLogin', true)
      this.$store.commit('setModalType', 'reg')
    },
    page(index) {
      this.iscur = index
    },
    search() {},
    showBind(val) {
      this.bindPhone = true
    },
    showBar(status) {
      this.isShowBar = status
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variable.scss';

.wrap {
  width: 100%;
  .top {
    width: 75em;
    height: 4.375em;
    margin: 0 auto;
    .img {
      float: left;
      margin-right: 3.125em;
      height: 100%;
      a {
        display: inline-flex;
        align-items: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        img {
          height: 2.875em;
          width: auto;
          display: block;
        }
      }
    }
    > ul {
      float: left;
      width: 26em;
      overflow: hidden;

      li {
        float: left;
        list-style: none;
        line-height: 4.375em;
        font-size: 1em;
        margin-right: 1.5em;
        color: #545b66;
        &:hover {
          color: #4b82d3;
        }
        .nuxt-link-exact-active {
          color: #545b66;
        }
        .active {
          color: #4b82d3;
        }
      }
    }
    .search {
      float: left;
      width: 13.5em;
      height: 2.5em;
      margin-top: 0.9375em;
      &::before,
      &::after {
        content: '';
        display: block;
        clear: both;
      }
      .input-with-select {
        font-size: 0.875em;
        border: 1px solid #e0e0e0;
        border-radius: 10em;
        overflow: hidden;
        .el-input__inner {
          border: 0 none;
          border-radius: 0;
          padding-right: 30px;
        }
        .el-input-group__append {
          background-color: transparent;
          border: 0 none;
        }
        .btn {
          border: 1px solid #4b82dc;
          background-color: #4b82dc;
          margin-right: -1.5em;
          color: #fff;
        }
        .el-button {
          background-color: transparent;
          border: 0 none;
          border-radius: 0;
          padding: 0.75em 1.25em 0.75em 0;
          .el-icon-search {
            color: #999999;
          }
        }
      }
    }
    .t_right {
      float: right;
      // width: 16em;
      text-align: right;
      color: $navColor;
      .download-app {
        display: inline-block;
        font-size: 0.875em;
        margin-right: 1.875em;
        cursor: pointer;
      }
      .s_cart {
        position: relative;
        float: none;
        height: 4.375em;
        line-height: 4.375em;
        display: inline-block;
        cursor: pointer;
        img {
          vertical-align: middle;
          margin-top: -0.1em;
        }
        span {
          font-size: 0.875em;
        }
        .cart-num {
          width: 16px;
          height: 16px;
          line-height: 16px;
          border-radius: 50%;
          font-size: 12px;
          background-color: $remindColor;
          color: #ffffff;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
        }
      }
      .login {
        float: right;
        height: 4.375em;
        .el-button {
          margin-top: 16px;
          color: #333;
          cursor: pointer;
          &:hover {
            color: #4b82dc;
          }
        }
        .active {
          color: #4b82dc;
        }
        // .current {
        //   color: #4b82dc;
        // }
        .pre {
          margin-left: 2em;
        }
        .bar {
          float: right;
          position: relative;
          height: 4.375em;
          .message-note {
            position: absolute;
            top: 1.125em;
            right: 1.875em;
            background-color: red;
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
          > img {
            width: 2.125em;
            height: 2.125em;
            border-radius: 50%;
            margin: 1.125em 1.875em 0;
          }
          .abs {
            position: absolute;
            top: 4.375em;
            left: -1.625em;
            z-index: 2222;
            background: #fff;
          }
        }
      }
    }
  }
}
</style>
