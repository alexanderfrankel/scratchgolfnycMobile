import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
const {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet
} = ReactNative

class Home extends Component {

  searchGames() {
    this.props.fetchGames()
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <View>
          <TouchableHighlight onPress={() => this.searchGames()}>
            <Text>Search Games</Text>
          </TouchableHighlight>
        </View>

        <ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchedGames: state.searchedGames
  };
}

export default connect(mapStateToProps)(Home);
