<template>
  <div :class="['page', theme]">
    <PageHeader />
    <PageAside />
    <div class="page-main">
      <slot></slot>
      <page-side-sheet @scroll="onScrollPageSideSheet" ref="pageSideSheet" />
    </div>
    <app-notification />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import { getStorage } from '@/app/app.service';
import PageHeader from './components/page-header.vue';
import PageAside from './components/page-aside.vue';
import AppNotification from '@/app/notification/app-notification.vue';
import PageSideSheet from '@/app/layout/components/page-side-sheet.vue';

export default defineComponent({
  name: 'AppLayout',

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
  computed: {
    ...mapGetters({
      theme: 'layout/theme',
    }),
  },

  /**
   * 已创建
   */
  created() {
    const theme = getStorage('theme');

    if (theme) {
      this.setTheme(theme);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapMutations({
      setTheme: 'layout/setTheme',
      setSideSheetTouchDown: 'layout/setSideSheetTouchDown',
    }),

    onScrollPageSideSheet() {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = this.$refs.pageSideSheet.$el;

      if (scrollTop + clientHeight === scrollHeight) {
        this.setSideSheetTouchDown(true);
      }
    },
  },

  /**
   * 使用组件
   */
  components: { PageHeader, PageAside, AppNotification, PageSideSheet },
});
</script>

<style scoped></style>
