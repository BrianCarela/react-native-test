import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

  /////////////THIS IS AN EXAMPLE OF STATE CHANGING DYNAMICALLY
  // constructor() {
  //   super()
  //   this.state = {}
  //   this.state.customStyles = {
  //     color: 'red'
  //   }
  //   setInterval(() => {
  //     if(this.state.customStyles.color == 'red'){
  //       this.setState({
  //         customStyles: {
  //           color: 'green'
  //         }
  //       })
  //     } else{
  //       this.setState({
  //         customStyles: {
  //           color: 'red'
  //         }
  //       })
  //     }

  //   }, 1000)
  // }

  // The following line is an example of passing an array of objects as a prop, so you can apply multiple styles to the same Text component
  // [styles.welcome, this.state.customStyles]

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>

          <Text style={styles.welcome}>LALALALALALA</Text>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slategray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
});
