import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { addDeckToStorage } from '../utils/api'
const {width} = Dimensions.get('window');
import {connect} from 'react-redux'
import { addDeck } from '../actions'
export class AddDeck extends Component {

  state = {
    input: ''
  }

  addDeck = () => {
    let deck = {
      title: this.state.input,
      questions: []
    }
    addDeckToStorage(deck)
    this.props.dispatch(addDeck({[deck.title]: deck}))
    this.props.navigation.navigate('DeckDetails', {deck})
  }

  handleInputChange = (text) => {
    this.setState({
      input: text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={{fontSize: 20, padding: 20}}> What is the title of your new deck?</Text>
          <TextInput 
            style={styles.input}
            placeholder='Name'
            onChangeText={this.handleInputChange}
          />
        </View>
        <View style={{flex: 1}}>
        <TouchableOpacity style={[styles.button]} onPress={this.addDeck}>
          <Text style={{color: '#fff'}}> Submit </Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {width: width*0.8, height: 50, borderRadius: 7, borderColor: '#7c53c3', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10},
  button: {
    alignSelf: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: '#000',
    borderRadius: 3,
    marginBottom: 20,
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

export default connect()(AddDeck)
