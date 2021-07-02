<template>
  <div class="main-skeleton">
    <BSSkeleton height="80px"></BSSkeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <BSSkeleton height="300px"></BSSkeleton>
        </div>
        <BSSkeleton height="45px"></BSSkeleton>
      </div>
      <div class="skeleton-bottom">
        <BSSkeleton height="45px"></BSSkeleton>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BSSkeleton',
  data() {
    return {
      msg: 'hello vue',
    };
  },
};
</script>
<style lang="less" type="text/less" scoped>
.skeleton-container {
  width: 960px;
  margin: 0 auto;
  text-align: center;
  padding: 100px 0;
}
.skeleton-bottom {
  width: 960px;
  margin: 0 auto;
  text-align: center;
}
.skeleton {
  margin: 0 auto;
  width: 300px;
  margin-bottom: 56px;
}
</style>
