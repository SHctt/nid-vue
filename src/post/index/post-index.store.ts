import { Module } from 'vuex';
import { apiHttpClient } from '@/app/app.service';
import { RootState } from '@/app/app.store';
import { User } from '@/user/show/user-show.store';
import { API_BASE_URL } from '../../app/app.config';

export interface PostListItem {
  id: number;
  title: string;
  content: string;
  user: User;
  totalComments: number;
  totalLikes: number;
  file: {
    id: number;
    width: number;
    height: number;
    orientation: string;
    size: {
      thumbnail: string;
      medium: string;
      large: string;
    };
  };
  tags: [
    {
      id: number;
      name: string;
    },
  ];
}

export interface PostIndexStoreState {
  loading: boolean;
  posts: Array<PostListItem>;
  layout: string;
}

export const postIndexStoreModule: Module<PostIndexStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    posts: [],
    layout: '',
  } as PostIndexStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    layout(state) {
      return state.loading;
    },

    posts(state) {
      return state.posts.map(post => {
        let { file } = post;

        if (file) {
          const { id: fileId, width, height } = file;
          const fileBaseURL = `${API_BASE_URL}/files/${fileId}/serve`;
          const orientation = width > height ? 'horizontal' : 'portrait';

          file = {
            ...file,
            orientation,
            size: {
              thumbnail: `${fileBaseURL}?size=thumbnail`,
              medium: `${fileBaseURL}?size=medium`,
              large: `${fileBaseURL}?size=large`,
            },
          };

          post = {
            ...post,
            file,
          };
        }

        return post;
      });
    },
  },

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setLayout(state, data) {
      state.layout = data;
    },

    setPosts(state, data) {
      state.posts = data;
    },
  },

  actions: {
    async getPosts({ commit }) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get('/posts');
        commit('setPosts', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },
  },
};
