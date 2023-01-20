<template>
  <div class="user-comment">
    <comment-list :filter="filter" />
  </div>
</template>

<script>
import CommentList from '@/comment/index/components/comment-list.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserComments',

  /**
   * 属性
   */
  props: {
    filter: {
      type: Object,
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
  components: { CommentList },
});
</script>

<style scoped>
@import './styles/user-comments.css';
</style>
