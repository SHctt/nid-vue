<template>
  <component :is="layout"><router-view></router-view></component>
</template>

<script>
import AppLayout from '@/app/layout/app-layout.vue';

export default {
  components: { AppLayout },
  data() {
    return {
      name: 'Vue.js 项目实践：准备项目',
      layout: 'AppLayout',
    };
  },

  created() {
    console.log(this.$store.state);
  },
};
</script>

<style>
@import './styles/normalize.css';
@import './styles/app.css';
</style>
