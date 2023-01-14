<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import AppLayout from '@/app/layout/app-layout.vue';
import { getStorage } from './app.service';

export default {
  components: { AppLayout },
  data() {
    return {
      name: '文件处理',
      layout: 'AppLayout',
    };
  },

  methods: {
    ...mapMutations({
      setToken: 'auth/setToken',
    }),

    ...mapActions({
      getCurrentUser: 'user/getCurrentUser',
      configApiHttpClientAuthHeader: 'auth/configApiHttpClientAuthHeader',
    }),
  },

  created() {
    // 用户令牌
    const token = getStorage('nid');

    if (token) {
      this.setToken(token);
      this.configApiHttpClientAuthHeader(token);
    }

    // 当前用户
    const userId = getStorage('uid');

    if (userId) {
      this.getCurrentUser(userId);
    }
    console.log(this.$store.state);
  },
};
</script>

<style>
@import './styles/normalize.css';
@import './styles/app.css';
@import './styles/page.css';
@import './styles/base.css';
@import './styles/theme.css';
@import './styles/form.css';
@import './styles/button.css';
</style>
