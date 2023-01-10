import { Plugin } from 'vuex';
import { RootState } from '@/app/app.store';
import { setStorage } from './app.service';

export const localStorageStorePlugin: Plugin<RootState> = store => {
  store.subscribe(mutation => {
    switch (mutation.type) {
      case 'layout/setTheme':
        setStorage('theme', mutation.payload);
        break;
      case 'auth/login/setLoginResponseData':
        setStorage('nid', mutation.payload.token);
        setStorage('uid', mutation.payload.id);
        break;
    }
  });
};
