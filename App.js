/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import ButtonPlay from './src/components/button'
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import _ from 'lodash'
// import ReactDOM from 'react-dom'
import SearchBar from './src/components/search_bar'
import TweetDetail from './src/components/tweet_detail'
import TweetList from './src/components/tweet_list'
import tweets from './sampleTweets.json'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

type Props = {}

export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      tweets: [],
      selectedTweet: null
    }

    this.tweetSearch('springtime')
  }

  tweetSearch(term) {
    return tweets
  }

  render() {

    const tweetSearch = _.debounce(term => { this.tweetSearch(term) }, 300)

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Tweets For Humanity!
        </Text>
        <Text style={styles.instructions}>
          To get started, let's choose a topic
        </Text>
        <ButtonPlay />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
