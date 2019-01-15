import React from "react";
import { AppLoading, Asset, Font } from "expo";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    const { isLoadingComplete } = this.state;

    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssetAsync}
          onFinish={this._handleLoadingFinish}
          onError={this._handleLoadingError}
        />
      );
    }
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

  _loadAssetAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/readybeIcon192.png"),
        require("./assets/images/readybeSplash.png")
      ]),
      Font.loadAsync({
        ...Ionicons.font
      })
    ]);
  };

  _handleLoadingError = error => {
    console.error(error);
  };

  _handleLoadingFinish = async () => {
    this.setState({
      isLoadingComplete: true
    });
  };
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
