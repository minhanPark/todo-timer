import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../ButtonComponent";
import TimerChange from "../../lib/timerChange";
import { AdMobBanner } from "expo";

const BANNER_ID = "ca-app-pub-3940256099942544/6300978111";

class Timer extends Component {
  state = {
    timer: null,
    counter: 0
  };

  componentDidMount() {
    let timer = setInterval(this._tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    const { counter } = this.state;
    return (
      <View style={styles.container}>
        <Text>{TimerChange(counter)}</Text>
        <Button
          name="stop"
          size="l"
          color="#2d3436"
          clickEvent={this._handleTimer}
        />
        <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="fullBanner"
          adUnitID={BANNER_ID}
          // Test ID, Replace with your-admob-unit-id
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    );
  }
  _handleTimer = () => {
    const { counter } = this.state;
    const { startTimer, updateTimer, currentItem } = this.props;
    updateTimer(currentItem, counter);
    startTimer(0, false);
  };
  _tick = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  };
  bannerError = () => {
    console.log("An error");
    return;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ea8685",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  }
});

export default Timer;
