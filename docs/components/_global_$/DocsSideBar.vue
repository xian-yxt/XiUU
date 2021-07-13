<template>
  <div class="side-nav">
    <div
      v-for="title in Object.keys(data)"
      :key="title.name"
      class="group-container"
    >
      <p class="side-nav-title">{{ title }}</p>
      <template v-for="(nav, idx) in data[title]">
        <div v-if="nav.desc" class="side-nav-items" :key="idx">
          <router-link
            :class="$route.name === nav.name ? 'active' : ''"
            v-if="nav.name"
            :to="{ name: nav.name }"
            >{{ nav.desc }}</router-link
          >
          <p v-else class="side-nav-group">{{ nav.desc }}</p>
          <div v-for="item in nav.items" :key="item.name">
            <router-link
              :to="{ name: item.name }"
              :class="$route.name === item.name ? 'active' : ''"
              class="slid-nav-component"
              >{{ item.desc }}</router-link
            >
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import routerConfig from '@/router/router.config.json';
export default {
  data() {
    return {
      data: routerConfig
    };
  }
};
</script>
<style lang="less" type="text/less" scoped>
.side-nav {
  display: inline-block;
  margin: 32px 0;
  padding: 0;
  color: #3f536e;
  background-color: #fff;
  z-index: 99;

  .group-container {
    margin-bottom: 32px;
  }

  .side-nav-title {
    padding: 0 24px 8px;
    color: #8dabc4;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .side-nav-items {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;

    a {
      display: block;
      position: relative;
      padding: 8px 24px;
      color: #3f536e;
      font-weight: normal;
      line-height: 1.5;
      cursor: pointer;
    }

    .side-nav-group {
      display: block;
      position: relative;
      padding: 6px 0 6px 24px;
      color: #2c405a;
      font-weight: bold;
    }

    .slid-nav-component {
      display: block;
      position: relative;
      padding: 6px 24px 6px 32px;
      color: #616367;
      font-size: 14px;
    }

    .active {
      color: #3faaf5;
    }
  }
}
</style>
