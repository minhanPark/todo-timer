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
    const { itemText, isComplete, index } = this.props;
    if (!isEdit) {
      return (
        <View
          style={[
            styles.itemWrapper,
            index % 2 === 0 ? styles.redWrapper : styles.peachWrapper
          ]}
        >
          <View style={styles.leftCol}>
            <View>
              <TouchableOpacity onPressOut={this._handleItemComplete}>
                <View
                  style={[
                    styles.circle,
                    isComplete
                      ? styles.completedCircle
                      : styles.uncompletedCircle
                  ]}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textWrapper}>
              <Text style={isComplete ? styles.completedText : styles.text}>
                {itemText}
              </Text>
            </View>
          </View>
          <View style={styles.rightCol}>
            <Button
              name="hourglass-empty"
              size="s"
              color="#2d3436"
              clickEvent={this._handleTimer}
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
        <View
          style={[
            styles.itemWrapper,
            index % 2 === 0 ? styles.redWrapper : styles.grayWrapper
          ]}
        >
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
                onBlur={this._handleEdit}
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
    if (isEdit === true) {
      const { itemText } = this.props;
      if (itemText.length !== 0) {
        this.setState({ isEdit: !isEdit });
      }
    } else {
      this.setState({ isEdit: !isEdit });
    }
  };
  _handleDelete = () => {
    const { index, setDelete } = this.props;
    setDelete(index);
  };
  _handleTextChange = text => {
    const { index, changeText } = this.props;
    changeText(index, text);
  };
  _handleItemComplete = () => {
    const { handleComplete, isComplete, index } = this.props;
    if (isComplete) {
      handleComplete(index, false);
    } else {
      handleComplete(index, true);
    }
  };
  _handleTimer = () => {
    const { startTimer, index } = this.props;
    startTimer(index, true);
  };
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 8,
    width: "95%"
  },
  redWrapper: {
    backgroundColor: "#ea8685"
  },
  peachWrapper: {
    backgroundColor: "#f3a683"
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    marginHorizontal: 6
  },
  completedCircle: {
    borderColor: "#ffffff"
  },
  uncompletedCircle: {
    borderColor: "#f7d794"
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
  completedText: {
    color: "#2d3436",
    textDecorationLine: "line-through"
  },
  input: {
    color: "#ffffff"
  }
});

export default TodoItem;
