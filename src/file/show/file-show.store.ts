import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface FileMetaData {
  id: number;
  size: number;
  width: number;
  height: number;
  metadata: {
    Make: string;
    Model: string;
    LensMake: string;
    LensModel: string;
    Software: string;
    Orientation: number;
    CreateDate: number;
    ModifyDate: number;
    FNumber: number;
    FocalLength: number;
    ExposureTime: number;
    IOS: number;
  };
}

export interface FileShowStoreState {
  loading: boolean;
  fileMetaData: FileMetaData | null;
}

export interface MetaItem {
  title: string;
  value: string;
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

    kit(state) {
      let kit: Array<MetaItem> = [];

      if (state.fileMetaData) {
        const {
          Make = '',
          Model = '',
          LensMake = '',
          LensModel = '',
        } = state.fileMetaData.metadata;

        const camera = {
          title: '相机',
          value: `${Make}${Model}`.trim(),
        };

        const lens = {
          title: '镜头',
          value: `${LensMake}${LensModel}`.trim(),
        };

        kit = [camera, lens];
      }

      return kit.filter(item => item.value !== '');
    },

    specs(state) {
      let specs: Array<MetaItem> = [];

      if (state.fileMetaData) {
        const {
          FocalLength,
          FNumber,
          ExposureTime,
          IOS,
        } = state.fileMetaData.metadata;

        specs = [
          {
            title: '焦距',
            value: FocalLength ? `${FocalLength}` : '',
          },
          {
            title: '光圈',
            value: FNumber ? `${FNumber}` : '',
          },
          {
            title: '曝光',
            value: ExposureTime ? `${ExposureTime}` : '',
          },
          {
            title: '感光',
            value: IOS ? `${IOS}` : '',
          },
        ];
      }

      return specs.filter(item => item.value !== '');
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
    async getFileById({ commit }, fieldId) {
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
