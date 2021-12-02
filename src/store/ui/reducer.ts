import { UIState } from 'types';
// import { RequestStatus } from 'types/store';
import { getUIReducer } from '.';

const initialState: UIState = {
};

const uiReducer = getUIReducer(initialState);

export default uiReducer;
