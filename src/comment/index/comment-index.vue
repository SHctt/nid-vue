<template>
  <div class="comment-index">
    <comment-list :filter="filter" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import CommentList from './commponents/comment-list.vue';

export default defineComponent({
  name: 'CommentIndex',

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
      sideSheetProps: 'layout/sideSheetProps',
    }),

    filter() {
      console.log(this.sideSheetProps);
      return this.sideSheetProps;
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
  components: { CommentList },
});
</script>

<style scoped>
@import './styles/comment-index.css';
</style>
