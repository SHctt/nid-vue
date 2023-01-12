<template>
  <div class="user-menu">
    <close-button @click="$emit('close')" />
  </div>
</template>

<script>
import CloseButton from '@/app/components/close-button.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserMenu',

  /**
   * 事件
   */
  emits: ['close'],

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
    //keyup事件
    if (window) {
      window.addEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 取消挂载
   */
  unmounted() {
    //keyup事件
    if (window) {
      window.removeEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    onKeyUpWindow(event) {
      if (event.key === 'Escape') {
        this.$emit('close');
      }
    },
  },

  /**
   * 使用组件
   */
  components: { CloseButton },
});
</script>

<style scoped>
@import './styles/user-menu.css';
</style>
