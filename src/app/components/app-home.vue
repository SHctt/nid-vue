<template>
  <div>首页</div>
  <app-logo size="64" color="#6435c9" />
  <app-icon name="comment" color="#6435c9" size="64" />
</template>

<script>
import { defineComponent } from 'vue';
import AppLogo from './app-logo.vue';
import AppIcon from './app-icon.vue';

export default defineComponent({
  name: 'AppHome',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 计算属性
   */
  computed: {},

  /**
   * 已创建
   */
  created() {
    //
  },

  /**
   * 组件方法
   */
  methods: {},

  /**
   * 使用组件
   */
  components: {
    AppIcon,
    AppLogo,
  },
});
</script>

<style scoped></style>
