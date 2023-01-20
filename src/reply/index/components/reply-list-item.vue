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
      <reply-list-item-actions :item="item" :showOperation="showOperation" />
    </div>
  </div>
</template>

<script>
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
  },

  /**
   * 数据
   */
  data() {
    return {
      showOperation: false,
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
  },

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
    ReplyListItemMeta,
    ReplyListItemContent,
    ReplyListItemActions,
  },
});
</script>

<style scoped>
@import './styles/reply-list-item.css';
</style>
