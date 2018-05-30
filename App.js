import React, {Component} from 'react'
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
import TweetListItem from './src/components/tweet_list_item'
import tweets from './sampleTweets.json'

type Props = {}

export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      tweets: tweets.statuses,
      selectedTweet: null
    }

    this.tweetSearch('springtime')
  }


  tweetSearch(term) {
    // this.setState({ tweets })
    return tweets
  }

  render() {

    const tweetSearch = _.debounce(term => {
      this.tweetSearch(term)
    }, 300)

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>
            Welcome to Tweets For Humanity!
          </Text>
          <Text style={styles.instructions}>
            To get started, let's choose a topic
          </Text>
          <ButtonPlay />
        </View>
        <View>
          {/* <SearchBar onSearchTermChange={tweetSearch} />
            <TweetDetail tweet={this.state.selectedTweet} />
            <TweetList
              onTweetSelect={selectedTweet => this.setState({selectedTweet})}
              tweets={this.state.tweets} /> */
          }
          <TweetListItem tweets={this.state.tweets}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#c3c3c3'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 200
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
