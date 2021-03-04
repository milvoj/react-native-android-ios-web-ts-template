import {makeAutoObservable, runInAction} from 'mobx';
import {AuthStore} from '../pages/auth/AuthStore';
import {AppStore} from './AppStore';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  appStore = new AppStore(this);
  authStore = new AuthStore(this);

  setUpStores() {
    this.appStore = new AppStore(this);
    this.authStore = new AuthStore(this);
  }

  async logout() {
    this.authStore.logout().then(() => {
      runInAction(() => this.setUpStores());
    });
  }
}

export const createStore = () => {
  const store = new Store();
  return store;
};

export type TStore = ReturnType<typeof createStore>;
