<template>
  <div class="user-account-change-name">
    <div class="form">
      <h2 class="header">修改名字</h2>
      <text-field v-model="newName" placeholder="输入新用户名" />
      <text-field
        v-if="newName"
        v-model="password"
        type="password"
        placeholder="密码验证"
      />
      <button-field text="提交" size="large" @click="onClickSubmitButton" />
    </div>
  </div>
</template>

<script>
import ButtonField from '@/app/components/button-field.vue';
import TextField from '@/app/components/text-field.vue';
import { mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserAccountChangeName',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      newName: '',
      password: '',
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
      if (!this.newName) {
        this.pushMessage({ content: '请输入用户名' });
      }

      try {
        await this.updateUserAccount({
          userId: this.currentUser.id,
          body: {
            update: {
              name: this.newName,
            },
            validate: {
              password: this.password,
            },
          },
        });

        this.pushMessage({ content: '用户名修改成功！～' });

        this.newName = '';
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

<style scoped></style>
