<template>
  <div class="post-list-item">
    <post-list-item-media :item="item" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import postListItemMedia from './post-list-item-media.vue';

export default defineComponent({
  components: { postListItemMedia },
  props: {
    item: Object,
  },
});
</script>
