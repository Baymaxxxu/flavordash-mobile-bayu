import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { login } from "@/utils/auth";

export default function LoginScreen() {
  const handleLogin = async () => {
    await login();

    router.replace("/detail-pesanan");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlavorDash Login</Text>

      <Text style={styles.subtitle}>
        Login untuk melihat detail pesanan
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F2",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF7043",
  },

  subtitle: {
    marginTop: 10,
    color: "#666",
    marginBottom: 24,
  },

  button: {
    backgroundColor: "#FF7043",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 24,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});