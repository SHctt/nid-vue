import { Module } from 'vuex';
import { apiHttpClient, queryStringProcess } from '@/app/app.service';
import { RootState } from '@/app/app.store';
import { User } from '@/user/show/user-show.store';
import { POSTS_PER_PAGE } from '@/app/app.config';
import { StringifiableRecord } from 'query-string';
import { postFileProcess, filterProcess } from '@/post/post.service';

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
  filter: { [name: string]: string } | null;
}

export interface GetPostsOptions {
  sort?: string;
  filter: { [name: string]: string };
}

export interface FilterItem {
  title?: string;
  value?: string;
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
    filter: null,
  } as PostIndexStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    posts(state) {
      return state.posts
        .map(post => postFileProcess(post))
        .filter(post => post.file);
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

    filterItems(state) {
      const items: Array<FilterItem> = [];

      if (state.filter) {
        Object.keys(state.filter).forEach(filterName => {
          const item: FilterItem = {};

          switch (filterName) {
            case 'tag':
              item.title = '标签';
              break;
          }

          if (item.title && state.filter) {
            item.value = state.filter[filterName];
            items.push(item);
          }
        });
      }

      return items;
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

    setFilter(state, data) {
      const filter = filterProcess(data);
      state.filter = filter;
    },
  },

  actions: {
    async getPosts({ commit, state, dispatch }, options: GetPostsOptions) {
      let getPostsQueryString = '';

      if (Object.keys(options).length) {
        getPostsQueryString = await dispatch('getPostsPreProcess', options);
      } else {
        getPostsQueryString = state.queryString;
      }

      try {
        const response = await apiHttpClient.get(
          `/posts?page=${state.nextPage}&${getPostsQueryString}`,
        );

        dispatch('getPostsPostProcess', response);
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

    getPostsPreProcess({ commit, state }, options: GetPostsOptions) {
      commit('setLoading', true);
      commit('setFilter', options.filter);

      const queryStringObject: StringifiableRecord = {
        sort: options.sort,
        ...state.filter,
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
