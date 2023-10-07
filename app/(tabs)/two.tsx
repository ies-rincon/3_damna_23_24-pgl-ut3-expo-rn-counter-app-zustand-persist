import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { useCounterStore } from "../../store/CounterStore";

const TabTwoScreen = () => {
  const clickCounter = useCounterStore((state) => state.clickCounter);
  const labelClick = clickCounter === 1 ? "Click" : "Clicks";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{clickCounter}</Text>
      <Text style={styles.title}>{labelClick}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TabTwoScreen;
