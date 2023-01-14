<template>
  <post-list-filters :filters="filterItems" v-if="filterItems.length" />
  <PostList :sort="sort" :filter="filter" />
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import PostList from './components/post-list';
import PostListFilters from './components/post-list-filters.vue';

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

  props: {
    sort: {
      type: String,
    },

    filter: {
      type: Object,
    },
  },

  computed: {
    ...mapGetters({
      filterItems: 'post/index/filterItems',
    }),
  },

  components: {
    PostList,
    PostListFilters,
  },
});
</script>
