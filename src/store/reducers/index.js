import { FETCH_REQUEST, FETCH_SUCCESS } from '../actions';

const initialState = {
  players: [],
  teams: [],
  positions: [
    { id: 'gkp', label: 'Goalkeeper', plural: 'Goalkeepers' },
    { id: 'def', label: 'Defender', plural: 'Defenders' },
    { id: 'mid', label: 'Midfielder', plural: 'Midfielders' },
    { id: 'fwd', label: 'Forward', plural: 'Forwards' },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.itemType]: action.payload.data,
      };

    default:
      return state;
  }
};

export default rootReducer;
