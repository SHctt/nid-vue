<template>
  <div class="comment-edit">
    <textarea-field v-model="commentContent" />
    <div class="actions">
      <button class="button pill" @click="onClickCancelButton">取消</button>
      <button class="button pill" @click="onClickUpdateButton">更新</button>
    </div>
  </div>
</template>

<script>
import TextareaField from '@/app/components/textarea-field.vue';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'CommentEdit',

  /**
   * 事件
   */
  emits: ['updated'],

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
      commentContent: this.comment.content,
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
    ...mapActions({
      pushMessage: 'notification/pushMessage',
      updateComment: 'comment/edit/updateComment',
    }),

    onClickCancelButton() {
      this.commentContent = this.comment.content;
    },

    async onClickUpdateButton() {
      if (!this.commentContent.trim()) return;

      try {
        await this.updateComment({
          commentId: this.comment.id,
          content: this.commentContent,
        });

        this.$emit('updated', this.commentContent);
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/comment-edit.css';
</style>
