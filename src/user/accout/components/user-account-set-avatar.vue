<template>
  <div class="user-account-set-avatar">
    <div class="from">
      <h2>设置头像</h2>
      <div class="fields">
        <div class="field">
          <div class="user-avatar medium" v-if="avatarFile">
            <img :src="avatarPreviewImage" class="image" />
          </div>
        </div>
        <file-field
          :text="avatarFileFielldText"
          size="large"
          name="avatar"
          fileType="image/*"
          @change="onChangeAvatarFileField"
        />
        <button-field
          v-if="avatarFile"
          text="取消"
          size="large"
          type="outline"
          @click="onClickCancelButton"
        />
        <button-field text="提交" size="large" @click="onClickSubmitButton" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonField from '@/app/components/button-field.vue';
import FileField from '@/app/components/file-field.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
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
      avatarFile: null,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      avatarPreviewImage: 'user/account/avatarPreviewImage',
    }),

    avatarFileFielldText() {
      return this.avatarFile ? '重新选择' : '选择文件';
    },
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
    ...mapMutations({
      setAvatarPreviewImage: 'user/account/setAvatarPreviewImage',
    }),
    ...mapActions({
      createAvatar: 'user/account/createAvatar',
      pushMessage: 'notification/pushMessage',
    }),

    async onClickSubmitButton() {
      try {
        await this.createAvatar(this.avatarFile);

        this.pushMessage({ content: '头像设置成功！' });

        this.avatarFile = null;
      } catch (error) {
        this.pushMessage({ content: '设置头像出问题了！' });
      }
    },

    onClickCancelButton() {
      this.setAvatarPreviewImage('');
      this.avatarFile = null;
    },

    onChangeAvatarFileField(files) {
      if (files.length) {
        this.avatarFile = files[0];
        this.createAvatarPreviewImage(this.avatarFile);
        console.log(this.avatarFile);
      }
    },

    createAvatarPreviewImage(file) {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = event => {
        this.setAvatarPreviewImage(event.target.result);
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
