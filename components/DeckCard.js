import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation'

const { width } = Dimensions.get('window')
class DeckCard extends Component {
  render() {
    const {questions, title} = this.props.deck;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('DeckDetails', {deck: this.props.deck})}>
        <Text style={{fontSize: 30, textAlign: 'center', color: '#fff'}}>{title}</Text>
        <Text style={{textAlign: 'center', color: '#fff'}}> {questions} Cards</Text>        
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: '#7c53c3',
    borderRadius: 7,
    marginTop: 10,
    width: width * .95
  }
})
export default withNavigation(DeckCard);
