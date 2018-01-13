import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import Navigation from 'scratchgolfnycMobile/app/navigation';

class App extends Component {
  componentWillMount() {
    this.navigation.dispatch(NavigationActions.init());
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.obBackPress);
  }

  get navigation() {
    return addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    })
  }

  onbackPress() {
    const { dispatch, nav } = this.props;

    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    return (
      <Navigation navigation={this.navigation} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  };
}

export default connect(mapStateToProps)(App);
