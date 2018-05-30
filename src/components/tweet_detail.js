import React, { Component } from 'react'

const TweetDetail = ({tweet}) => {
  if(!tweet) {
    return <div>Loading...</div>
  }

  // const videoId = tweet.id.videoId
  // const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="tweet-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{tweet.snippet.title}</div>
        <div>{tweet.snippet.description}</div>
      </div>
    </div>
  )
}

export default TweetDetail
