<template>
  <div>
    <Banner :banner-list="bannerList||[]" />
    <Hot
      :ad-new-list="adNewList||[]"
      :ad-hot-list="adHotList||[]"
    />
  </div>
</template>

<script>
import Banner from '~/components/Banner'
import Hot from '~/components/Hot'
export default {
  components: { Banner, Hot },
  data() {
    return {
      bannerList: [
        {
          seqNo: '1',
          id: 1,
          link: '/',
          img: '/img/banners/banner1.jpg',
          title: '你来打我呀'
        },
        {
          seqNo: '2',
          id: 2,
          link: '/',
          img: '/img/banners/banner2.jpg',
          title: '你不服不行'
        }
      ],
      adNewList: [
        {
          seqNo: '1',
          title: 'Docker+Jenkins+Asp.net Core实战部署',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 1
        },
        {
          seqNo: '2',
          title: '.Net技术栈微服务探索',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 2
        },
        {
          seqNo: '3',
          title: 'Redis使用场景探讨',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 3
        },
        {
          seqNo: '4',
          title: '消息队列使用场景探讨',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 4
        }
      ],
      adHotList: [
        {
          seqNo: '1',
          title: '.Net GC的秘密',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 1
        },
        {
          seqNo: '2',
          title: 'CQRS实战落地',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 2
        },
        {
          seqNo: '3',
          title: 'Aop切面工作模式探讨',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 3
        },
        {
          seqNo: '4',
          title: '.NET下的服务注册及发现组件',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 4
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variable.scss';
</style>
