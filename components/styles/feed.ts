import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "./window";
export default StyleSheet.create({
  feedsContainer: {
    alignItems: "center",
    paddingTop: 70,
  },
  feedContainer: {
    width: "90%",
    height: windowHeight * 0.55,
    borderColor: "#F0ECE3",
    borderWidth: 2,
    marginTop: 15,
    alignItems: "center",
  },
  feedFlip: {
    width: "90%",
    height: "65%",
    borderColor: "#F0ECE3",
    borderWidth: 1,
    marginTop: 5,
  },
  feedExample: {},
  feedExampleText: {},
  feedActiveExamplesContainer: {
    height: "14%",
    width: "90%",
    borderColor: "#F4ac03",
    borderWidth: 1,
  },
  feedDeactiveExampleContainer: {
    height: "14%",
    width: "90%",
    borderColor: "#F4ac03",
    borderWidth: 1,
  },
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
  feedExampleContainer: {
    paddingLeft: 10,
    flexDirection: "row",
    width: "100%",
    height: "10%",

    alignItems: "center",
  },
  feedExampleInput: {
    width: "85%",
    height: "90%",
    borderRadius: 20,
    borderColor: "#F0ECE3",
    borderWidth: 3,
    textAlign: "left",
  },
  exampleIconContainer: {
    width: "100%",
    height: "10%",
  },
  exampleButton: {
    width: "15%",
    height: "100%",
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  exampleButtonIcon: {
    width: "60%",
    height: "70%",
  },
  exampleIcon: {},
  exampleContainer: {
    width: "100%",
    height: "10%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#F0ECE3",
  },
  examplesContainer: {
    width: "100%",
    height: "90%",
  },
  feedExampleButton: {},
  feedExampleButtonText: {},
});
