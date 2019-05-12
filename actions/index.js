export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_DECK = 'DELETE_DECK'

export function receiveCards (cards) {
  return {
    type: RECEIVE_CARDS,
    cards
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCard (title, card) {
  return {
    type: ADD_CARD,
    card,
    title
  }
}

export function deleteDeck (title) {
  return {
    type: DELETE_DECK,
    title
  }
}