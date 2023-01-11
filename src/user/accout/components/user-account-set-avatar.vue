<template>
  <div class="user-account-set-avatar">
    <div class="from">
      <h2>设置头像</h2>
      <div class="field">
        <div class="user-avatar large" v-if="avatarPreviewImage">
          <img :src="avatarPreviewImage" class="image" />
        </div>
      </div>
      <div class="fields">
        <file-field
          text="选择文件"
          size="large"
          name="avatar"
          fileType="image/*"
          @change="onChangeAvatarFileField"
        />
        <button-field text="提交" size="large" @click="onClickSubmitButton" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonField from '@/app/components/button-field.vue';
import FileField from '@/app/components/file-field.vue';
import { mapActions } from 'vuex';
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
    return {
      avatarPreviewImage: '',
      avatarFile: null,
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
      createAvatar: 'user/account/createAvatar',
      pushMessage: 'notification/pushMessage',
    }),

    async onClickSubmitButton() {
      try {
        await this.createAvatar(this.avatarFile);

        this.pushMessage({ content: '头像设置成功！' });
      } catch (error) {
        this.pushMessage({ content: '设置头像出问题了！' });
      }
    },

    onChangeAvatarFileField(files) {
      if (files.length) {
        this.avatarFile = files[0];
        this.createAvatarPreviewImage(this.avatarFile);
      }
    },

    createAvatarPreviewImage(file) {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = event => {
        this.avatarPreviewImage = event.target.result;
      };
    },
  },

  /**
   * 使用组件
   */
  components: { ButtonField, FileField },
});
</script>
FileField

<style scoped></style>
