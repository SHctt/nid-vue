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
import {
  appToolbarStoreModule,
  AppToolbarStoreState,
} from './toolbar/app-toolbar.store';
import { fileStoreModule, FileStoreState } from '@/file/file.store';
import { commentStoreModule, CommentStoreState } from '@/comment/comment.store';
import { replyStoreModule, ReplyStoreState } from '@/reply/reply.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
  auth: AuthStoreState;
  notification: AppNotificationStoreState;
  user: UserStoreState;
  toolbar: AppToolbarStoreState;
  file: FileStoreState;
  comment: CommentStoreState;
  reply: ReplyStoreState;
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
    toolbar: appToolbarStoreModule,
    file: fileStoreModule,
    comment: commentStoreModule,
    reply: replyStoreModule,
  },

  plugins: [localStorageStorePlugin],
});

/**
 * 默认导出
 */
export default store;
