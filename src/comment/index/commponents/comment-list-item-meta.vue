<template>
  <div class="comment-list-item-meta">
    <user-name :name="item.user" />
  </div>
</template>

<script>
import UserName from '@/user/components/user-name.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommentListItemMeta',

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
  components: { UserName },
});
</script>

<style scoped>
@import './styles/comment-list-item-meta.css';
</style>
