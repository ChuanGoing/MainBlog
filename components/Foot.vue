<template>
  <div class="foot">
    <div class="top">
      <div class="web">
        <div class="foot_logo">
          <img
            src="/img/foot_logo.png"
            alt
          />
        </div>
        <div class="guide">
          <p>引导指南</p>
          <div class="step">
            <p>
              <nuxt-link to="/howtoreg">如何注册</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/about">关于我们</nuxt-link>
            </p>
          </div>
        </div>
        <div class="contact">
          <div class="con_left">
            <p>联系我们</p>
            <div class="kind">
              <div class="wechat">
                <img
                  style="margin-right:4px;"
                  src="/img/wechat.png"
                  alt="微信"
                />微信<span>：peter1ccb</span>
              </div>
              <p><img
                  src="/img/phone.png"
                  alt="电话"
                />电话<span>：888-888-888</span></p>
              <p>
                <img
                  src="/img/mail.png"
                  alt="邮箱"
                />邮箱<span>：e370101152@aliyun.com</span>
              </p>
            </div>
          </div>
        </div>
        <div class="qrCode">
          <div>
            <img
              class="qrCode-small-icon"
              src="/img/bottom_qq.png"
              alt
            />
            <div class="joinUs">
              <img
                src="/img/qrcode/qq_share.png"
                alt
              />
            </div>
          </div>
          <div>
            <img
              class="qrCode-small-icon"
              src="/img/bottom_wechat.png"
              alt
            />
            <div class="focusUs">
              <img
                src="/img/qrcode/wechat_share.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="links">
      <div class="fri">
        友情链接：
        <span>|</span>
        <a
          href="https://www.cnblogs.com/"
          target="_blank"
        >基友园</a>
        <span>|</span>
        <a
          href="https://www.jianshu.com/"
          target="_blank"
        >简书</a>
      </div>
      <!-- <div class="apply">申请友链>></div> -->
    </div>
    <div class="bg">
      <div class="web">
        <p>
          <a
            href="http://www.beian.miit.gov.cn/"
            target="_blank"
            class="footer-record"
          >
            <img
              src="/img/record-icon.png"
              alt=""
            />
            <p>鄂ICP备20002592号</p>
          </a>
        </p>
        <p>
          所有版权均归 川流不息 所有
          <a
            href="http://www.beian.miit.gov.cn/"
            target="_blank"
            class="footer-cert"
          >
            鄂ICP备20002592号-1
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.foot {
  width: 100%;
  bottom: 0px;
  // position: absolute;
  .top {
    width: 100%;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    .web {
      display: flex;
      flex-direction: row;
      width: 1275px;
      .foot_logo {
        height: 2.125em;
        margin-top: 3.125em;
        margin-left: 2em;
        margin-right: 5em;
      }
      .guide {
        margin-right: 10.5em; // 7.5em;
        margin-top: 2.5em;
        cursor: pointer;
        > p {
          font-size: 1em;
          color: #333;
          font-weight: bold;
          margin-bottom: 1.25em;
        }
        .step {
          font-size: 0.875em;
          color: #666;
          text-align: center;
          p {
            margin-bottom: 1.125em;
            border-bottom: 1px solid #fff;
            &:hover {
              border-bottom: 1px solid #ccc;
            }
          }
          a {
            color: #666;
          }
        }
      }
      .contact {
        margin-top: 2.5em;
        display: flex;
        flex-direction: row;
        .con_left {
          > p {
            font-size: 1em;
            color: #333;
            font-weight: bold;
            margin-bottom: 1.25em;
          }
          .kind {
            font-size: 0.875em;
            color: #666;

            > p,
            > div {
              position: relative;
              margin-bottom: 1.125em;
              > span {
                color: rgba(102, 102, 102, 0.5);
                &:hover {
                  color: rgba(102, 102, 102, 1);
                }
              }
              > img {
                margin-right: 0.65em;
              }
            }
            // .wechat {
            //   &:hover {
            //     .con_right {
            //       display: block;
            //     }
            //   }
            // }
          }
        }
        .con_right {
          position: absolute;
          top: -100%;
          right: 0;
          display: none;
          margin-left: -5.625em;
        }
      }
      .qrCode {
        border-left: 1px solid #ccc;
        margin-left: 16.5em; // 7.5em;
        padding-left: 7.5em;
        margin-top: 2.5em;
        margin-bottom: 1.875em;
        display: flex;
        align-items: center;
        > div {
          position: relative;
          display: inline-block;
          margin-left: 40px;
          &:nth-of-type(1):hover .joinUs {
            display: block;
            animation: show 0.3s forwards;
          }
          &:nth-of-type(2):hover .focusUs {
            display: block;
            animation: show 0.3s forwards;
          }
        }
        @keyframes show {
          from {
            opacity: 0;
            bottom: 50px;
          }
          to {
            opacity: 1;
            bottom: 70px;
          }
        }
        .qrCode-small-icon {
          width: 60px;
          height: 60px;
        }
        .joinUs,
        .focusUs {
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          bottom: 60px;
          background-color: #fff;
          height: 105px;
          opacity: 0;
          display: none;
          background-size: cover;
          padding: 5px;
          border-radius: 10px;
          background-color: #fff;
          border: 1px solid #eee;
          &::before {
            position: absolute;
            bottom: -9px;
            content: ' ';
            left: 50%;
            transform: translate(-50%);
            border-left: 9px solid transparent;
            border-right: 9px solid transparent;
            border-top: 9px solid #eee;
          }
          &::after {
            position: absolute;
            bottom: -8px;
            content: ' ';
            left: 50%;
            transform: translate(-50%);
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid #fff;
          }
        }
      }
    }
  }
  .links {
    width: 1200px;
    height: 50px;
    font-size: 0.875em;
    color: #666;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .fri {
      span {
        margin: 0 5px;
      }
      a {
        color: #666;
      }
    }
    .apply {
      cursor: pointer;
    }
  }
  .bg {
    width: 100%;
    // height: 80px;
    background-color: #41444d;
    // padding-top: 30.5px;
    padding: 20px 0;
    .web {
      font-size: 0.875em;
      // height: 20px;
      color: rgba(225, 225, 225, 0.7);
      text-align: center;
      // p {
      //   margin-top: 30px;
      // }
    }
    .footer-record {
      display: inline-block;
      text-decoration: none;
      height: 20px;
      line-height: 20px;
      margin-bottom: 16px;
      img,
      p {
        display: inline-block;
        vertical-align: middle;
      }
      p {
        height: 20px;
        line-height: 20px;
        margin: 0px 0px 0px 5px;
        color: #939393;
      }
    }
    .footer-cert {
      padding-left: 16px;
      color: #c1c1c1;
    }
  }
}
</style>
