import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";

const PostsScreen = () => {
  return (
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
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    gap: 8,
    paddingTop: 32,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border_gray,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black_primary,
  },
  text: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
  },
});
