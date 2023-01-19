<template>
  <div class="comment-list-item">
    <div class="thumbnail">
      <user-avatar :user="item.user" link="user" />
    </div>
    <div class="content">
      <comment-list-item-meta :item="item" />
      <comment-list-item-content
        :item="item"
        @click="onClickCommentListItemContent"
        v-if="!isEditing"
      />
      <comment-edit v-if="isEditing" :comment="item" />
      <comment-list-item-action
        :item="item"
        @toggle-replies="onToggleReplies"
        :showOperation="showOperation"
        @editing="onEditingComment"
        :isEditing="isEditing"
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
import CommentEdit from '@/comment/edit/comment-edit.vue';

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
      showOperation: false,
      isEditing: false,
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

    onClickCommentListItemContent() {
      this.showOperation = !this.showOperation;
    },

    onEditingComment() {
      this.isEditing = !this.isEditing;
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
    CommentEdit,
  },
});
</script>

<style scoped>
@import './styles/comment-list-item.css';
</style>
