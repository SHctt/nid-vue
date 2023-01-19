<template>
  <div class="post-show-action">
    <div class="action">
      <div class="icon">
        <app-icon name="favorite" />
      </div>
      <div class="text">
        {{ post.totalLikes }}
      </div>
    </div>
    <div class="action">
      <div class="icon">
        <button class="button basic" @click="onClickCommentButton">
          <app-icon name="comment" />
        </button>
      </div>
      <div class="text">
        {{ post.totalComments }}
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/app/components/app-icon.vue';
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  name: 'PostShowAction',

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
    ...mapGetters({
      sideSheetComponent: 'layout/sideSheetComponent',
    }),
  },

  /**
   * 已创建
   */
  created() {
    //
    if (this.setSideSheetComponent) {
      this.setSideSheetProps({
        filter: {
          post: this.post.id,
        },
      });
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapMutations({
      setSideSheetComponent: 'layout/setSideSheetComponent',
      resetSideSheet: 'layout/resetSideSheet',
      setSideSheetProps: 'layout/setSideSheetProps',
    }),

    onClickCommentButton() {
      if (this.sideSheetComponent) {
        this.resetSideSheet();
      } else {
        this.setSideSheetComponent('CommentSideSheet');

        this.setSideSheetProps({
          filter: { post: this.post.id }, //修复post-show页面上评论列表的错误
        });
      }
    },
  },

  /**
   * 使用组件
   */
  components: { AppIcon },
});
</script>

<style scoped>
@import './styles/post-show-action.css';
</style>
