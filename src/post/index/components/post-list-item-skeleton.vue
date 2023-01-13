<template>
  <div :class="postListItemClasses">
    <div class="post-list-item">
      <div class="post-list-item-media"></div>
      <div :class="showPostListItemContent">
        <div class="thumbnail"></div>
        <div class="deader">
          <div class="text"></div>
          <div class="meta"></div>
        </div>
        <div class="actions">
          <div class="action"></div>
          <div class="action"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostListItemSkeleton',

  /**
   * 属性
   */
  props: {},

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
      layout: 'post/index/layout',
    }),

    postListItemClasses() {
      return ['post-list-item', 'skeleton', this.layout];
    },

    showPostListItemContent() {
      return !this.layout.includes('-minimal');
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
  components: {},
});
</script>

<style scoped></style>
