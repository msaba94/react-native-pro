import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";

function Main({ navigation }) {
  var rawdata = [
    { id: "1", title: "Item #1" },
    { id: "2", title: "Item #2" },
    { id: "3", title: "Item #3" },
    { id: "4", title: "Item #4" },
    { id: "5", title: "Item #5" },
  ];

  const Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        data={rawdata}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "#000",
  },
});
