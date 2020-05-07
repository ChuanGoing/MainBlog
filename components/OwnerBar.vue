<template>
  <div class="avatar">
    <ul>
      <li @click="go('/')">
        <img
          src="/img/icons/study-center.png"
          alt
        />
        <span>首&nbsp;&nbsp;&nbsp;&nbsp;页</span>
      </li>
      <li
        @click="logout"
        class="logout"
      >
        <img
          src="/img/icons/logout.png"
          alt
        />
        <span>退出登录</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    go(url) {
      this.$router.push(url)
    },
    async logout() {
      await this.$axios.post('/logout')
      this.$store.commit('setLoginOut')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  //width: 8em;
  // font-size: 0.875em;
  box-shadow: 0 0.1em 0.5em #cccccc;
  ul {
    li {
      position: relative;
      display: block;
      // align-items: center;
      // justify-content: center;
      width: 4.75em;
      padding: 0 1em;
      // height: 3em;
      // line-height: 3em;
      // text-align: left;
      cursor: pointer;
      &.logout {
        span {
          border-top: 1px solid #e0e0e0;
        }
      }

      img {
        position: absolute;
        display: block;
        left: -3.375em;
        float: left;
        margin: 0.7em 0.5em 0 2em;
        width: 19px;
        height: 20px;
      }
      //   .message-number {
      //     position: absolute;
      //     right: 1.5em;
      //     top: 0.875em;
      //     width: 1.25em;
      //     height: 1.25em;
      //     color: #ffffff;
      //     background-color: red;
      //     border-radius: 50%;
      //     display: block;
      //     font-weight: 600;
      //     text-align: center;
      //     line-height: 1.25em;
      //     padding: 0;
      //     font-size: 0.75em;
      //   }
      span {
        display: block;
        // width: 100%;
        text-align: center;
        color: #545b66;
        font-size: 0.875em;
        padding: 0.5625em 0;
      }
    }
    :hover {
      background: #f7f7f7;
    }
  }
}
</style>