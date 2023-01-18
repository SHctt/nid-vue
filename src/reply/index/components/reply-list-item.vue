<template>
  <div class="reply-list-item">
    <div class="thumbnail">
      <user-avatar :user="item.user" link="user" />
    </div>
    <div class="content">
      <reply-list-item-meta :item="item" />
      <reply-list-item-content :item="item" />
    </div>
  </div>
</template>

<script>
import UserAvatar from '@/user/components/user-avatar.vue';
import { defineComponent } from 'vue';
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
  components: { UserAvatar, ReplyListItemMeta, ReplyListItemContent },
});
</script>

<style scoped>
@import './styles/reply-list-item.css';
</style>
