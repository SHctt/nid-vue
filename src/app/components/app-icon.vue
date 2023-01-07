<template>
  <i :class="appIconClasses" :style="appIconStyles">{{ this.name }}</i>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'AppIcon',

  /**
   * 属性
   */
  props: {
    name: {
      type: String,
      default: 'favorite',
    },

    size: {
      type: [String, Number],
      default: '24',
    },

    color: {
      type: String,
    },
  },

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
    appIconClasses() {
      return 'app-icon';
    },
    appIconStyles() {
      const color = this.color
        ? this.color
        : this.theme === 'dark'
        ? '#585858'
        : '#000000';
      return {
        fontSize: this.size + 'px',
        width: this.size + 'px',
        color: color,
      };
    },
  },

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
  components: {},
});
</script>

<style scoped>
@import './styles/app-icon.css';
</style>
