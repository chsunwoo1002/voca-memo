import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "./window";
export default StyleSheet.create({
  feedsContainer: {
    alignItems: "center",
  },
  feedContainer: {
    width: "90%",
    height: windowHeight * 0.6,
    borderColor: "#F0ECE3",
    borderWidth: 2,
    marginTop: 15,
    alignItems: "center",
  },
  feedFlip: {
    width: "90%",
    height: "60%",
    borderColor: "#F0ECE3",
    borderWidth: 1,
    marginTop: 5,
  },
  feedExample: {},
  feedExampleText: {},
  feedActiveExamplesContainer: {
    height: "30%",
    width: "90%",
    borderColor: "#F4ac03",
    borderWidth: 1,
  },
  feedDeactiveExampleContainer: {},
  feedButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
    borderColor: "#F0ECE3",
    borderWidth: 1,
  },
  feedButton: {
    width: "15%",
    height: "100%",
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  feedButtonIcon: {
    width: "60%",
    height: "70%",
  },
});
