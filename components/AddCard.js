import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { addCardToStorage } from '../utils/api'
import {addCard} from '../actions'
import { connect } from 'react-redux'
class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  handleChange = (text, target) => {
    this.setState({
      [target]: text
    })
  }

  handleSubmit = () => {
    const {deck} = this.props.navigation.state.params;
    const question = this.state;
    addCardToStorage(deck.title, question)
    this.props.dispatch(addCard(deck.title, question))
    this.props.navigation.navigate('DeckDetails', {deck})
  }

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
          <TextInput 
            style={styles.input}
            placeholder='Enter your question'
            name='question'
            onChangeText={(text) => this.handleChange(text, 'question')}
          />
          <TextInput 
            style={styles.input}
            placeholder='Enter your answer'
            name='answer'
            onChangeText={(text) => this.handleChange(text, 'answer')}
          />          
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={{color: '#fff'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {width: '80%', height: 50, borderRadius: 7, borderColor: '#7c53c3', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10,},
  button: {
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
export default connect()(AddCard);
