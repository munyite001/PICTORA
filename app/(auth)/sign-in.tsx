import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'

import { images } from '../../constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = () => {}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewWrapper}>
          <Image
            source={images.logo}
            resizeMode='contain'
            style={styles.logo}
          />
          <Text style={styles.text}>Log in to Aora</Text>

          <FormField 
            title='Email'
            value={form.email}
            handleChange={(email: any) => setForm({ ...form, email: email })}
            placeholder='Enter your email'
            keyBoardType='email-address' 
            handleChangeText={undefined} 
            otherStyles={undefined}          />
          <FormField 
            title='Password'
            value={form.password}
            placeholder='Enter your password'
            handleChange={(password: any) => setForm({ ...form, password: password })} handleChangeText={undefined} otherStyles={undefined}          />

          <CustomButton 
            title='Sign In'
            handlePress={submitForm}
            isLoading={isSubmitting} containerStyles={undefined} textStyles={undefined}          />
          <View style={styles.textContainer}>
            <Text style={styles.text2}>Don't have an account?</Text>
            <Link href="/sign-up" style={styles.link}>Sign Up</Link>
          </View>
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
    },
    text: {
      marginTop: 24,
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 24,
      color: '#ffffff'
    },
    textContainer: {
      justifyContent: 'center', // Equivalent to justify-center
      paddingTop: 20, // Equivalent to pt-5 (5 * 4px = 20px)
      flexDirection: 'row', // Equivalent to flex-row
      gap: 8, // Equivalent to gap-2 (2 * 4px = 8px)
    },
    text2: {
      fontSize: 18, // Equivalent to text-lg
      color: '#f5f5f5', // Equivalent to text-gray-100
      fontFamily: 'P-Regular', // Assuming 'P-Regular' is the custom font you defined
    },
    link: {
      fontSize: 18, // Equivalent to text-lg
      fontFamily: 'PSemibold', // Assuming 'PSemibold' is the custom font you defined
      color: '#FF8C00', // Equivalent to text-indigo-500
    }
})

export default SignIn