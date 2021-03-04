import React from 'react';
import {createStore, TStore} from './Store';

function useClassStore(init: any) {
  const [store] = React.useState(init);
  return store;
}

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};

export const storeContext = React.createContext<TStore | null>(null);

const StoreProvider: React.FC = ({children}) => {
  const store = useClassStore(createStore);

  return (
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
