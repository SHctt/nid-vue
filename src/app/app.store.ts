import { createStore } from 'vuex';
import { postStoreModule, PostStoreState } from '../post/post.store';
import { layoutStoreModule, LayoutStoreState } from './layout/layout.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
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
    layout: layoutStoreModule,
  },
});

/**
 * 默认导出
 */
export default store;
