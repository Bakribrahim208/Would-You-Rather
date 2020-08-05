import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
 import React from 'react';
 import logger from 'redux-logger'
 

import rootReducer from './rootReducer'
const store = createStore(rootReducer , applyMiddleware(thunk,logger))



export default store