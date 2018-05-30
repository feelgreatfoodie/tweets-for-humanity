import React, { Component } from 'react'
import TweetListItem from './tweet_list_item'

const TweetList = (props) => {
  const tweetItems = props.tweets.map(tweet => {
    return (
      <TweetListItem
      onVideoSelect={props.onTweetSelect}
      key={tweet.etag}
      tweet={tweet} />
    )
  })

  return (
    <ul className="col-md-4 list-group">
      {TweetItems}
    </ul>
  )
}

export default TweetList
