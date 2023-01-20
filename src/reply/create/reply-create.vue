<template>
  <div class="reply-create">
    <div class="thumbnail">
      <user-avatar :user="currentUser" />
    </div>
    <div class="content">
      <textarea-field
        placeholder="回复评论"
        v-model="content"
        @keydown="onKeyDownReplyTextarea"
      />
      <div class="actions">
        <button class="button pill" @click="onClickCancelButton">取消</button>
        <button class="button pill" @click="onClickReplyButton">回复</button>
      </div>
    </div>
  </div>
</template>

<script>
import TextareaField from '@/app/components/textarea-field.vue';
import UserAvatar from '@/user/components/user-avatar.vue';
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default defineComponent({
  name: 'ReplyCreate',

  emits: ['replied'],
  /**
   * 属性
   */
  props: {
    comment: {
      type: Object,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      content: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),
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
  methods: {
    ...mapMutations({}),
    ...mapActions({
      pushMessage: 'notification/pushMessage',
      createReply: 'reply/create/createReply',
    }),

    async submitReply() {
      if (!this.content.trim()) return;

      try {
        await this.createReply({
          commentId: this.comment.id,
          postId: this.comment.post.id,
          content: this.content,
        });

        this.content = '';

        this.$emit('replied', this.comment.id);
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    onClickCancelButton() {
      this.content = '';
    },

    onClickReplyButton() {
      this.submitReply();
    },

    onKeyDownReplyTextarea(event) {
      if (
        (event.ctrlKey && event.key === 'Enter') ||
        (event.metaKey && event.key === 'Enter')
      ) {
        this.submitReply();
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/reply-create.css';
</style>
