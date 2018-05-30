import React, { Component } from 'react'

const TweetListItem = ({tweet, onTweetSelect}) => {
  // const imageURL = tweet.snippet.thumbnails.default.url

  return (
    <li onClick = {() => onTweetSelect(tweet)} className="list-group-item">
      <div className="tweet-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{tweet.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default TweetListItem
