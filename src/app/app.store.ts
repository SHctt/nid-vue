import { createStore } from 'vuex';
import { postStoreModule, PostStoreState } from '../post/post.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
}

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    appName: 'init store state',
  } as RootState,

  modules: {
    post: postStoreModule,
  },
});

/**
 * 默认导出
 */
export default store;
