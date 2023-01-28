<template>
  <div class="post-show-header">
    <div class="content">
      <h1 class="text" @click="onClickPostTitle">
        {{ post.title }}
      </h1>
      <div class="meta">
        <user-name :user="post.user" />
      </div>
    </div>
    <div class="thumbnail">
      <user-avatar :user="post.user" size="medium" />
    </div>
  </div>
</template>

<script>
import UserAvatar from '@/user/components/user-avatar.vue';
import UserName from '@/user/components/user-name.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostShowHeader',

  emits: ['click'],
  /**
   * 属性
   */
  props: {
    post: {
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
  methods: {
    onClickPostTitle() {
      this.$emit('click');
    },
  },

  /**
   * 使用组件
   */
  components: { UserName, UserAvatar },
});
</script>

<style scoped>
@import './styles/post-show-header.css';
</style>
