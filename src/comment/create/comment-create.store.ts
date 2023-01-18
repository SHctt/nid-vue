import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface CommentCreateStoreState {
  name: string;
}

export const commentCreateStoreModule: Module<CommentCreateStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    name: 'commentCreateStoreModule',
  } as CommentCreateStoreState,

  /**
   * 获取器
   */
  getters: {
   
  },

  /**
   * 修改器
   */
  mutations: {

  },

  /**
   * 动作
   */
  actions: {

  },

  /**
   * 模块
   */
  modules: {
  },
};
