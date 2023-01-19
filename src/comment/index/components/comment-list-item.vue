<template>
  <div class="comment-list-item">
    <div class="thumbnail">
      <user-avatar :user="item.user" link="user" />
    </div>
    <div class="content">
      <comment-list-item-meta :item="item" />
      <comment-list-item-content :item="item" />
      <comment-list-item-action
        :item="item"
        @toggle-replies="onToggleReplies"
      />
      <reply-index :comment="item" v-if="showReplies" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CommentListItemContent from './comment-list-item-content.vue';
import CommentListItemMeta from './comment-list-item-meta.vue';
import UserAvatar from '@/user/components/user-avatar.vue';
import CommentListItemAction from './comment-list-item-action.vue';
import ReplyIndex from '@/reply/index/reply-index.vue';

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
    return {
      showReplies: false,
    };
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
    onToggleReplies(data) {
      this.showReplies = data;
    },
  },

  /**
   * 使用组件
   */
  components: {
    CommentListItemMeta,
    UserAvatar,
    CommentListItemContent,
    CommentListItemAction,
    ReplyIndex,
  },
});
</script>

<style scoped>
@import './styles/comment-list-item.css';
</style>
