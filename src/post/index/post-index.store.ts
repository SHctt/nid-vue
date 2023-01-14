import { Module } from 'vuex';
import { apiHttpClient, queryStringProcess } from '@/app/app.service';
import { RootState } from '@/app/app.store';
import { User } from '@/user/show/user-show.store';
import { POSTS_PER_PAGE } from '@/app/app.config';
import { StringifiableRecord } from 'query-string';
import { postFileProcess } from '@/post/post.service';

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
  queryString: string;
}

export interface GetPostsOptions {
  sort?: string;
}

export const postIndexStoreModule: Module<PostIndexStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    posts: [],
    layout: '',
    nextPage: 1,
    totalPage: 1,
    queryString: '',
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

    hasMore(state) {
      return state.totalPage - state.nextPage >= 0;
    },

    posts(state) {
      return state.posts.map(post => postFileProcess(post));
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

    setQueryString(state, data) {
      state.queryString = data;
    },
  },

  actions: {
    async getPosts({ commit, state, dispatch }, options: GetPostsOptions = {}) {
      const getPostsQueryString = await dispatch('getPostspreProcess', options);

      try {
        const response = await apiHttpClient.get(
          `/posts?page=${state.nextPage}&${getPostsQueryString}`,
        );

        dispatch('getPostsPostProcess', response);
        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },

    getPostspreProcess({ commit, state }, options: GetPostsOptions) {
      commit('setLoading', true);

      const queryStringObject: StringifiableRecord = {
        sort: options.sort,
      };

      const getPostsQueryString = queryStringProcess(queryStringObject);

      if (state.queryString !== getPostsQueryString) {
        commit('setNextPage', 1);
      }

      commit('setQueryString', getPostsQueryString);

      return getPostsQueryString;
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
