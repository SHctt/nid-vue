<template>
  <div class="post-create">
    <FileCreate @change="onChangeFileCreate" />
    <PostTitleField />
    <PostContentField />
    <PostTagField :postId="postId" v-if="postId" />
    <PostActions
      @update="submitUpdatePost"
      @create="submitCreatePost"
      @delete="onDeletePost"
      size="large"
      :useDeleteButton="postId ? true : false"
    />
    <PostMeta :post="postCache" v-if="postCache" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import PostTagField from '@/post/components/post-tag-field';
import PostTitleField from '@/post/components/post-title-field';
import PostContentField from '@/post/components/post-content-field';
import PostActions from '@/post/components/post-actions';
import PostMeta from '@/post/components/post-meta';
import FileCreate from '@/file/create/file-create';

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
      postCache: null,
    };
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
      selectedFile: 'file/create/selectedFile',
    }),
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

    post(newValue) {
      if (newValue) {
        this.postCache = newValue;
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
      setUnsaved: 'post/create/setUnsaved',
      setSelectedFile: 'file/create/setSelectedFile',
      setPreviewImage: 'file/create/setPreviewImage',
    }),
    ...mapActions({
      createPost: 'post/create/createPost',
      pushMessage: 'notification/pushMessage',
      getPostById: 'post/show/getPostById',
      updatePost: 'post/edit/updatePost',
      deletePost: 'post/destroy/deletePost',
      createFile: 'file/create/createFile',
    }),

    async submitUpdatePost() {
      try {
        await this.updatePost({
          postId: this.postId,
          data: {
            title: this.title,
            content: this.content,
          },
        });

        this.setUnsaved(false);
        this.getPost(this.postId);
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
          file: this.selectedFile,
        });

        this.$router.push({
          name: 'postCreate',
          query: { post: this.postId },
        });

        this.setUnsaved(false);
        this.getPost(this.postId);
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    async getPost(postId) {
      try {
        await this.getPostById(postId);
        const { title, content, tags, file } = this.post;

        this.setPostId(postId);
        this.setTitle(title);
        this.setContent(content);
        this.setTags(tags);

        if (file) {
          this.setPreviewImage(file.size.large);
        }
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    reset() {
      this.setTitle('');
      this.setContent('');
      this.setPostId(null);
      this.setTags(null);
      this.setUnsaved(false);
      this.setPreviewImage(null);
      this.setSelectedFile(null);
      this.postCache = null;
    },

    async onDeletePost() {
      try {
        await this.deletePost({ postId: this.postId });

        this.$router.push({ name: 'postCreate' });
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    onChangeFileCreate(files) {
      const file = files[0];

      if (!file) return;

      if (!this.title) {
        this.setTitle(file.name.split('.')[0]);
      }

      if (this.postId) {
        this.submitCreateFile();
      } else {
        this.submitCreatePost();
      }
    },

    async submitCreateFile() {
      try {
        await this.createFile({ postId: this.postId, file: this.selectedFile });
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    FileCreate,
    PostMeta,
    PostActions,
    PostContentField,
    PostTitleField,
    PostTagField,
  },
});
</script>

<style scoped>
@import './styles/post-create.css';
</style>
