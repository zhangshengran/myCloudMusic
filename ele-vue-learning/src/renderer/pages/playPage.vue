<template>
  <div class="container">
    <lyc :musicId="musicId"></lyc>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import lyc from '../components/musicLyc'
export default {
  components:{lyc},
  computed: {
    ...mapGetters(['musicId'])
  },

};
</script>
<style lang='scss' scoped>
@import "../assets/common/common.scss";
@import "../assets/common/icon.css";

.container {
  width: 100%;
}
</style>
 

