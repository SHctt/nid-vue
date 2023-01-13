import { Module } from 'vuex';
import { apiHttpClient } from '@/app/app.service';
import { RootState } from '@/app/app.store';
import { User } from '@/user/show/user-show.store';
import { API_BASE_URL, POSTS_PER_PAGE } from '@/app/app.config';

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
  nextPage: number;
  totalPage: number;
}

export const postIndexStoreModule: Module<PostIndexStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    posts: [],
    layout: '',
    nextPage: 1,
    totalPage: 1,
  } as PostIndexStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    layout(state) {
      return state.layout;
    },

    nextPage(state) {
      return state.nextPage;
    },

    totalPage(state) {
      return state.totalPage;
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

    setNextPage(state, data) {
      if (data) {
        state.nextPage = data;
      } else {
        state.nextPage++;
      }
    },

    setTotalPage(state, data) {
      state.totalPage = data;
    },

    setPosts(state, data) {
      state.posts = data;
    },
  },

  actions: {
    async getPosts({ commit, state, dispatch }) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(
          `/posts?page=${state.nextPage}`,
        );

        dispatch('getPostsPostProcess', response);
        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },

    getPostsPostProcess({ commit, state }, response) {
      if (state.nextPage === 1) {
        commit('setPosts', response.data);
      } else {
        commit('setPosts', [...state.posts, ...response.data]);
      }

      commit('setLoading', false);

      const total =
        response.headers['X-Total-Count'] || response.headers['x-total-count'];

      const totalPage = Math.ceil(total / POSTS_PER_PAGE);

      commit('setTotalPage', totalPage);

      commit('setNextPage');
    },
  },
};
