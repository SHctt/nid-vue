<template>
  <div class="user-show" v-if="user">
    <div class="user-show-header">
      <user-avatar :user="user" size="large" />
      <user-name :user="user" size="large" />
    </div>
    <user-show-menu :user="user" />
    <div class="user-show-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import UserAvatar from '@/user/components/user-avatar.vue';
import UserName from '@/user/components/user-name.vue';
import UserShowMenu from '@/user/show/components/user-show-menu.vue';

export default defineComponent({
  name: 'UserShow',

  /**
   * 属性
   */
  props: {
    userId: String,
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
      user: 'user/show/user',
    }),
  },

  watch: {
    // 当前用户的变化
    userId() {
      this.getUserById(this.userId);
    },
  },

  /**
   * 已创建
   */
  created() {
    //获取当前用户数据
    this.getUserById(this.userId);

    if (window) {
      window.addEventListener('scroll', this.onScrollWindow);
    }
  },

  unmounted() {
    if (window) {
      window.removeEventListener('scroll', this.onScrollWindow);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      getUserById: 'user/show/getUserById',
    }),
    ...mapMutations({
      setTouchdown: 'user/show/setTouchdown',
    }),

    onScrollWindow() {
      if (document) {
        const {
          scrollTop,
          scrollHeight,
          clientHeight,
        } = document.documentElement;

        if (clientHeight + scrollTop === scrollHeight) {
          this.setTouchdown(true);
        }
      }
    },
  },

  /**
   * 使用组件
   */
  components: { UserAvatar, UserName, UserShowMenu },
});
</script>

<style scoped>
@import './styles/user-show.css';
</style>
