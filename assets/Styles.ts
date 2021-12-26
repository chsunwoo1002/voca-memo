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
    width: windowWidth * 0.8,
    height: windowHeight * 0.7,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "#fff",
  },
  /**FlipVocaCard.tsx style attributes */
  card: {
    width: "50%",
    height: "50%",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "red",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    width: 900,
    height: "100%",
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
