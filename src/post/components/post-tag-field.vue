<template>
  <div class="post-tag-field">
    <div class="content">
      <text-field placeholder="标签" v-model="name" @keyup="onKeyUpEnterTag" />
      <button class="button basic">
        <app-icon name="add" />
      </button>
    </div>
    <div class="meta" @click="onClickAddButton"></div>
  </div>
</template>

<script>
import AppIcon from '@/app/components/app-icon.vue';
import TextField from '@/app/components/text-field.vue';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default defineComponent({
  name: 'PostTagField',

  /**
   * 属性
   */
  props: {
    postId: {
      type: Number,
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
    ...mapGetters({}),
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
    ...mapActions({}),
    ...mapMutations({}),

    onClickAddButton() {
      console.log('add');
    },

    onKeyUpEnterTag() {
      console.log('enter');
    },
  },

  /**
   * 使用组件
   */
  components: { TextField, AppIcon },
});
</script>

<style scoped>
@import './styles/post-tag-field.css';
</style>
