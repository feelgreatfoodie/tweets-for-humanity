import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonPlay extends Component {

  _onPressButton() {

    const questions = [
      "Instead of Easter eggs, the Easter bunny now gives children _______",
      "In a world plagued by global warning, our only solace is ______",
      "Spring is the best time for _______",
      "Instead of of spending your spring outside, you're spending your spring _______",
      "The sun's coming out, the days are getting longer, and now I'm _______"
    ]

    const x = questions[Math.ceil(Math.random()*4).toString()]
    Alert.alert(x)
  }

  render() {
    return (
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Choose a Topic"
          />
          {/* <Button
            onPress={this._onPressButton}
            title="Search for answers"
          /> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    // backgroundColor: #2b5eb5
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
