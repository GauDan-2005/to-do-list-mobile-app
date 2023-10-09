import { Pressable, StyleSheet, Text, View } from "react-native";

function ListItem({ id, text, deleteItem }) {
  return (
    <Pressable onPress={() => deleteItem(id)}>
      <View style={styles.itemBox}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    marginVertical: 4,

    alignItems: "center",
    backgroundColor: "#BEADFA",
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    padding: 8,
  },
});
