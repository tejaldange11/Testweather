/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react'
import Navigation from './Src/Navigation';
import Home from './Src/Home';
class App extends Component {
  constructor(){
    super();
      state = {
          count: 0
        }
  }

render() {
  return (
    <Navigation />
  )
}
}
export default App;