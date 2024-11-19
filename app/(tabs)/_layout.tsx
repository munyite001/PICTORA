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
          {/* {name} */}
        </Text>

    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs 
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#C20E0E",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#161622",
          height: 54
        }
      }}
      >
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.search} 
              color={color} 
              name="Search"
              focused={focused} 
            />
        )}}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.heart} 
              color={color} 
              name="Favorites"
              focused={focused} 
            />
        )}}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.map} 
              color={color} 
              name="Trips"
              focused={focused} 
            />
        )}}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.more} 
              color={color} 
              name="More"
              focused={focused} 
            />
        )}}
      />
    </Tabs>
    </>
  )
}

export default TabsLayout