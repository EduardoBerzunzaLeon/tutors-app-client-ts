import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducer';
import { uiReducer } from './ui/ui.reducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

export default rootReducer;
