<template>
  <div class="auth-login">
    <div class="form">
      <h1 class="header">用户登陆</h1>
      <text-field placeholder="用户" v-model="name" />
      <text-field type="password" v-model="password" placeholder="密码" />
      <button-field text="登陆" size="large" @click="onClickLoginButton" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import TextField from '@/app/components/text-field.vue';
import ButtonField from '@/app/components/button-field.vue';

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
  computed: {
    ...mapGetters({
      loading: 'auth/login/loading',
      loginResponseData: 'auth/login/loginResponseData',
    }),
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
    ...mapActions({
      login: 'auth/login/login',
    }),

    async onClickLoginButton() {
      try {
        const response = await this.login({
          name: this.name,
          password: this.password,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },

  /**
   * 使用组件
   */
  components: { TextField, ButtonField },
});
</script>

<style scoped>
.auth-login {
  max-width: 250px;
  margin: 0 auto;
  padding: 32px;
}
</style>
