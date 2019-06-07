<template>
  <div id="app">
    <Header></Header>
    <div>
      <recommend></recommend>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Header from './components/header/header'
import recommend from './components/recommend/recommend'

  export default {
    name: 'ele-vue-learning',
    components:{Header,recommend}
    
  }
</script>

<style>
  /* CSS */
</style>
