<template>
  <div class="reply-list-item">
    <div class="thumbnail">
      <user-avatar :user="item.user" link="user" />
    </div>
    <div class="content">
      <reply-list-item-meta :item="item" />
      <reply-list-item-content
        :item="item"
        @click="onClickReplyListItemContent"
      />
      <reply-list-item-actions
        :item="item"
        :showOperation="showOperation"
        :comment="comment"
        :isEditing="isEditing"
        @editing="onEditingReply"
      />
      <comment-edit v-if="isEditing" :comment="item" @updated="onUpdateReply" />
    </div>
  </div>
</template>

<script>
import CommentEdit from '@/comment/edit/comment-edit.vue';
import UserAvatar from '@/user/components/user-avatar.vue';
import { defineComponent } from 'vue';
import ReplyListItemActions from './reply-list-item-actions.vue';
import ReplyListItemContent from './reply-list-item-content.vue';
import ReplyListItemMeta from './reply-list-item-meta.vue';

export default defineComponent({
  name: 'ReplyListItem',

  /**
   * 属性
   */
  props: {
    item: {
      type: Object,
    },

    comment: {
      type: Object,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      showOperation: false,
      isEditing: false,
      reply: this.item,
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
    onClickReplyListItemContent() {
      this.showOperation = !this.showOperation;
    },

    onEditingReply() {
      this.isEditing = !this.isEditing;
    },

    onUpdateReply(data) {
      this.reply.content = data;
      this.isEditing = false;
    },
  },

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
    ReplyListItemMeta,
    ReplyListItemContent,
    ReplyListItemActions,
    CommentEdit,
  },
});
</script>

<style scoped>
@import './styles/reply-list-item.css';
</style>
