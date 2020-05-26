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
          link: 'http://www.cnblogs.com',
          img: '/img/banners/banner1.jpg',
          title: '你来打我呀'
        },
        {
          seqNo: '2',
          id: 2,
          link: 'https://www.cnblogs.com/ChuanGoing',
          img: '/img/banners/banner2.jpg',
          title: '你不服不行'
        }
      ],
      adNewList: [
        {
          seqNo: '1',
          title: '广告栏1',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 1
        },
        {
          seqNo: '2',
          title: '广告栏2',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 2
        },
        {
          seqNo: '3',
          title: '广告栏3',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 3
        },
        {
          seqNo: '4',
          title: '广告栏4',
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
          title: '广告栏1',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 1
        },
        {
          seqNo: '2',
          title: '广告栏2',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 2
        },
        {
          seqNo: '3',
          title: '广告栏3',
          img: '/img/默认2.ico',
          tags: 'tag1,tag2',
          link: '',
          adType: 1,
          id: 3
        },
        {
          seqNo: '4',
          title: '广告栏4',
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
