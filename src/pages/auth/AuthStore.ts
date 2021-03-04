import {makeAutoObservable} from 'mobx';
import {AppError} from '../../models/AppError';
import {TStore} from '../../store/Store';

export class AuthStore {
  private store: TStore;

  constructor(store: TStore) {
    makeAutoObservable(this);
    this.store = store;
  }

  loading: boolean = false;

  fetching: boolean = false;

  error: AppError | undefined = undefined;

  accessToken: string | null = null;

  uuid: string | null = null;

  username: string | undefined = undefined;

  email: string | undefined = undefined;

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

  get loggedIn(): string | null {
    return this.accessToken;
  }

  setAccessToken = (token: string | null) => {
    this.accessToken = token;
  };

  setUUID = (uuid: string | null) => {
    this.uuid = uuid;
  };

  logout = () => {
    return new Promise((resolve) => {
      this.username = undefined;
      this.email = undefined;
      resolve();
    });
  };
}
