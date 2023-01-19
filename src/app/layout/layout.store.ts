import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface LayoutStoreState {
  sideSheetTouchDown: boolean;
  theme: string;
  sideSheetComponent: string;
  // eslint-disable-next-line
  sideSheetProps: any;
}

export const layoutStoreModule: Module<LayoutStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    theme: 'light',
    sideSheetComponent: '',
    sideSheetTouchDown: false,
  } as LayoutStoreState,

  /**
   * 获取器
   */
  getters: {
    sideSheetTouchDown(state) {
      return state.sideSheetTouchDown;
    },

    theme(state) {
      return state.theme;
    },

    sideSheetComponent(state) {
      return state.sideSheetComponent;
    },

    sideSheetProps(state) {
      return state.sideSheetProps;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setSideSheetTouchDown(state, data) {
      state.sideSheetTouchDown = data;
    },
    setTheme(state, data) {
      state.theme = data;
    },

    setSideSheetComponent(state, data) {
      state.sideSheetComponent = data;
    },

    setSideSheetProps(state, data) {
      state.sideSheetProps = data;
    },

    resetSideSheet(state) {
      state.sideSheetComponent = '';
      state.sideSheetProps = null;
    },
  },

  /**
   * 动作
   */
  actions: {},
};
