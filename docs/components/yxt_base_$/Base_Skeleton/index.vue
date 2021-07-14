<template>
  <div
    class="bs--skeleton"
    :style="{ background: bgColor, paddingBottom, width }"
  ></div>
</template>

<script>
export default {
  name: 'BaseSkeleton',
  props: {
    proportion: {
      type: Number,
      default: 1,
    }, // h : w
    bgColor: {
      type: String,
      default: '#b4bccc',
    },
    width: {
      type: String,
<<<<<<< HEAD
      default: '100%'
    },
    height: {
<<<<<<< HEAD:docs/components/yxt_base_$/Base_Skeleton/index.vue
      type: [String, Boolean],
      default: false
    }
  },
  data() {
    return {
      paddingBottom: this.height || `${this.proportion * 100}%`
    };
  }
=======
=======
      default: '100%',
    },
    height: {
>>>>>>> 8915056971d47ea90443f0062bb319a835f913e6
      type: [ String, Boolean ],
      default: false,
    },
  },
  data() {
    return {
      paddingBottom: this.height || `${ this.proportion * 100 }%`,
    };
  },
<<<<<<< HEAD
>>>>>>> 8915056971d47ea90443f0062bb319a835f913e6:packages/Base_Skeleton/src/BaseSkeleton.vue
=======
>>>>>>> 8915056971d47ea90443f0062bb319a835f913e6
};
</script>
