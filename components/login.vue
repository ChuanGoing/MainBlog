<template>
  <div class="modal">
    <div class="modal_main">
      <div class="modal_content">
        <div
          @click="close"
          class="close"
        >X</div>
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
                v-model="user.phone"
                :placeholder="'请输入手机号'"
                :class="{ 'red-border': phoneInvalid }"
                @blur="checkPhone()"
                prefix-icon="el-icon-user-solid"
              ></el-input>
              <p>{{ phoneInvalidMsg }}</p>
            </div>
            <div class="phone_input">
              <el-input
                v-model="user.password"
                :class="{'red-border': passwordInvalid}"
                @keyup.enter.native="login"
                @blur="checkPassword()"
                prefix-icon="el-icon-lock"
                placeholder="请输入密码(6位以上，字母和数字组合)"
                type="password"
                autocomplete="new-password"
              >
              </el-input>
              <p>{{ passwordInvalidMsg }}</p>
            </div>
            <div class="btn">
              <el-button
                @click="login"
                type="primary"
              >登 录</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SET_LOGIN, SET_MODALTYPE } from '~/utils/mutation-types'
import { transform } from '~/assets/js/transform'

export default {
  /* layout : "blog" */
  data() {
    return {
      user: {
        phone: '',
        password: ''
      },
      phoneInvalid: false,
      phoneInvalidMsg: '',
      passwordInvalid: false,
      passwordInvalidMsg: '',
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
      if (!this.user.phone) {
        this.phoneInvalid = true
        this.phoneInvalidMsg = '请输入手机号码'
        return false
      }
      if (!/^1[3456789]\d{9}$/.test(this.user.phone)) {
        this.phoneInvalid = true
        this.phoneInvalidMsg = '请输入正确的手机号'
        return false
      }
      this.clearPhone()
      return true
    },
    checkPassword() {
      if (!this.user.password) {
        this.passwordInvalid = true
        this.passwordInvalidMsg = '密码不可为空！'
        return false
      }
      if (!/[\w]{6,16}/.test(this.user.password)) {
        this.passwordInvalid = true
        this.passwordInvalidMsg = '请输入正确密码格式(英文/字母/下划线)'
        return false
      }
      this.clearPassword()
      return true
    },
    clearPhone() {
      this.phoneInvalid = false
      this.phoneInvalidMsg = ''
    },
    clearPassword() {
      this.passwordInvalid = false
      this.passwordInvalidMsg = ''
    },
    clear() {
      this.clearPhone()
      this.clearPassword()
    },
    close() {
      this.$store.commit(SET_LOGIN, false)
    },
    async login() {
      if (!this.checkPhone()) {
        return
      }
      if (!this.checkPassword()) {
        return
      }

      try {
        // const { data: token } = await this.$axios.post(
        //   `/login`,
        //   transform(this.user)
        // )

        const data = await this.$axios.post(`/login`, transform(this.user))
        console.log(data)
      } catch (err) {
        console.log('find err:' + err)
        this.$message.warning(err)
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
      .close {
        right: 1em;
        top: 1em;
        font-size: 1em;
        font-weight: bold;
        position: absolute;
        color: #666;
        cursor: pointer;
      }
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
        .btn {
          .el-button {
            width: 100%;
            height: 2.625em;
            font-size: 1em;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
