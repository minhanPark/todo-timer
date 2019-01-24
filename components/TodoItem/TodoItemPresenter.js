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
              <Text style={styles.text}>
                김수한무 거북이와 두루미 삽천갑자 동방삭 치치카포 사리사리센타
                워리워리 세브리깡
              </Text>
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
              clickEvent={this._handleState}
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
                value={
                  "김수한무 거북이와 두루미 삽천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡"
                }
                placeholderTextColor={"#ffffff"}
                autoCorrect={false}
                underlineColorAndroid="transparent"
                style={styles.input}
                multiline={true}
              />
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
              name="done"
              size="s"
              color="#2d3436"
              clickEvent={this._handleEdit}
            />
            <Button
              name="delete"
              size="s"
              color="#2d3436"
              clickEvent={this._handleState}
            />
          </View>
        </View>
      );
    }
  }
  _handleEdit = () => {
    const { isEdit } = this.state;
    this.setState({ isEdit: !isEdit });
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
