import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Padding, FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View
        style={[styles.kusooDhawoowIibiyeAppWrapper, styles.wrapperFlexBox]}
      >
        <Text style={styles.kusooDhawoowIibiye}>{`kusoo dhawoow 
Iibiye App`}</Text>
      </View>
      <View style={[styles.suuq1Wrapper, styles.wrapperFlexBox]}>
        <ImageBackground
          style={styles.suuq1Icon}
          resizeMode="cover"
          source={require("../assets/suuq1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  kusooDhawoowIibiye: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  kusooDhawoowIibiyeAppWrapper: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
  },
  suuq1Icon: {
    width: 318,
    height: 318,
  },
  suuq1Wrapper: {
    alignSelf: "stretch",
    marginTop: 72,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  splashScreen: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 932,
    overflow: "hidden",
    paddingHorizontal: 46,
    paddingVertical: 167,
    alignItems: "center",
    flex: 1,
  },
});

export default SplashScreen;
