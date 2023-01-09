<template>
  <div>首页</div>
  <div v-if="isLoggedIn">欢迎回来,{{ isLoggedIn }}</div>
  <button class="button" @click="onClickOnPushMessageButton">
    Push Message
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },

  methods: {
    ...mapActions({
      pushMessage: 'notification/pushMessage',
    }),

    onClickOnPushMessageButton() {
      this.pushMessage({ content: '空山新雨后，天气晚来秋', icon: 'cloud' });
    },
  },
};
</script>
