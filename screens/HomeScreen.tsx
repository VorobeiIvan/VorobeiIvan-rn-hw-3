import { Image, StyleSheet, Text, View } from "react-native";
import PostsScreen from "./PostsScreen";

const HomeScreen = () => {
  return (
    <>
      <PostsScreen />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/images/avatar.jpg")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Natali Romanova</Text>
          <Text style={styles.text}>email@example.com</Text>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
