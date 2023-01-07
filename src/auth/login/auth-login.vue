<template>
  <div class="auth-login">
    <div class="form">
      <h1 class="header">用户登陆</h1>
      <div class="field">
        <input
          class="input text"
          type="text"
          placeholder="用户名"
          v-model="name"
        />
      </div>
      <div class="field">
        <input
          class="input text"
          type="password"
          placeholder="密码"
          v-model="password"
        />
      </div>
      <div class="field">
        <button class="button large" @click="onClickLoginButton">登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthLogin',

  title() {
    return '用户登陆';
  },

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      name: '',
      password: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {},

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
    onClickLoginButton() {
      console.log(this.name, this.password);
    },
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
.auth-login {
  max-width: 250px;
  margin: 0 auto;
  padding: 32px;
}
</style>
