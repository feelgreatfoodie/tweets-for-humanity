import React, { Component } from 'react'
import { StyleSheet, Text, WebView, View } from 'react-native'

const TweetListItem = ({tweet, onTweetSelect}) => {
  // const imageURL = tweet.snippet.thumbnails.default.url
  const htmlBlocks = [
    '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Our most popular photo on social media last week: this pic from<a href="https://twitter.com/YosemiteNPS?ref_src=twsrc%5Etfw">@YosemiteNPS</a>celebrating <a href="https://twitter.com/hashtag/Wilderness50?src=hash&amp;ref_src=twsrc%5Etfw">#Wilderness50</a>. <a href="http://t.co/OMmQn3YPqJ">pic.twitter.com/OMmQn3YPqJ</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/508721252048322560?ref_src=twsrc%5Etfw">September 7, 2014</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
  ]
  return (
    <View>
      <Text>
        &nbsp;                                       &nbsp;                                              &nbsp;
      </Text>
      <WebView source={{uri: 'https://www.twitter.com'}} />
    </View>
  )
}

export default TweetListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  webView: {
    flex: 3
  },
})
{/* <WebView ref={'webview'} automaticallyAdjustContentInsets={false} source={require('../Assets/aboutus.html')} /> */}


{/* <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">
  Our most popular photo on social media last week: this pic from
  <a href="https://twitter.com/YosemiteNPS?ref_src=twsrc%5Etfw">@YosemiteNPS</a>
  celebrating <a href="https://twitter.com/hashtag/Wilderness50?src=hash&amp;ref_src=twsrc%5Etfw">
  #Wilderness50</a>. <a href="http://t.co/OMmQn3YPqJ">pic.twitter.com/OMmQn3YPqJ</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/508721252048322560?ref_src=twsrc%5Etfw">September 7, 2014</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
