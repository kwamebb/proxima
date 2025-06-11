'use client'

import React from 'react'
import { Text, View } from 'react-native'

const colors = {
  background: '#0f1419',
  textPrimary: '#f8fafc',
}

export function ReportsScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ color: colors.textPrimary, fontSize: 18 }}>
        Health Reports Coming Soon
      </Text>
    </View>
  )
}