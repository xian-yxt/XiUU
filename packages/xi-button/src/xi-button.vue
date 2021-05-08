<template>
  <div class="xi__button_box">
    <el-button class="xi__button" v-bind="$attrs" v-on="$listeners">{{msg}}</el-button>
  </div>
</template>
<script>
import ElButton from '@fm/elementui/button'
export default {
  name: 'XiButton',
  components: {
    ElButton
  },
  data() {
    return {
      msg: 'xibutton'
    }
  }
}
</script>
