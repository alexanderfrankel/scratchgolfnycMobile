import React, { Component  } from "react";
import { connect  } from "react-redux";
import { Text, View, TouchableOpacity, StyleSheet  } from "react-native";

class SignUp extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default connect(() => { return {} }, mapDispatchToProps)(SignUp);
