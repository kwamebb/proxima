'use client'

import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { TextLink } from 'solito/link'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

// Ultramodern medical color scheme
const colors = {
  background: '#0f1419',
  surface: '#1e2328',
  surfaceLight: '#2a2f36',
  primary: '#0891b2',
  secondary: '#1e40af',
  healthExcellent: '#10b981',
  healthGood: '#f59e0b',
  healthConcern: '#FF5722',
  healthCritical: '#ef4444',
  textPrimary: '#f8fafc',
  textSecondary: '#94a3b8',
  textMuted: '#64748b',
  buttonPrimary: '#0891b2',
  buttonSecondary: '#374151',
  accent: '#38bdf8',
}

export function HomeScreen() {
  const [greeting, setGreeting] = useState('')
  const [healthScore] = useState(7) // Mock health score

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting('Good morning')
    } else if (hour < 17) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good evening')
    }
  }, [])

  const getHealthColor = (score: number) => {
    if (score >= 8) return colors.healthExcellent
    if (score >= 6) return colors.healthGood
    if (score >= 3) return colors.healthConcern
    return colors.healthCritical
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <View style={{ paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20 }}>
          <Text style={{ 
            fontSize: 28, 
            fontWeight: '700', 
            color: colors.textPrimary,
            marginBottom: 4
          }}>
            {greeting}, Alex
          </Text>
        </View>

        {/* 3D Portal Preview Section (3/8 of screen) */}
        <View style={{ 
          height: screenHeight * 0.375, 
          marginHorizontal: 20, 
          marginBottom: 24,
          borderRadius: 20,
          backgroundColor: colors.surface,
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Mock 3D Model */}
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.surfaceLight,
          }}>
            {/* Simple human silhouette mockup */}
            <View style={{
              width: 120,
              height: 200,
              backgroundColor: colors.primary,
              borderRadius: 60,
              opacity: 0.8,
              position: 'relative',
            }}>
              {/* Head */}
              <View style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: colors.primary,
                position: 'absolute',
                top: -30,
                left: 30,
              }} />
              {/* Arms */}
              <View style={{
                width: 40,
                height: 8,
                backgroundColor: colors.primary,
                position: 'absolute',
                top: 40,
                left: -50,
                borderRadius: 4,
              }} />
              <View style={{
                width: 40,
                height: 8,
                backgroundColor: colors.primary,
                position: 'absolute',
                top: 40,
                right: -50,
                borderRadius: 4,
              }} />
              {/* Legs */}
              <View style={{
                width: 25,
                height: 80,
                backgroundColor: colors.primary,
                position: 'absolute',
                bottom: -80,
                left: 20,
                borderRadius: 12,
              }} />
              <View style={{
                width: 25,
                height: 80,
                backgroundColor: colors.primary,
                position: 'absolute',
                bottom: -80,
                right: 20,
                borderRadius: 12,
              }} />
            </View>
          </View>
          
          {/* Assess Symptoms Button Overlay */}
          <TouchableOpacity style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            backgroundColor: colors.buttonPrimary,
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: 'center',
          }}>
            <Text style={{
              color: colors.textPrimary,
              fontSize: 18,
              fontWeight: '600',
            }}>
              Assess Symptoms
            </Text>
          </TouchableOpacity>
        </View>

        {/* Health Indicator */}
        <View style={{
          marginHorizontal: 20,
          marginBottom: 24,
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 20,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: '600', color: colors.textPrimary, marginBottom: 4 }}>
                Health Score
              </Text>
              <Text style={{ fontSize: 14, color: colors.textSecondary }}>
                Based on recent assessments
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: colors.surfaceLight,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 4,
                borderColor: getHealthColor(healthScore),
              }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: getHealthColor(healthScore),
                }}>
                  {healthScore}
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: colors.textMuted, marginTop: 4 }}>
                out of 10
              </Text>
            </View>
          </View>
        </View>

        {/* Dashboard Cards */}
        <View style={{ marginHorizontal: 20, marginBottom: 24 }}>
          {/* Active Symptoms */}
          <TouchableOpacity style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary, marginBottom: 4 }}>
                  Active Symptoms
                </Text>
                <Text style={{ fontSize: 14, color: colors.textSecondary }}>
                  2 ongoing concerns
                </Text>
              </View>
              <View style={{
                backgroundColor: colors.healthConcern,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 12,
              }}>
                <Text style={{ fontSize: 12, fontWeight: '600', color: colors.textPrimary }}>
                  Moderate
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Recent Assessments */}
          <TouchableOpacity style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary, marginBottom: 4 }}>
                  Recent Assessment
                </Text>
                <Text style={{ fontSize: 14, color: colors.textSecondary }}>
                  Abdominal pain - 2 hours ago
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: colors.accent }}>
                View Details
              </Text>
            </View>
          </TouchableOpacity>

          {/* Health Metrics Graph */}
          <TouchableOpacity style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
          }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary, marginBottom: 12 }}>
              Pain Level Trend
            </Text>
            {/* Simple line graph mockup */}
            <View style={{ height: 80, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              {[2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5].map((value, index) => (
                <View
                  key={index}
                  style={{
                    width: 12,
                    height: (value / 10) * 80,
                    backgroundColor: colors.healthConcern,
                    borderRadius: 2,
                    opacity: 0.7 + (value / 20),
                  }}
                />
              ))}
            </View>
            <Text style={{ fontSize: 12, color: colors.textMuted, marginTop: 8 }}>
              Last 12 hours
            </Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={{ marginHorizontal: 20, marginBottom: 24 }}>
          <TouchableOpacity style={{
            backgroundColor: colors.buttonSecondary,
            borderRadius: 16,
            padding: 20,
            alignItems: 'center',
            marginBottom: 16,
          }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary }}>
              Prepare for Doctor Visit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            backgroundColor: colors.buttonPrimary,
            borderRadius: 16,
            padding: 20,
            alignItems: 'center',
          }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary }}>
              Photo Analysis
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Tips Section */}
        <View style={{ marginHorizontal: 20, marginBottom: 40 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary, marginBottom: 12 }}>
            Health Tips
          </Text>
          <View style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 16,
          }}>
            <Text style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 20 }}>
              Based on your recent symptoms, consider staying hydrated and monitoring your pain levels. If symptoms worsen, seek immediate medical attention.
            </Text>
          </View>
        </View>

        {/* Temporary development links */}
        <View style={{ marginHorizontal: 20, marginBottom: 40, opacity: 0.5 }}>
          <Text style={{ fontSize: 12, color: colors.textMuted, marginBottom: 8 }}>Development:</Text>
          <TextLink href="/login" style={{ fontSize: 12, color: colors.accent, marginBottom: 4 }}>
            Login Screen
          </TextLink>
          <TextLink href="/doctor-dashboard" style={{ fontSize: 12, color: colors.accent }}>
            Doctor Dashboard
          </TextLink>
        </View>
      </ScrollView>
    </View>
  )
}
