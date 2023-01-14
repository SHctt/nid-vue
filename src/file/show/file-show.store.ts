import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface FileMetaData {
  data: null;
}

export interface FileShowStoreState {
  loading: boolean;
  fileMetaData: FileMetaData | null;
}

export const fileShowStoreModule: Module<FileShowStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    loading: false,
    fileMetaData: null,
  } as FileShowStoreState,

  /**
   * 获取器
   */
  getters: {
    loading(state) {
      return state.loading;
    },

    fileMetaData(state) {
      return state.fileMetaData;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setFileMetaData(state, data) {
      state.fileMetaData = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async show({ commit }, fieldId) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(`files/${fieldId}/metadata`);
        commit('setFileMetaData', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);

        throw error.response;
      }
    },
  },
};
