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
import { mapActions } from 'vuex';
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
    ...mapActions({
      pushMessage: 'notification/pushMessage',
    }),

    onClickSubmitButton() {
      if (!this.newName) {
        this.pushMessage({ content: '请输入用户名' });
      }

      if (!this.password) {
        this.pushMessage({ content: '需要密码验证' });
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
