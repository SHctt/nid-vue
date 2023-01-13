<template>
  <PostList />
</template>

<script>
import { defineComponent } from 'vue';
import PostList from './components/post-list';

export default defineComponent({
  title() {
    let title;

    if (this.$route.name === 'postIndexPosts') {
      title = '热门';
    } else {
      title = '最新';
    }

    return title;
  },

  components: {
    PostList,
  },
});
</script>
