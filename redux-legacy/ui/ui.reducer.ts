import uiActionTypes from './ui.types';

interface UiInitialState {
    siderOpen: boolean
}

interface Type {
    type: string
}

const INITIAL_STATE: UiInitialState = {
  siderOpen: false,
};

export const uiReducer = (state = INITIAL_STATE, { type }:Type = { type: 'init' }) => {
  switch (type) {
    case uiActionTypes.OPEN_SIDER:
      return {
        ...state,
        siderOpen: true,
      };

    case uiActionTypes.CLOSE_SIDER:
      return {
        ...state,
        siderOpen: false,
      };

    default:
      return state;
  }
};

export default uiReducer;
