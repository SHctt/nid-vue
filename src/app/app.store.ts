import { createStore } from 'vuex';
import { postStoreModule, PostStoreState } from '../post/post.store';
import { layoutStoreModule, LayoutStoreState } from './layout/layout.store';
import { localStorageStorePlugin } from './app.store.plugin';
import { AuthLoginStoreState } from '../auth/login/auth-login.store';
import { authStoreModule } from '../auth/auth.store';
import {
  appNotificationStoreModule,
  AppNotificationStoreState,
} from './notification/app-notification.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
  auth: AuthLoginStoreState;
  notification: AppNotificationStoreState;
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
  },

  plugins: [localStorageStorePlugin],
});

/**
 * 默认导出
 */
export default store;
