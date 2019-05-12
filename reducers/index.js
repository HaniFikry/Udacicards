import { RECEIVE_CARDS, ADD_DECK, ADD_CARD, DELETE_DECK } from "../actions";

export default function cards(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CARDS:
      return {
        ...state,
        ...action.cards
      };
    case ADD_DECK: {
      return {
        ...state,
        ...action.deck
      };
    }
    case ADD_CARD: {
      return {
        ...state,
        [action.title]: { ...state[action.title], questions: [...state[action.title].questions, action.card] }
      };
    }

    case DELETE_DECK: {
      let newState = state
      newState[action.title] = undefined
      delete newState[action.title]
      return {...newState}
    }
    default:
      return state;
  }
}
