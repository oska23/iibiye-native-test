import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const MainScreen = () => {
  return <View style={styles.mainScreen} />;
};

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default MainScreen;
