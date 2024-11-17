import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

import { images } from '../../constants'

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewWrapper}>
          <Image 
            source={images.logo}
            resizeMode='contain'
            style={styles.logo}
          />
          <Text>Log in to Aora</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      backgroundColor: '#161622',
      alignItems: 'center',

    },
    viewWrapper: {
      width: '100%',
      justifyContent: 'center',
      height: '100%',
      paddingHorizontal: 16,
      marginVertical: 24,
    },
    logo: {
      width: 115,
      height: 35
    }
})

export default SignIn