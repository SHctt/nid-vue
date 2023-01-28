<template>
  <div class="post-meta">
    <div class="actions">
      <router-link class="link" :to="previewLinkTo">
        → 查看“<i> {{ post.title }} </i>”
      </router-link>
    </div>
    <div class="meta">
      <user-avatar :user="post.user" link="user" />
      <user-name :user="post.user" />
    </div>
  </div>
</template>

<script>
import UserAvatar from '@/user/components/user-avatar.vue';
import UserName from '@/user/components/user-name.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostMeta',

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
  computed: {
    previewLinkTo() {
      return {
        name: 'postShow',
        params: {
          postId: this.post.id,
        },
      };
    },
  },

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
  components: {
    UserAvatar,
    UserName,
  },
});
</script>

<style scoped>
@import './styles/post-meta.css';
</style>
