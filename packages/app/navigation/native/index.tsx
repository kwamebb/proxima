import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'

import { HomeScreen } from 'app/features/home/screen'
import { Body3DScreen } from 'app/features/body3d/screen'
import { CameraScreen } from 'app/features/camera/screen'
import { ReportsScreen } from 'app/features/reports/screen'
import { ProfileScreen } from 'app/features/profile/screen'

const Tab = createBottomTabNavigator()

const colors = {
  tabBarBackground: '#1e2328',
  tabBarBorder: '#374151',
  activeTab: '#0891b2',
  inactiveTab: '#64748b',
  cameraTab: '#0891b2',
}

export function NativeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.tabBarBackground,
          borderTopColor: colors.tabBarBorder,
          borderTopWidth: 1,
          height: 90,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any
          let iconSize = size

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === '3D Body') {
            iconName = focused ? 'body' : 'body-outline'
          } else if (route.name === 'Camera') {
            iconName = 'add'
            iconSize = 32
            return (
              <View style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: colors.cameraTab,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
              }}>
                <Ionicons name={iconName} size={iconSize} color="white" />
              </View>
            )
          } else if (route.name === 'Reports') {
            iconName = focused ? 'document-text' : 'document-text-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }

          return <Ionicons name={iconName} size={iconSize} color={color} />
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="3D Body" component={Body3DScreen} />
      <Tab.Screen 
        name="Camera" 
        component={CameraScreen}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
