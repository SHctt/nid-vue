<template>
  <div class="user-menu">
    <close-button @click="$emit('close')" />
    <div class="user-menu-header">
      <user-name :user="currentUser" v-if="currentUser" />
    </div>
    <div class="user-menu-footer">
      <button class="button block" @click="onClickLogoutButton">
        退出登陆
      </button>
    </div>
  </div>
</template>

<script>
import CloseButton from '@/app/components/close-button.vue';
import UserName from './user-name.vue';
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: 'UserMenu',

  /**
   * 事件
   */
  emits: ['close'],

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
    //keyup事件
    if (window) {
      window.addEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 取消挂载
   */
  unmounted() {
    //keyup事件
    if (window) {
      window.removeEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      logout: 'auth/logout',
    }),
    onKeyUpWindow(event) {
      if (event.key === 'Escape') {
        this.$emit('close');
      }
    },

    onClickLogoutButton() {
      this.$emit('close');
      this.logout();
    },
  },

  /**
   * 使用组件
   */
  components: { CloseButton, UserName },
});
</script>

<style scoped>
@import './styles/user-menu.css';
</style>
