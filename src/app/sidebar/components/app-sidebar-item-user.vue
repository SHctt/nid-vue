<template>
  <div class="app-sidebar-item user">
    <user-avatar
      :user="currentUser"
      :link="userAvatarLink"
      @click="onClickUserAvatar"
    />
    <transition name="user-menu">
      <user-menu v-if="userMenuShow" @close="userMenuShow = false" />
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import UserAvatar from '@/user/components/user-avatar.vue';
import UserMenu from '@/user/components/user-menu.vue';

export default defineComponent({
  name: 'AppSidebarItemUser',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      userMenuShow: false,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),

    userAvatarLink() {
      return this.currentUser ? null : 'login';
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
    onClickUserAvatar() {
      if (this.currentUser) {
        // 点击显示用户菜单
        this.userMenuShow = !this.userMenuShow;
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
    UserMenu,
  },
});
</script>

<style scoped></style>
