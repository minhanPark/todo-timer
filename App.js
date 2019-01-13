import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text>This is ready be</Text>
        </View>
        <View style={styles.bottom}>
          <Text>This is ready be</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  upper: {
    flex: 1,
    backgroundColor: "#f7d794",
    alignItems: "center",
    justifyContent: "center"
  },
  bottom: {
    flex: 1,
    backgroundColor: "#ea8685",
    alignItems: "center",
    justifyContent: "center"
  }
});
