import { createStore } from 'vuex';
import { postStoreModule, PostStoreState } from '@/post/post.store';
import { userStoreModule, UserStoreState } from '@/user/user.store';
import { authStoreModule, AuthStoreState } from '@/auth/auth.store';
import { layoutStoreModule, LayoutStoreState } from './layout/layout.store';
import {
  appNotificationStoreModule,
  AppNotificationStoreState,
} from './notification/app-notification.store';
import { localStorageStorePlugin } from './app.store.plugin';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
  auth: AuthStoreState;
  notification: AppNotificationStoreState;
  user: UserStoreState;
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
    auth: authStoreModule,
    notification: appNotificationStoreModule,
    user: userStoreModule,
  },

  plugins: [localStorageStorePlugin],
});

/**
 * 默认导出
 */
export default store;
