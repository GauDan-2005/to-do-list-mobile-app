import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function InputBox({ addItem }) {
  const [task, setTask] = useState("");

  function makeItem() {
    const item = { id: Math.random() * 100, text: task };
    addItem(item);
    setTask("");
  }

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTask(text)}
        value={task}
        placeholder="Enter your tasks..."
      />
      <Button color="#9F91CC" onPress={makeItem} title="Add Task" />
    </View>
  );
}

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 16,
    padding: 16,
    width: "70%",
    justifyContent: "stretch",
    borderColor: "#9F91CC",
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: "#D0BFFF",
    gap: 8,
  },
  input: {
    borderColor: "#9F91CC",
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
  },
});
