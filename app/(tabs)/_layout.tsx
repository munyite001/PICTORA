import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from "expo-router"
import { icons } from '../../constants'

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 60,
      marginTop: 10,
    }}>
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? color : 'gray'
        }}
        />
        <Text style={{
          fontFamily: focused ? 'Poppins_600SemiBold' : 'Poppins_400Regular',
          fontSize: 11,
          color: focused ? color : 'gray', // Use the passed `color` directly
        }}>
          {name}
        </Text>

    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84
        }
      }}
      >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.home} 
              color={color} 
              name="Home"
              focused={focused} 
            />
        )}}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.bookmark} 
              color={color} 
              name="Bookmark"
              focused={focused} 
            />
        )}}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.plus} 
              color={color} 
              name="Create"
              focused={focused} 
            />
        )}}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.profile} 
              color={color} 
              name="Profile"
              focused={focused} 
            />
        )}}
      />
    </Tabs>
    </>
  )
}

export default TabsLayout