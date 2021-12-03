import store from 'store/configureStore';

export function getProduction() {
  return store.store.getState().user.isMainnet;
}
store.store.subscribe(getProduction);
