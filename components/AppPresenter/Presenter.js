import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../ButtonComponent";

class AppPresenter extends Component {
  state = {
    name: "minhan",
    name2: "min"
  };
  render() {
    const { test } = this.props;
    return (
      <View style={styles.bottom}>
        <Text>{test}</Text>
        <Button
          name="accessibility"
          size="m"
          color="#1abc9c"
          clickEvent={this._handleState}
        />
        <Button
          name="accessibility"
          size="l"
          color="#1abc9c"
          clickEvent={this._handleState}
        />
        <Button
          name="account-balance"
          size="l"
          color="#e74c3c"
          clickEvent={this._handleState2}
        />
      </View>
    );
  }

  _handleState = () => {
    const { name } = this.state;
    alert(name);
  };
  _handleState2 = () => {
    const { name2 } = this.state;
    alert(name2);
  };
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
