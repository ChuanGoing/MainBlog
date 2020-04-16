<template>
  <div class="container">

    <Head />
    <nuxt />
    <Foot />
  </div>
</template>
<script>
import Head from '../components/Head'
import Foot from '../components/Foot'

export default {
  components: { Head, Foot }
}
</script>
