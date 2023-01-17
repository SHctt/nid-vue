<template>
  <div class="comment-list-item">
    <div class="thumbnail">
      <user-avatar :user="item.user" link="user" />
    </div>
    <div class="content">
      <comment-list-item-meta :item="item.user" />
      <comment-list-item-content :item="item.user" />
    </div>
  </div>
</template>

<script>
import UserAvatar from '@/user/components/user-avatar.vue';
import { defineComponent } from 'vue';
import CommentListItemContent from './comment-list-item-content.vue';
import CommentListItemMeta from './comment-list-item-meta.vue';

export default defineComponent({
  name: 'CommentListItem',

  /**
   * 属性
   */
  props: {
    item: {
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
  components: { CommentListItemMeta, UserAvatar, CommentListItemContent },
});
</script>

<style scoped>
@import './styles/comment-list-item.css';
</style>
