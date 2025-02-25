import { combineReducers } from 'redux'
import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import IsConnectedStore from './IsConnectedStore'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  IsConnectedStore
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(logger)
)

export const persistor = persistStore(store)

export default store
