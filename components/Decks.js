import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import DeckCard from './DeckCard'
import { fetchData } from '../utils/api'
import { connect } from 'react-redux'
import {receiveCards} from '../actions'
import { NavigationEvents } from 'react-navigation'

export class Decks extends Component {
  static navigationOptions = {
    title: 'Decks',
  };

  state = {
    decks: []
  }

  componentDidMount() {
    this.fetchDecks()
  }

  
  fetchDecks() {
    fetchData().then((res) => {
      this.props.dispatch(receiveCards(res))
    })
  }
  
  render() {
    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
        {this.props.cards && this.props.cards.map(d => <DeckCard key={d.title} deck={d}/>)}
      </ScrollView>
  )
  }
}

function mapStateToProps(state) {
  let cards = []
  Object.keys(state).map(k => cards.push({title: state[k].title, questions: state[k].questions.length}))
  return {
    cards
  }
} 

export default connect(mapStateToProps)(Decks)
