<template>
  <div class="post-create">
    <text-field placeholder="标题" v-model="title" />
    <textarea-field
      placeholder="描述"
      class="bordered"
      :rows="1"
      v-model="content"
    />
    <PostTagField :postId="postId" />
    <button class="button large" @click="onClickSubmieButton">
      {{ submitButtonText }}
    </button>
  </div>
</template>

<script>
import TextField from '@/app/components/text-field.vue';
import TextareaField from '@/app/components/textarea-field.vue';
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import PostTagField from '@/post/components/post-tag-field';

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
    return {};
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      postId: 'post/create/postId',
      title: 'post/create/title',
      content: 'post/create/content',
      post: 'post/show/post',
    }),
    submitButtonText() {
      return this.postId ? '更新' : '发布';
    },
  },

  watch: {
    $route(to) {
      const { post: postId } = to.query;
      if (postId) {
        this.getPost(parseInt(postId, 10));
      } else {
        this.reset();
      }
    },
  },

  /**
   * 已创建
   */
  created() {
    //
    const { post: postId } = this.$route.query;

    if (postId) {
      this.getPost(parseInt(postId, 10));
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapMutations({
      setTags: 'post/edit/setTags',
      setPostId: 'post/create/setPostId',
      setTitle: 'post/create/setTitle',
      setContent: 'post/create/setContent',
    }),
    ...mapActions({
      createPost: 'post/create/createPost',
      pushMessage: 'notification/pushMessage',
      getPostById: 'post/show/getPostById',
      updatePost: 'post/edit/updatePost',
    }),

    onClickSubmieButton() {
      // console.log(this.title, this.content);
      if (!this.title.trim()) return;

      if (this.postId) {
        this.submitUpdatePost();
      } else {
        this.submitCreatePost();
      }

      this.submitCreatePost();
    },

    async submitUpdatePost() {
      try {
        await this.updatePost({
          postId: this.postId,
          data: {
            title: this.title,
            content: this.content,
          },
        });
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    async submitCreatePost() {
      try {
        await this.createPost({
          data: {
            title: this.title,
            content: this.content,
          },
        });

        this.$router.push({
          name: 'postCreate',
          query: { post: this.postId },
        });
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    async getPost(postId) {
      try {
        await this.getPostById(postId);
        const { title, content, tags } = this.post;

        this.setPostId(postId);
        this.setTitle(title);
        this.setContent(content);
        this.setTags(tags);
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    reset() {
      this.setTitle('');
      this.setContent('');
      this.setPostId(null);
    },
  },

  /**
   * 使用组件
   */
  components: {
    PostTagField,
    TextField,
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/post-create.css';
</style>