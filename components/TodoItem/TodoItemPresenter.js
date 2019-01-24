import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import Button from "../ButtonComponent";

class TodoItem extends Component {
  state = {
    isEdit: false,
    text: ""
  };
  render() {
    const { isEdit } = this.state;
    const { itemText, isComplete } = this.props;
    if (!isEdit) {
      return (
        <View style={styles.itemWrapper}>
          <View style={styles.leftCol}>
            <View>
              <TouchableOpacity>
                <View style={styles.circle} />
              </TouchableOpacity>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{itemText}</Text>
            </View>
          </View>
          <View style={styles.rightCol}>
            <Button
              name="hourglass-empty"
              size="s"
              color="#2d3436"
              clickEvent={this._handleState}
            />
            <Button
              name="create"
              size="s"
              color="#2d3436"
              clickEvent={this._handleEdit}
            />
            <Button
              name="delete"
              size="s"
              color="#2d3436"
              clickEvent={this._handleDelete}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.itemWrapper}>
          <View style={styles.leftCol}>
            <View>
              <TouchableOpacity>
                <View style={styles.circle} />
              </TouchableOpacity>
            </View>
            <View style={styles.textWrapper}>
              <TextInput
                value={itemText}
                placeholderTextColor={"#ffffff"}
                autoCorrect={false}
                underlineColorAndroid="transparent"
                style={styles.input}
                multiline={true}
                onChangeText={this._handleTextChange}
                onBlur={this._handleOnblur}
              />
            </View>
          </View>
          <View style={styles.rightCol}>
            <Button name="hourglass-empty" size="s" color="#2d3436" />
            <Button
              name="done"
              size="s"
              color="#2d3436"
              clickEvent={this._handleEdit}
            />
            <Button name="delete" size="s" color="#2d3436" />
          </View>
        </View>
      );
    }
  }
  _handleEdit = () => {
    const { isEdit } = this.state;
    this.setState({ isEdit: !isEdit });
  };
  _handleDelete = () => {
    const { index, setDelete } = this.props;
    setDelete(index);
  };
  _handleTextChange = text => {
    const { index, changeText } = this.props;
    changeText(index, text);
  };
  _handleOnblur = () => {
    const { index, changeText, itemText } = this.props;
    changeText(index, itemText);
  };
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    backgroundColor: "#e77f67",
    borderRadius: 8,
    marginTop: 4,
    paddingVertical: 8,
    width: "98%"
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#f7d794",
    marginHorizontal: 6
  },
  leftCol: {
    flexDirection: "row",
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    // borderColor: "green",
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  rightCol: {
    flexDirection: "row",
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    alignItems: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  textWrapper: {
    width: 0,
    flexGrow: 1,
    flex: 1
  },
  text: {
    color: "#2d3436"
  },
  input: {
    color: "#ffffff"
  }
});

export default TodoItem;
