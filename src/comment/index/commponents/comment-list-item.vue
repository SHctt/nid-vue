<template>
  <div class="comment-list-item">
    <div class="thumbnail">
      <user-avatar :user="item.user" link="user" />
    </div>
  </div>
</template>

<script>
import UserAvatar from '@/user/components/user-avatar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommentListItem',

  /**
   * 属性
   */
  props: {
    item:{
      type:Object,
    }
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
  components: {},
});
</script>

<
    UserAvatarstyle scoped>
@import './styles/comment-list-item.css';
</style>
