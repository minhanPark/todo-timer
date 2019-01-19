import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Button from "../ButtonComponent";

class TopText extends Component {
  state = {
    text: ""
  };
  render() {
    const { fightingText, isEdited } = this.props;
    const { text } = this.state;

    if (!isEdited) {
      return (
        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.topText}>
              {fightingText}
            </Text>
          </View>
          <Button
            name="create"
            size="m"
            color="#596275"
            clickEvent={this._handlefightingText}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.wrapper}>
          <View style={styles.row}>
            <TextInput
              placeholder={fightingText}
              placeholderTextColor={"#ffffff"}
              onChangeText={this._handleText}
              value={text}
              style={styles.topText}
              onBlur={this._handleSubmit}
            />
          </View>
          <Button
            name="check-box"
            size="m"
            color="#596275"
            clickEvent={this._handleSubmit}
          />
        </View>
      );
    }
  }
  _handlefightingText = () => {
    const { setEdit } = this.props;
    setEdit(true);
  };
  _handleText = text => {
    this.setState({ text });
  };
  _handleSubmit = () => {
    const { text } = this.state;
    const { setFightingText, setEdit } = this.props;
    if (text.length !== 0) {
      setFightingText(text);
      setEdit(false);
      this.setState({
        text: ""
      });
    }
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderEndWidth: 1,
    borderBottomWidth: 1,
    padding: 4
  },
  row: {
    flex: 1,
    marginRight: 4
  },
  topText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right"
  }
});

export default TopText;
