<template>
  <div class="post-tag-field">
    <div class="content">
      <text-field
        placeholder="标签"
        v-model="name"
        @keyup.enter="onKeyUpEnterTag"
      />
      <button class="button basic" @click="onClickAddButton">
        <app-icon name="add" />
      </button>
    </div>
    <div class="meta" v-if="tags">
      <transition-group name="post-tag">
        <post-tag
          v-for="tag in tags"
          :key="tag.id"
          :tag="tag"
          useDeleteButton
          @delete="onDeletePostTag"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/app/components/app-icon.vue';
import TextField from '@/app/components/text-field.vue';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';
import PostTag from './post-tag.vue';

export default defineComponent({
  name: 'PostTagField',

  /**
   * 属性
   */
  props: {
    postId: {
      type: String,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      name: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      tags: 'post/edit/tags',
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
      createPostTag: 'post/edit/createPostTag',
      pushMessage: 'notification/pushMessage',
      deletePostTag: 'post/edit/deletePostTag',
    }),
    ...mapMutations({}),

    onClickAddButton() {
      this.submitCreatePostTag();
    },

    onKeyUpEnterTag() {
      this.submitCreatePostTag();
    },

    async submitCreatePostTag() {
      if (!this.name) return;

      try {
        await this.createPostTag({
          postId: this.postId,
          data: {
            name: this.name,
          },
        });
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    async onDeletePostTag(tagId) {
      try {
        await this.deletePostTag({ postId: this.postId, tagId });
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
    AppIcon,
    PostTag,
  },
});
</script>

<style scoped>
@import './styles/post-tag-field.css';
</style>
