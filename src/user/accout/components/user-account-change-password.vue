<template>
  <div class="user-account-change-password">
    <div class="form">
      <h2 class="header">修改密码</h2>
      <text-field v-model="newPassword" placeholder="新密码" type="password" />
      <text-field
        v-if="newPassword"
        v-model="password"
        type="password"
        placeholder="请输入当前密码验证"
      />
      <button-field text="确认" size="large" @click="onClickSubmitButton" />
    </div>
  </div>
</template>

<script>
import ButtonField from '@/app/components/button-field.vue';
import TextField from '@/app/components/text-field.vue';
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'UserAccountChangePassword',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      password: '',
      newPassword: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
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
      pushMessage: 'notification/pushMessage',
      updateUserAccount: 'user/account/updateUserAccount',
    }),

    async onClickSubmitButton() {
      if (!this.newPassword) {
        this.pushMessage({ content: '请输入新密码！～' });
      }

      try {
        await this.updateUserAccount({
          userId: this.currentUser.id,
          body: {
            update: { password: this.newPassword },
            validate: { password: this.password },
          },
        });

        this.pushMessage({ content: '修改密码成功！～' });
        this.newPassword = '';
        this.password = '';
      } catch (error) {
        this.pushMessage({ content: error.data.message });
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
.user-account-change-password {
  margin-top: 32px;
}
</style>
