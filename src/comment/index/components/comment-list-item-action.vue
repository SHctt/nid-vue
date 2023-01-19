<template>
  <div class="comment-list-item-action">
    <div class="action" v-if="item.totalReplies">
      <button class="button basic" @click="onClickTotalRepliesButton">
        {{ item.totalReplies }}条回复
        <app-icon :name="totalRepliesIconName" />
      </button>
    </div>
    <div class="action" v-if="showOwnCommentOpration">
      <button class="button basic" @click="onClickDeleteButton">
        {{ deleteButtonText }}
      </button>
    </div>
    <div class="action" v-if="showOwnCommentOpration">
      <button class="button basic" @click="onClickUpdateButton">
        {{ updateButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/app/components/app-icon.vue';
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default defineComponent({
  name: 'CommentListItemAction',

  /**
   * 事件
   */
  emits: ['toggle-replies', 'editing'],

  /**
   * 属性
   */
  props: {
    item: {
      type: Object,
    },
    showOperation: {
      type: Boolean,
    },
    isEditing: {
      type: Boolean,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      showReplies: false,
      confirmDelete: false,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),

    totalRepliesIconName() {
      return this.showReplies ? 'arrow_drop_up' : 'arrow_drop_down';
    },

    showOwnCommentOpration() {
      return (
        this.currentUser &&
        this.currentUser.id === this.item.user.id &&
        this.showOperation
      );
    },

    deleteButtonText() {
      return this.confirmDelete ? '确认删除' : '删除';
    },

    updateButtonText() {
      return this.isEditing ? '取消编辑' : '编辑';
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
  methods: {
    ...mapActions({
      pushMessage: 'notification/pushMessage',
      deleteComment: 'comment/destroy/deleteComment',
    }),
    ...mapMutations({
      removeCommentListItem: 'comment/index/removeCommentListItem',
    }),
    onClickTotalRepliesButton() {
      this.showReplies = !this.showReplies;
      this.$emit('toggle-replies', this.showReplies);
    },

    async onClickDeleteButton() {
      if (this.confirmDelete) {
        try {
          await this.deleteComment({ commentId: this.item.id });

          this.removeCommentListItem(this.item.id);
        } catch (error) {
          this.pushMessage({ content: error.data.message });
        }
      }

      this.confirmDelete = !this.confirmDelete;
    },

    onClickUpdateButton() {
      this.$emit('editing');
    },
  },

  /**
   * 使用组件
   */
  components: { AppIcon },
});
</script>

<style scoped>
@import './styles/comment-list-item-action.css';
</style>
