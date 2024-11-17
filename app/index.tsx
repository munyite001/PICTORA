import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '@/components/CustomButton'


export default function index() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#161622" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View style={styles.viewWrapper}>
            <Image
              source={images.logo}
              style={styles.logo}
            />
            <Image 
              source={images.cards}
              style={styles.cards}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Discover Endless Possibilities with{' '}
                <Text style={[styles.text, styles.logoText]}>Aora</Text>
              </Text>
              <Image
                source={images.path}
                style={styles.clipPath}
                resizeMode='contain'
              />
            </View>
            <Text style={styles.callToAction}>
              Where Creativity Meets Innovation: 
              Embark on a journey of limitless exploration with Aora
            </Text>

            <CustomButton 
              title="Get Started"
              handlePress={() => router.push('/sign-in')}
              isLoading={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#161622',
  },
  viewWrapper: {
    width: '100%',
    minHeight: '85%',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  logo: {
    width: 140,
    height: 84,
    resizeMode: 'contain',
  },
  cards: {
    maxWidth: 380,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 20,
  },
  textContainer: {
    position: 'relative',
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoText: {
    color: "#FF8E01",
  },
  clipPath: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -5,
    right: -25,

  },
  callToAction: {
    fontSize: 12, // Equivalent to text-sm
    fontFamily: 'PRegular', // Assuming 'PRegular' is the custom font you defined
    color: '#f5f5f5', // Equivalent to text-gray-100
    marginTop: 28, // Equivalent to mt-7 (1rem = 16px, so 7 * 4 = 28px)
    textAlign: 'center', // Equivalent to text-center
  }
});
