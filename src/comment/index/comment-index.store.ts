import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface CommentListItem {
  id: number;
  content: string;
  user: {
    id: number;
    name: string;
    avatar: number;
  };
  post: {
    id: number;
    title: string;
  };
  totilReplies: number | null;
}

export type comments = Array<CommentListItem>;

export interface CommentIndexStoreState {
  loading: boolean;
  comments: comments | null;
}

export const commentIndexStoreModule: Module<
  CommentIndexStoreState,
  RootState
> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    loading: false,
    comments: null,
  } as CommentIndexStoreState,

  /**
   * 获取器
   */
  getters: {
    loading(state) {
      return state.loading;
    },

    comments(state) {
      return state.comments;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setcommentListItem(state, data) {
      state.comments = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async getComments({ commit }) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get('comment');
        commit('setCommentListItem', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);

        throw error.response;
      }
    },
  },
};
