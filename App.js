import React from 'react';
import { FlatList } from 'react-native';
// import { StyleSheet, Text, View } from 'react-native';

import Article from './src/components/article';
// import Test from './test';

import { getNews } from './src/news';
// import { getBleacher } from './src/bleacher';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refreshing: true
    };
    this.fetchNews = this.fetchNews.bind(this);
  }
  
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles: articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
    // getBleacher()
    //   .then(articles => this.setState({ articles: articles, refreshing: false }))
    //   .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState({
      refreshing: true
    },
    () => this.fetchNews()
    );
  }
  
  render() {
    return (
      <FlatList 
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
      // <View style={styles.container}>
      //   <Test />
      //   <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'red'
//   }
// });
