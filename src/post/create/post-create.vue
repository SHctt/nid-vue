<template>
  <div class="post-create">
    <text-field placeholder="标题" v-model="title" />
    <textarea-field
      placeholder="描述"
      class="bordered"
      :rows="1"
      v-model="content"
    />
    <button class="button large" @click="onClickSubmieButton">
      {{ submitButtonText }}
    </button>
  </div>
</template>

<script>
import TextField from '@/app/components/text-field.vue';
import TextareaField from '@/app/components/textarea-field.vue';
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: 'PostCreate',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      title: '',
      content: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({}),
    submitButtonText() {
      return '发布';
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
    ...mapActions({
      createPost: 'post/create/createPost',
      pushMessage: 'notification/pushMessage',
    }),

    onClickSubmieButton() {
      // console.log(this.title, this.content);
      if (!this.title.trim()) return;

      this.submitCreatePost();

      this.title = '';
      this.content = '';
    },

    async submitCreatePost() {
      try {
        await this.createPost({
          data: {
            title: this.title,
            content: this.content,
          },
        });
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextField,
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/post-create.css';
</style>
