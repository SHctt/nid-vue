import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  User,
  userShowStoreModule,
  UserShowStoreState,
} from './show/user-show.store';

export interface UserStoreState {
  currentUser: User | null;
  show: UserShowStoreState;
}

export const userStoreModule: Module<UserStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    currentUser: null,
  } as UserStoreState,

  /**
   * 获取器
   */
  getters: {
    currenUser(state) {
      return state.currentUser;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    getCurrentUser(state, data) {
      state.currentUser = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async getCurrentUser({ commit, dispatch }, userId) {
      try {
        const response = await dispatch('/users/show/getUserById', userId, {
          root: true,
        });

        commit('setCurrentUser', response.data);

        return response;
      } catch (error) {
        throw error.response;
      }
    },
  },

  modules: {
    show: userShowStoreModule,
  },
};
