<script>
/*
代码示例：
<template>
  <div class="xi__button_box">
    <el-button class="xi__button" v-bind="$attrs" v-on="$listeners">
      <slot v-for="(name) in Object.keys($slots)"  :name="name" :slot="name"></slot>
    </el-button>
  </div>
</template>
*/
import ElButton from '@fm/elementui/button';
export default {
  name: 'BaseElButton',
  components: {
    ElButton
  },
  render (h) {
    return (
      <ElButton { ...{ props: this.$attrs,
        on: this.$listeners } } class="xi__button" scopedSlots={ this.$scopedSlots } slots={ this.$slots }>
        {
          Object.keys(this.$slots).map(name => {
            return h('div', this.$slots[name]);
          })
        }
      </ElButton>
    );
  }
};
</script>
