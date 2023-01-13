<template>
  <div :class="postListItemClasses">
    <post-list-item-media :item="item" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import postListItemMedia from './post-list-item-media.vue';

export default defineComponent({
  props: {
    item: Object,
  },

  computed: {
    postListItemClasses() {
      return ['post-list-item', this.item.file.orientation];
    },
  },

  components: { postListItemMedia },
});
</script>

<style scoped>
@import './styles/post-list-item.css';
</style>
