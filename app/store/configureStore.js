import { createStore} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storeEnhancer from './storeEnhancer';
import reducer from '../reducers';

const config = {
  key: 'root',
  storage,
}

const rootReducer = persistReducer(config, reducer);

export default () => {
  let store = createStore(rootReducer, storeEnhancer);
  let persistor = persistStore(store);
  return { store, persistor };
}
