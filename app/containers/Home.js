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
        <View style={styles.headerSection}>
          <Text style={styles.drawerButton}>AB</Text>
          <Text style={styles.headerTitle}>scratchgolfNYC</Text>
          <Text style={styles.notificationButton}>BO</Text>
        </View>
        <View style={styles.searchSection}>
          <TextInput style={styles.searchInput}
            returnKeyType='search'
            placeholder='Search'
            onChangeText={ (searchInput) => this.setState({searchInput}) }
            onSubmitEditing={() => this.searchGames()}
            value={this.state.searchInput}
          />
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
  headerSection: {
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerButton: {
    height: 30,
    width: 30,
    backgroundColor: '#000',
  },
  headerTitle: {
    fontSize: 20,
  },
  notificationButton: {
    height: 30,
    width: 30,
    backgroundColor: '#000',
  },
  searchSection: {
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchInput: {
    flex: 0.6,
    textAlign: 'center',
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
