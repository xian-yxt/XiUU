<template>
  <button
    @click="$emit('click')"
    class="w__button"
    :disabled="disabled"
    :class="[
    'w__button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'w__button--size-'+size
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
export default{
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  },
<<<<<<< HEAD
  data() {
    return {
      msg: 'button'
    };
  }
};
=======
  data () {
    return {
      msg: 'button'
    }
  }
}
>>>>>>> 8915056971d47ea90443f0062bb319a835f913e6
</script>
