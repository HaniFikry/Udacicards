import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deleteDeckFromStorage } from '../utils/api'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

import { connect } from 'react-redux'
import { deleteDeck } from '../actions'
export class DeckDetails extends Component {

  deleteDeck(deck) {
    deleteDeckFromStorage(deck)
    this.props.dispatch(deleteDeck(deck))
    this.props.navigation.navigate('Decks')
  }

  takeQuiz = () => {
    clearLocalNotification().then(setLocalNotification)
    this.props.navigation.navigate('Quiz', {deck})
  }
  
  render() {
    const {deck} = this.props;
    return (
      <View style={styles.container}>
        <Text></Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 35}}>{deck && deck.title}</Text>
          <Text style={{textAlign: 'center'}}>{deck && deck.questions && deck.questions.length} cards</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('AddCard', {deck})}>
            <Text style={{color: '#7c53c3'}}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={() => this.takeQuiz()}>
            <Text style={{color: '#fff'}}> Start Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.deleteDeck(deck.title)}>
            <Text style={{color: '#7c53c3', textAlign: 'center'}}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'column',

  },
  button1: {
    borderColor: '#7c53c3',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom: 20,
  },
  button2: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: '#000',
    borderRadius: 3,
    marginBottom: 20,
  }
})

function mapStateToProps(state, props) {
  let deck = state[props.navigation.state.params.deck.title]
  return {
    deck
  }
}

export default connect(mapStateToProps)(DeckDetails);
