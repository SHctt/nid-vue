<template>
  <app-logo size="64" color="#6435c9" />
  <h3>
    <router-link to="/">{{ name }}</router-link>
  </h3>

  <router-view></router-view>
</template>

<script>
import AppLogo from './components/app-logo.vue';
export default {
  data() {
    return {
      name: 'Vue.js 项目实践：准备项目',
    };
  },

  created() {
    console.log(this.$store.state);
  },

  components: {
    AppLogo,
  },
};
</script>

<style>
@import './styles/normalize.css';
@import './styles/app.css';
</style>
