<template>
  <div class="comment-side-sheet">
    <comment-index />
    <CommentCreate />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CommentIndex from '../index/comment-index.vue';
import CommentCreate from '@/comment/create/comment-create';

export default defineComponent({
  name: 'CommentSideSheet',

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
    CommentIndex,
    CommentCreate,
  },
});
</script>

<style scoped>
@import './styles/comment-side-sheet.css';
</style>
