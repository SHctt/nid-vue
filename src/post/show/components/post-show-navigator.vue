<template>
  <div class="post-show-navigator">
    <button class="button basic" @click="onClickBackButton">
      <app-icon name="arrow_back" />
    </button>
    <button class="button basic" @click="onClickForwardButton">
      <app-icon name="arrow_forward" />
    </button>
  </div>
</template>

<script>
import AppIcon from '@/app/components/app-icon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostShowNavigator',

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
  methods: {
    onClickBackButton() {
      console.log('back');
    },

    onClickForwardButton() {
      console.log('forward');
    },
  },

  /**
   * 使用组件
   */
  components: { AppIcon },
});
</script>

<style scoped>
@import './styles/post-show-navigator.css';
</style>
