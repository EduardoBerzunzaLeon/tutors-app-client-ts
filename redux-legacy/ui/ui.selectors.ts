import { createSelector } from 'reselect';

const selectUi = (state: any) => state.ui;

export const selectSiderStatus = createSelector(
  [ selectUi ],
  (ui) => ui.siderOpen,
);

export default selectSiderStatus;
