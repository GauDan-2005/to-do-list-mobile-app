import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import InputBox from "./components/Input/InputBox";
import ListItem from "./components/List/ListItem";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask(task) {
    setTaskList((prev) => [...prev, task]);
  }

  function removeTask(id) {
    setTaskList((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.heading}>Todays Tasks</Text>
        <View style={styles.listItems}>
          <FlatList
            data={taskList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItem id={item.id} text={item.text} deleteItem={removeTask} />
            )}
          />
        </View>
      </View>

      <InputBox addItem={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFCCFB",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    gap: 8,
  },
  list: {
    width: "100%",
    paddingLeft: 32,
    paddingRight: 32,
    flex: 5,
    gap: 16,
    alignItems: "center",
  },
  heading: {
    padding: 12,
    width: "100%",
    fontSize: 28,
    fontWeight: "bold",
    borderRadius: 8,
    backgroundColor: "#9F91CC",
    color: "white",
    textAlign: "center",
  },
  listItems: {
    flex: 1,
    gap: 4,
    justifyContent: "space-around",
    width: "80%",
  },
});
