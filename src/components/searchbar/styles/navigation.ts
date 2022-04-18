import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  searchContainer: {
    zIndex: 10,
    width: "100%",
    height: "15%",
    alignItems: "center",
    paddingTop: 100,
    borderWidth: 3,
    borderColor: "#FF023F",
    position: "absolute",
    backgroundColor: "#FFFFFF"
  },
  search: {
    width: 341,
    height: 64,
    borderRadius: 30,
    borderColor: "#F0ECE3",
    borderWidth: 3,
    marginTop: 15,
    padding: 20,
    position: "absolute",
    textAlign: "left",
    backgroundColor: "#FFFFFF",
  },
});
