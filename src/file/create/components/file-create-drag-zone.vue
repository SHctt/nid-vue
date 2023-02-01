<template>
  <div class="file-create-drag-zone">
    <file-field
      name="file"
      @change="onChangeFile"
      fileType="image/*"
      :text="fileFieldText"
    />
  </div>
</template>

<script>
import FileField from '@/app/components/file-field.vue';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'FileCreateDragZone',

  emits: ['change'],

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({}),

    fileFieldText() {
      return '选择文件';
    },
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
    onChangeFile(files) {
      this.$emit('change', files);
    },
  },

  /**
   * 使用组件
   */
  components: {
    FileField,
  },
});
</script>

<style scoped>
@import './styles/file-create-drag-zone.css';
</style>
