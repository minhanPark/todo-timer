import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class AppPresenter extends Component {
  render() {
    const { test } = this.props;
    return (
      <View style={styles.bottom}>
        <Text>{test}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    backgroundColor: "#ea8685",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AppPresenter;
