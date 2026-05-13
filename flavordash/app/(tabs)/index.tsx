import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import FoodCard from "@/components/FoodCard";
import { foods } from "@/constants/foods";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FlavorDash</Text>
        <Text style={styles.subtitle}>Katalog makanan favoritmu</Text>
      </View>

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodCard item={item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F2",
  },

  header: {
    backgroundColor: "#FF7043",
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },

  subtitle: {
    color: "#FFEDE6",
    marginTop: 4,
  },

  listContent: {
    padding: 16,
  },
});