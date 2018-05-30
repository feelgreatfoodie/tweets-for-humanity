import React, { Component } from 'react'
import TweetListItem from './tweet_list_item'
import { FlatList, List, ListView} from 'react-native'

const TweetList = (props) => {
  const tweetItems = props.tweets.map(tweet => {
    return (





      <TweetListItem
      onTweetSelect={props.onTweetSelect}
      key={tweet.etag}
      tweet={tweet} />
    )
  })

  renderItem = () => {

  }


  return (
    <List>
      <FlatList
        // data={this.state.data}
        renderItem={ ({ item }) =>  <ListItem /> }
      />
    </List>

    // <View className="col-md-4 list-group">
    //   {this.renderTweets}
    // </View>
  )
}

export default TweetList
