<template>
  <div class="modal">
    <div class="modal_main">
      <div class="modal_content">
        <div class="user">
          <div
            @click="type1"
            :class="{ active: type === 'login'}"
            class="u_login"
          >用户登录</div>
          <span>|</span>
          <div
            @click="type2"
            :class="{ active: type === 'reg' }"
            class="u_reg"
          >用户注册</div>
        </div>

        <div
          v-if="type === 'login'"
          class="lg"
        >
          <div class="phone">
            <div class="phone_input">
              <el-input
                v-model="phone"
                :class="{ 'red-border': phoneInvalid }"
                @blur="checkPhone()"
                :placeholder="'请输入手机号'"
                prefix-icon="el-icon-user-solid"
              ></el-input>
              <p>{{ phoneInvalidMsg }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SET_MODALTYPE } from '~/utils/mutation-types'
export default {
  layout: 'test',
  data() {
    return {
      phone: '',
      phoneInvalid: false,
      phoneInvalidMsg: '',
      regFlag: false
    }
  },
  computed: {
    ...mapState({
      type: (state) => state.modalType
    }),
    type: {
      get() {
        return this.$store.state.modalType
      },
      set(val) {
        // this.$store.dispatch('setModalType', { var })
        this.$store.commit(SET_MODALTYPE, val)
      }
    }
  },
  methods: {
    type1() {
      this.type = 'login'
      this.regFlag = false
    },
    type2() {
      this.type = 'reg'
      this.regFlag = true
    },
    checkPhone() {
      if (!this.phone) {
        this.phoneInvalid = true
        this.phoneInvalidMsg = '请输入手机号码'
        return false
      }
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.phoneInvalid = true
        this.phoneInvalidMsg = '请输入正确的手机号'
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.modal {
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3000;
  .modal_main {
    width: 31.25em;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 1em #000; /*设置阴影效果:水平 垂直 模糊距离*/
    border-radius: 0.5em; /*容器添加圆角边框*/
    padding: 3.6em 5.3125em; /*设置内边距top,left*/
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /*移动自身宽/高(x,y)*/
    user-select: none;
    .modal_content {
      background-color: #fff;
      .user {
        width: 100%;
        height: 1.25em;
        font-size: 1.25em;
        padding: 0 1em;
        margin-bottom: 3.125em;
        span {
          color: #ccc;
          margin-left: 3em;
        }
        .u_login {
          color: #666;
          float: left;
          cursor: pointer;
        }
        .u_reg {
          color: #666;
          float: right;
          cursor: pointer;
        }
        .active {
          color: #4b82dc;
        }
      }
      .phone {
        .phone_input {
          position: relative;
          p {
            color: #e50055;
            font-size: 12px;
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>