import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface File {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
}

export interface FileCreateStoreState {
  uploadProcess: number;
  previewImage: string;
  selectedFile: File | null;
  loading: boolean;
}

export interface CreateFileOptions {
  data?: null;
}

export const fileCreateStoreModule: Module<FileCreateStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    uploadProcess: 0,
    previewImage: '',
    selectedFile: null,
    loading: false,
  } as FileCreateStoreState,

  /**
   * 获取器
   */
  getters: {
    uploadProcess(state) {
      return state.uploadProcess;
    },
    previewImage(state) {
      return state.previewImage;
    },
    selectedFile(state) {
      return state.selectedFile;
    },
    loading(state) {
      return state.loading;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },
    setUploadProcess(state, data) {
      state.uploadProcess = data;
    },
    setPreviewImage(state, data) {
      state.previewImage = data;
    },
    setSelectedFile(state, data) {
      state.selectedFile = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async createFile({ commit }, options: CreateFileOptions = {}) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(`files`);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);

        // eslint-disable-next-line
        const _error = error as any;

        if (_error.response) {
          throw _error.response;
        }
      }
    },
  },

  /**
   * 模块
   */
  modules: {},
};
