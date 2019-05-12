import {AsyncStorage} from 'react-native'

CARDS_STORAGE_KEY = 'Udacicards:decks'

export function addDeckToStorage(deck) {
  return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}

export async function deleteDeckFromStorage(key) {
  let data = await AsyncStorage.getItem(CARDS_STORAGE_KEY)
  data = JSON.parse(data)
  data[key] = undefined
  delete data[key]
  AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
}

export function fetchData() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(res => JSON.parse(res))
}

export async function addCardToStorage(deck, card) {
  let data = await AsyncStorage.getItem(CARDS_STORAGE_KEY)
  data = JSON.parse(data)
  data[deck].questions.push(card)
  return AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
}

function formatData(data) {
  let arr = []
  Object.keys(data).map(k => arr.push({title: data[k].title, questions: data[k].questions.length}))
  return arr
}