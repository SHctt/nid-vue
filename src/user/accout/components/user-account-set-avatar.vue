<template>
  <div class="user-account-set-avatar">
    <div class="from">
      <h2>设置头像</h2>
      <button-field text="提交" size="large" @click="onClickSubmitButton" />
    </div>
  </div>
</template>

<script>
import ButtonField from '@/app/components/button-field.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserAccountSetAvatar',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {};
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
    onClickSubmitButton() {
      console.log('提交头像');
    },
  },

  /**
   * 使用组件
   */
  components: { ButtonField },
});
</script>

<style scoped></style>
