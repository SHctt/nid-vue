<template>
  <div class="reply-create">
    <div class="thumbnail">
      <user-avatar :user="currentUser" />
    </div>
    <div class="content">
      <textarea-field />
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
    ...mapActions({}),

    onClickCancelButton() {
      console.log('cancel');
    },

    onClickReplyButton() {
      console.log('reply');
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
