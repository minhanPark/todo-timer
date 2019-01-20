import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Button from "../ButtonComponent";

class AddInput extends Component {
  state = {
    text: ""
  };
  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          onBlur={this._handleSublit}
          placeholder="Add To Do List"
          placeholderTextColor="white"
          style={styles.input}
          value={text}
          onChangeText={this._handleText}
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        <Button
          name="add"
          size="s"
          color="#ffffff"
          clickEvent={this._handleSublit}
        />
      </View>
    );
  }
  _handleText = text => {
    this.setState({ text });
  };
  _handleSublit = () => {
    const { setSubmit } = this.props;
    const { text } = this.state;
    if (text.length !== 0) {
      setSubmit(text);
      this.setState({
        text: ""
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    width: "90%",
    backgroundColor: "#d2dae2",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 18,
    top: 18,
    zIndex: 2
  },
  input: {
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    fontSize: 18,
    flex: 1
  }
});

export default AddInput;
