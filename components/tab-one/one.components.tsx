import React from "react";
import { View } from "react-native";
import { FAB } from "react-native-elements";
import { styles } from "./one.styles";
import { useCounterStore } from "../../store/CounterStore";

export const CustomButton: React.FC<CustomButtonProps> = ({ icon }) => {
  const clickCounter = useCounterStore((state) => state.clickCounter);
  const handleRefresh = useCounterStore((state) => state.handleRefresh);
  const handleIncrement = useCounterStore((state) => state.handleIncrement);
  const handleDecrement = useCounterStore((state) => state.handleDecrement);

  const onPressHandler = () => {
    if (icon === "refresh") {
      handleRefresh();
    } else if (icon === "plus-one") {
      handleIncrement();
    } else if (icon === "exposure-minus-1") {
      handleDecrement();
    }
  };
  return (
    <View style={styles.buttonContainer}>
      <FAB
        disabled={icon === "exposure-minus-1" && clickCounter === 0}
        icon={{ name: icon, color: "white" }}
        onPress={onPressHandler}
      />
    </View>
  );
};
