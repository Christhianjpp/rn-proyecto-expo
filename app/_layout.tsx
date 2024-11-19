import { Link, Slot, Stack } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          // headerShown: false,

          // headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#000",
          headerTitle: "",
          headerLeft: () => (
            <View>
              <Text>Logo!!!</Text>
            </View>
          ),
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoIcon color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
