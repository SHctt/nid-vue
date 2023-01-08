<template>
  <div>首页</div>
  <div v-if="isLoggedIn">欢迎回来,{{ isLoggedIn }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
};
</script>
