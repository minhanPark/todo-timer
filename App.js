import React from "react";
import { AppLoading, Asset, Font } from "expo";
import { MaterialIcons } from "@expo/vector-icons";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import configureStore from "./reducer/configureStore";
import AppPresenter from "./components/AppPresenter";

const { persistor, store } = configureStore();

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppPresenter />
        </PersistGate>
      </Provider>
    );
  }

  _loadAssetAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/readybeIcon192.png"),
        require("./assets/images/splash.png")
      ]),
      Font.loadAsync({
        ...MaterialIcons.font
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
