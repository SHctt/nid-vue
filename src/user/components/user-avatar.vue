<template>
  <div :class="userAvatarClasses">
    <router-link class="link" :to="userAvatarLinkTo" v-if="link">
      <img class="image" :src="userAvatarSource" @load="onLoadImg" />
    </router-link>
    <img v-else class="image" :src="userAvatarSource" />
  </div>
</template>

<script>
import { API_BASE_URL } from '@/app/app.config';
import { mapGetters } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserAvatar',

  /**
   * 属性
   */
  props: {
    user: {
      type: Object,
    },

    size: {
      type: String,
      default: 'small',
    },

    link: {
      type: String,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      loading: true,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      avatarPreviewImage: 'user/account/avatarPreviewImage',
      currentUser: 'user/currentUser',
    }),
    userAvatarClasses() {
      return [
        'user-avatar',
        this.size,
        { fade: !this.isLoggedIn && !this.user }, //未登陆时淡化头像样式
        { loading: this.loading },
      ];
    },

    userAvatarSource() {
      let avatarSource;

      if (this.user && this.user.avatar) {
        avatarSource = `${API_BASE_URL}/users/${this.user.id}/avatar?size=${this.size}`;
      } else {
        avatarSource = '/icons/account-black-32px.svg';
      }

      if (
        this.currentUser &&
        this.currentUser.id === this.user.id &&
        this.avatarPreviewImage
      ) {
        avatarSource = this.avatarPreviewImage;
      }
      return avatarSource;
    },

    userAvatarLinkTo() {
      let linkTo;

      if (this.link === 'login' && !this.isLoggedIn) {
        linkTo = { name: 'login' };
      } else if (this.user) {
        linkTo = {
          name: 'userPosts',
          params: { userId: this.user.id },
        };
      } else {
        linkTo = '/';
      }

      return linkTo;
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
    onLoadImg() {
      this.loading = false;
    },
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/user-avatar.css';
</style>
