import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useGlobalContext } from "@/context/GlobalProvider";

const Search = () => {
  const { cars, carsLoading } = useGlobalContext();
  const [query, setQuery] = useState("");

  // Filter cars based on search query
  const filteredCars = cars.filter(
    (car: { make: string; type: string; location: string }) =>
      car.make.toLowerCase().includes(query.toLowerCase()) ||
      car.type.toLowerCase().includes(query.toLowerCase()) ||
      car.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Drive Your Way, Your Time</Text>
        <Text style={styles.tagline}>Find the perfect car</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={{ color: "#FFFFFF", padding: 10 }}
          value={query}
          placeholder="Location, Model, Brand"
          placeholderTextColor="#CDCDE0"
          onChangeText={(e) => setQuery(e)}
        />
      </View>

      {carsLoading ? (
        <ActivityIndicator size="large" color="#C20E0E" />
      ) : (
        <FlatList
          data={filteredCars}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.carCard}>
              <Image source={{ uri: item.image }} style={styles.carImage} />
              <View style={styles.carInfo}>
                <Text style={styles.carName}>{item.brand} {item.model}</Text>
                <Text style={styles.carDetails}>Location: {item.location}</Text>
                <Text style={styles.carDetails}>Price: ${item.price_per_day}/day</Text>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No cars found. Try a different search.</Text>
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
  },
  header: {
    height: 60,
    backgroundColor: "#161622",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 23,
    fontFamily: "Poppins-Bold",
  },
  tagline: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins-Light",
  },
  searchContainer: {
    backgroundColor: "#161622",
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cdcdcd",
  },
  carCard: {
    flexDirection: "row",
    backgroundColor: "#1E1E2A",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  carImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  carInfo: {
    marginLeft: 10,
    flex: 1,
  },
  carName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  carDetails: {
    color: "#CDCDCD",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    marginTop: 5,
  },
  emptyText: {
    color: "#CDCDCD",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default Search;
