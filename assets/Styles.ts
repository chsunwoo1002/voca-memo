import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  /**App.tsx style attributes */
  entireScreen: {
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  entireContainer: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.7,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nopeText: {
    borderWidth: 1,
    borderColor: "red",
    color: "red",
    fontSize: 32,
    fontWeight: "800",
    padding: 10,
  },
  yesText: {
    borderWidth: 1,
    borderColor: "green",
    color: "green",
    fontSize: 32,
    fontWeight: "800",
    padding: 10,
  },
  /* Testing */
  testContainer: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.7,
    padding: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "black",
    position: "absolute",
  },
  /**FlipVocaCard.tsx style attributes */
  card: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.6,
    padding: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "black",
    position: "absolute",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "black",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  /**NavigationContainer.tsx style attributes */
  navigationContainer: {
    width: windowWidth,
    height: windowHeight * 0.08,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
    alignItems: "center",

    backgroundColor: "#fff",
  },

  search: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.05,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#f194ff",
  },
  // loadingProps={{ size: "small", color: "white" }}
  //       buttonStyle={{
  //         backgroundColor: "rgba(111, 202, 186, 1)",
  //         borderRadius: 5,
  //       }}
  //       titleStyle={{ fontWeight: "bold", fontSize: 23 }}
  //       containerStyle={{
  //         marginHorizontal: 50,
  //         height: 50,
  //         width: 200,
  //         marginVertical: 10,
  //       }}
});
