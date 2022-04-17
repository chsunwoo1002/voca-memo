import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footerContainer: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    borderColor: "#F0ECE3",
    borderTopWidth: 3,
    justifyContent: "center",
  },
  footerButtonCotainer: {
    width: "20%",
    height: "80%",
    margin: 10,
    borderColor: "#000000",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  footerButtonIcon: {
    width: "70%",
    height: "70%",
  },
  footerButtonText: {},
});
