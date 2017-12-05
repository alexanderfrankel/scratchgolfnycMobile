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
  constructor(props) {
    super(props);
    this.state = { searching: false, searchInput: '' }
  }

  searchGames() {
    this.setState({searching: true});
    this.props.fetchGames(this.state.searchInput).then( () => {
      this.setState({searching: false});
    });
  }

  games() {
    return Object.keys(this.props.searchedGames).map((key) => this.props.searchedGames[key] );
  }

  render() {
    return (
      <View style={styles.scene}>
        <View style={styles.searchSection}>
          <TextInput style={styles.searchInput}
            returnKeyType='search'
            placeholder='Search'
            onChangeText={ (searchInput) => this.setState({searchInput}) }
            value={this.state.searchInput}
          />
          <TouchableHighlight onPress={() => this.searchGames()} style={styles.searchButton}>
            <Text>Search Games</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.scrollSection}>
        {!this.state.searching && this.games().map((game) => {
          return <View key={game.id}>
            <Image source={{}} style={styles.resultImage} />
            <Text style={styles.resultText}>{game.course_name}</Text>
            <Text style={styles.resultText}>{game.date}</Text>
          </View>
        })}
        { this.state.searching ? <Text>Seaching...</Text> : null }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20,
  },
  searchSection: {
    height: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 0.7,
  },
  searchButton: {
    flex: 0.3,
  },
  scrollSection: {
    flex: 0.8,
  },
  resultImage: {
    height: 150,
  },
  resultText: {
    backgroundColor: '#000',
    color: '#FFF',
    height: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    searchedGames: state.searchedGames
  };
}

export default connect(mapStateToProps)(Home);
