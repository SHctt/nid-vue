<template>
  <div class="comment-list-item-action">
    <div class="action">
      <button class="button basic">{{ item.totalReplies }}条回复</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommentListItemAction',

  /**
   * 属性
   */
  props: {
    tpye: {
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
  components: {},
});
</script>

<style scoped>
@import './styles/comment-list-item-action.css';
</style>
