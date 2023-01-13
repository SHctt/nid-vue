<template>
  <div :class="postListItemClasses">
    <post-list-item-media :item="item" />
    <post-list-item-content :item="item" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import PostListItemContent from './post-list-item-content.vue';
import postListItemMedia from './post-list-item-media.vue';

export default defineComponent({
  props: {
    item: Object,
  },

  computed: {
    ...mapGetters({
      layout: 'post/index/layout',
    }),
    postListItemClasses() {
      return ['post-list-item', this.item.file.orientation, this.layout];
    },
  },

  components: { postListItemMedia, PostListItemContent },
});
</script>

<style scoped>
@import './styles/post-list-item.css';
</style>
