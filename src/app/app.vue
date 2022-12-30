<template>
  <h3>
    <router-link to="/">{{ name }}</router-link>
  </h3>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      name: 'Vue.js 项目实践：准备项目',
    };
  },

  created() {
    console.log(this.$store.state);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
