import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link
          asChild
          href="/"
          style={{ padding: 10 }}
          className="text-blue-400"
        >
          <Pressable>
            <Text>Home!</Text>
          </Pressable>
        </Link>

        <Text>
          This is a simple app that demonstrates how to use the Expo Router with
          Tailwind CSS in a React Native app.4
        </Text>
      </ScrollView>
    </Screen>
  );
}
