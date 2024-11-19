import { View, Text, StyleSheet, TextInput} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Drive Your Way, Your Time</Text>
        <Text style={styles.tagline}>Find the perfect car</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
            style={{color: '#FFFFFF', padding: 10}}
            value={query}
            placeholder="Location, Model, Brand"
            placeholderTextColor="#CDCDE0"
            onChangeText={(e) => setQuery(e)}
          />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622"
  },
  header: {
    height: 60,
    backgroundColor: '#161622',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 23,
    fontFamily: 'Poppins-Bold',
  },
  tagline: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Light',
  },
   searchContainer: {
    backgroundColor: '#161622',
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cdcdcd',
   }
})

export default Search