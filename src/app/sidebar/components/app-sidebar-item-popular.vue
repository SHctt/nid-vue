<template>
  <div class="app-sidebar-item popular">
    <router-link class="link" :to="{ name: 'postIndexPopular' }">
      <app-icon name="local_fire_department" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppIcon from '@/app/components/app-icon.vue';

export default defineComponent({
  name: 'AppSidebarItemPopular',

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
  components: { AppIcon },
});
</script>

<style scoped></style>
