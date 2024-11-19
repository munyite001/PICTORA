import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'

//  Acts as the default splashcreen
export default function index() {

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/search'); // Redirect to the `/home` route
    }, 5000); // 5-second delay

    return () => clearTimeout(timeout); // Clean up the timeout on unmount
  }, [router]);

  return (
    <>
      <StatusBar style="light" backgroundColor="#161622" />
      <SafeAreaView style={styles.container}>
        <Image 
          source={images.logo}
          style={styles.splashLogo}
          resizeMode='contain'
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161622',
  },
  splashLogo: {
    width: 200,
    height: 200,
    marginTop: 'auto',
    marginBottom: 'auto',
  }
});
