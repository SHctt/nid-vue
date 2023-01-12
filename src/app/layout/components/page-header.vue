<template>
  <div :class="['page-header', { shadow }]">
    <div class="container">
      <app-toolbar />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppToolbar from '@/app/toolbar/app-toolbar.vue';

export default defineComponent({
  name: 'PageHeader',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return { shadow: false };
  },

  /**
   * 计算属性
   */
  computed: {},

  /**
   * 已创建
   */
  created() {
    //组件创建后，监听窗口的滚动事件
    if (window) {
      window.addEventListener('scroll', this.onScrollWindow);
    }
  },

  /**
   * 取消挂载
   */
  unmounted() {
    //组件取消挂载后，取消监听窗口的滚动事件
    if (window) {
      window.removeEventListener('scroll', this.onScrollWindow);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    // 发生滚动事件
    onScrollWindow() {
      if (document) {
        const { scrollTop } = document.documentElement;
        this.shadow = scrollTop > 120 ? true : false;
      }
    },
  },

  /**
   * 使用组件
   */
  components: { AppToolbar },
});
</script>

<style scoped></style>
