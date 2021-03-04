import {makeAutoObservable} from 'mobx';
import {TStore} from './Store';
import {AppError} from '../models/AppError';

export class AppStore {
  private store: TStore;

  constructor(store: TStore) {
    makeAutoObservable(this);
    this.store = store;
  }

  loading: boolean = false;

  fetching: boolean = false;

  error: AppError | undefined = undefined;

  isLoading = (value: boolean) => {
    this.loading = value;
  };

  isFetching = (value: boolean) => {
    this.fetching = value;
  };

  throwError = (error: AppError) => {
    this.error = error;
  };

  resetError = () => {
    this.error = undefined;
  };
}
