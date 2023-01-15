<template>
  <post-show-skeleton :class="postShowClasses" v-if="!showPost" />
  <div :class="postShowClasses" v-if="showPost">
    <post-show-media :post="post" @click="onClickPostShowMedia" />
    <div class="section meta actions">
      <post-show-file-meta :post="post" />
      <post-show-action :post="post" />
    </div>
    <post-show-header :post="post" />
    <post-show-content :post="post" />
    <post-show-tags v-if="post.tags" :tags="post.tags" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { defineComponent } from 'vue';
import postShowMedia from './components/post-show-media.vue';
import { getStorage } from '@/app/app.service';
import PostShowHeader from './components/post-show-header.vue';
import PostShowContent from './components/post-show-content.vue';
import PostShowAction from './components/post-show-action.vue';
import PostShowFileMeta from './components/post-show-file-meta.vue';
import PostShowTags from './components/post-show-tags.vue';
import PostShowSkeleton from './components/post-show-skeleton.vue';

export default defineComponent({
  components: {
    postShowMedia,
    PostShowHeader,
    PostShowContent,
    PostShowAction,
    PostShowFileMeta,
    PostShowTags,
    PostShowSkeleton,
  },
  title() {
    if ((this, PostShowSkeleton.showPost)) {
      return this.post.title;
    }
  },

  props: {
    postId: String,
  },

  created() {
    this.getPostById(this.postId);

    // 读取本地存储的布局
    const layout = getStorage('post-show-layout');

    if (layout) {
      this.setLayout(layout);
    }

    if (window) {
      window.addEventListener('keyup', this.onKeyUpWindow);
    }
  },

  unmounted() {
    if (window) {
      window.removeEventListener('keyup', this.onKeyUpWindow);
    }
  },

  computed: {
    ...mapGetters({
      loading: 'post/show/loading',
      post: 'post/show/post',
      layout: 'post/show/layout',
      sideSheetComponent: 'layout/sideSheetComponent',
      posts: 'post/index/posts',
    }),

    showPost() {
      return !this.loading && this.post;
    },

    postShowClasses() {
      return ['post-show', this.layout, { aside: this.sideSheetComponent }];
    },
  },

  methods: {
    ...mapActions({
      getPostById: 'post/show/getPostById',
    }),

    ...mapMutations({
      setLayout: 'post/show/setLayout',
    }),

    onClickPostShowMedia() {
      this.setLayout(`${this.layout ? '' : 'flow'}`);
    },

    onKeyUpWindow(event) {
      switch (event.key) {
        case 'b':
          if (this.posts.length) {
            this.$router.back();
          }
          break;
      }
    },
  },
});
</script>

<style scoped>
@import './styles/post-show.css';
</style>
