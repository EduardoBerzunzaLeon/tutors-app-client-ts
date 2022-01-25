import { createSelector } from 'reselect';

const selectUser = (state) => state.auth;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
export const selectChecking = createSelector(
  [selectUser],
  (user) => user.checking
);

export const selectError = createSelector([selectUser], (user) => user.error);
export const selectActivate = createSelector(
  [selectUser],
  (user) => user.activate
);
