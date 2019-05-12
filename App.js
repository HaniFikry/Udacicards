import React from 'react';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';
import TabNavigator from './components/TabNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  };

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <TabNavigator />
      </Provider>  
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
