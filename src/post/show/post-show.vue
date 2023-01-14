<template>
  <div v-if="showPost">
    <post-show-media :post="post" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { defineComponent } from 'vue';
import postShowMedia from './components/post-show-media.vue';

export default defineComponent({
  components: { postShowMedia },
  title() {
    if (this.showPost) {
      return this.post.title;
    }
  },

  props: {
    postId: String,
  },

  created() {
    this.getPostById(this.postId);
  },

  computed: {
    ...mapGetters({
      loading: 'post/show/loading',
      post: 'post/show/post',
    }),

    showPost() {
      return !this.loading && this.post;
    },
  },

  methods: {
    ...mapActions({
      getPostById: 'post/show/getPostById',
    }),
  },
});
</script>
