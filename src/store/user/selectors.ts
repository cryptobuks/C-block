import type { State, UserState } from 'types';

export default {
  getUser: (state: State): UserState => state.user,
};
