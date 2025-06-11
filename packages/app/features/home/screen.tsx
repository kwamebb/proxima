'use client'

import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Dimensions, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Swipeable } from 'react-native-gesture-handler'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

// Premium dark medical color scheme
const colors = {
  background: '#060810',
  backgroundSecondary: '#0a0e13',
  surface: '#141922',
  surfaceElevated: '#1c2229',
  surfaceHighlight: '#252c36',
  primary: '#00bcd4',
  primaryBright: '#26c6da',
  secondary: '#1565c0',
  healthExcellent: '#00e676',
  healthGood: '#ffc107',
  healthConcern: '#ff5722',
  healthCritical: '#f44336',
  textPrimary: '#ffffff',
  textSecondary: '#b8c5d1',
  textMuted: '#697a8a',
  buttonPrimary: '#00bcd4',
  buttonSecondary: '#3a4651',
  accent: '#40c4ff',
  danger: '#ff4757',
  success: '#2ed573',
  warning: '#ffa502',
  swipeDestroy: '#ff6b6b',
  shadow: 'rgba(0, 0, 0, 0.7)',
  shadowLight: 'rgba(0, 0, 0, 0.3)',
}

// Mock health data
const healthIssues = [
  {
    id: 1,
    title: 'Abdominal Pain',
    condition: 'Suspected Appendicitis',
    severity: 'High',
    severityColor: colors.healthConcern,
    duration: '3 days',
    lastUpdate: '2 hours ago',
    data: [2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5],
    timeLabels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12'],
    medicalTerms: 'Right lower quadrant pain, possible acute appendicitis. McBurney\'s point tenderness observed.',
    recommendations: 'Monitor pain levels closely. Seek immediate medical attention if pain increases or fever develops.',
  },
  {
    id: 2,
    title: 'Headache',
    condition: 'Tension Headache',
    severity: 'Moderate',
    severityColor: colors.healthGood,
    duration: '1 week',
    lastUpdate: '6 hours ago',
    data: [4, 3, 5, 4, 6, 3, 2, 4, 3, 2, 1, 2],
    timeLabels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12'],
    medicalTerms: 'Bilateral frontal tension-type headache. No associated neurological symptoms.',
    recommendations: 'Stay hydrated, maintain regular sleep schedule, consider stress management techniques.',
  },
]

export function HomeScreen() {
  const [greeting, setGreeting] = useState('')
  const [healthScore] = useState(7)
  const [issues, setIssues] = useState(healthIssues)
  const [expandedCards, setExpandedCards] = useState<{[key: number]: boolean}>({})
  const [dismissModal, setDismissModal] = useState<{visible: boolean, issueId: number | null}>({visible: false, issueId: null})

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

  const toggleCardExpansion = (issueId: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [issueId]: !prev[issueId]
    }))
  }

  const handleDismissIssue = (issueId: number) => {
    setDismissModal({visible: true, issueId})
  }

  // Create right action (delete) for swipeable
  const renderRightAction = (issueId: number) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: colors.swipeDestroy,
          justifyContent: 'center',
          alignItems: 'center',
          width: 120,
          borderRadius: 20,
          marginLeft: 10,
        }}
        onPress={() => setDismissModal({visible: true, issueId})}
      >
        <Ionicons name="trash" size={24} color={colors.textPrimary} />
        <Text style={{
          color: colors.textPrimary,
          fontSize: 12,
          fontWeight: '700',
          marginTop: 4,
          textAlign: 'center',
        }}>
          DELETE
        </Text>
      </TouchableOpacity>
    )
  }

  const confirmDismiss = () => {
    if (dismissModal.issueId) {
      setIssues(prev => prev.filter(issue => issue.id !== dismissModal.issueId))
      setDismissModal({visible: false, issueId: null})
    }
  }

  const renderLineGraph = (data: number[], color: string) => {
    const maxValue = Math.max(...data)
    const points = data.map((value, index) => ({
      x: (index / (data.length - 1)) * 280,
      y: 60 - (value / maxValue) * 60
    }))
    
    return (
      <View style={{ height: 80, width: 280, marginVertical: 12 }}>
        <View style={{ position: 'relative', height: 60, width: 280 }}>
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <View
              key={i}
              style={{
                position: 'absolute',
                top: i * 15,
                left: 0,
                right: 0,
                height: 1,
                backgroundColor: colors.textMuted,
                opacity: 0.2,
              }}
            />
          ))}
          
          {/* Line graph */}
          {points.map((point, index) => (
            <View key={index}>
              {/* Data point */}
              <View
                style={{
                  position: 'absolute',
                  left: point.x - 3,
                  top: point.y - 3,
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: color,
                  shadowColor: color,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 4,
                  elevation: 3,
                }}
              />
              
              {/* Line to next point */}
              {index < points.length - 1 && (
                <View
                  style={{
                    position: 'absolute',
                    left: point.x,
                    top: point.y,
                    width: Math.sqrt(
                      Math.pow(points[index + 1].x - point.x, 2) +
                      Math.pow(points[index + 1].y - point.y, 2)
                    ),
                    height: 2,
                    backgroundColor: color,
                    transformOrigin: 'left center',
                    transform: [{
                      rotate: Math.atan2(
                        points[index + 1].y - point.y,
                        points[index + 1].x - point.x
                      ) + 'rad'
                    }],
                    opacity: 0.8,
                  }}
                />
              )}
            </View>
          ))}
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <View style={{ 
          paddingHorizontal: 20, 
          paddingTop: 60, 
          paddingBottom: 20,
          backgroundColor: colors.backgroundSecondary,
        }}>
          <Text style={{ 
            fontSize: 32, 
            fontWeight: '800', 
            color: colors.textPrimary,
            marginBottom: 4,
            textShadowColor: colors.shadow,
            textShadowOffset: { width: 0, height: 2 },
            textShadowRadius: 4,
          }}>
            {greeting}, Alex
          </Text>
        </View>

        {/* 3D Portal Preview Section (3/8 of screen) */}
        <View style={{ 
          height: screenHeight * 0.375, 
          marginHorizontal: 20, 
          marginBottom: 24,
          borderRadius: 24,
          backgroundColor: colors.surfaceElevated,
          overflow: 'hidden',
          position: 'relative',
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.3,
          shadowRadius: 16,
          elevation: 12,
        }}>
          {/* Enhanced 3D Model */}
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.surfaceHighlight,
          }}>
            <View style={{
              width: 140,
              height: 220,
              backgroundColor: colors.primary,
              borderRadius: 70,
              opacity: 0.9,
              position: 'relative',
              shadowColor: colors.primary,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.4,
              shadowRadius: 12,
              elevation: 8,
            }}>
              {/* Enhanced Head */}
              <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: colors.primaryBright,
                position: 'absolute',
                top: -35,
                left: 35,
                shadowColor: colors.primary,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 4,
              }} />
              {/* Enhanced Arms */}
              <View style={{
                width: 50,
                height: 12,
                backgroundColor: colors.primary,
                position: 'absolute',
                top: 50,
                left: -60,
                borderRadius: 6,
                shadowColor: colors.shadow,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 3,
              }} />
              <View style={{
                width: 50,
                height: 12,
                backgroundColor: colors.primary,
                position: 'absolute',
                top: 50,
                right: -60,
                borderRadius: 6,
                shadowColor: colors.shadow,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 3,
              }} />
              {/* Enhanced Legs */}
              <View style={{
                width: 30,
                height: 90,
                backgroundColor: colors.primary,
                position: 'absolute',
                bottom: -90,
                left: 25,
                borderRadius: 15,
                shadowColor: colors.shadow,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 3,
              }} />
              <View style={{
                width: 30,
                height: 90,
                backgroundColor: colors.primary,
                position: 'absolute',
                bottom: -90,
                right: 25,
                borderRadius: 15,
                shadowColor: colors.shadow,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 3,
              }} />
            </View>
          </View>
          
          {/* Enhanced Assess Symptoms Button */}
          <TouchableOpacity style={{
            position: 'absolute',
            bottom: 24,
            left: 24,
            right: 24,
            backgroundColor: colors.buttonPrimary,
            paddingVertical: 18,
            borderRadius: 16,
            alignItems: 'center',
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            elevation: 8,
          }}>
            <Text style={{
              color: colors.textPrimary,
              fontSize: 18,
              fontWeight: '700',
              textShadowColor: colors.shadow,
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 2,
            }}>
              Assess Symptoms
            </Text>
          </TouchableOpacity>
        </View>

        {/* Enhanced Health Indicator */}
        <View style={{
          marginHorizontal: 20,
          marginBottom: 24,
          backgroundColor: colors.surfaceElevated,
          borderRadius: 20,
          padding: 24,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.2,
          shadowRadius: 12,
          elevation: 6,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: colors.textPrimary, marginBottom: 6 }}>
                Health Score
              </Text>
              <Text style={{ fontSize: 15, color: colors.textSecondary, lineHeight: 20 }}>
                Based on recent assessments and trends
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: colors.surfaceHighlight,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 8,
                borderColor: getHealthColor(healthScore),
                shadowColor: getHealthColor(healthScore),
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.4,
                shadowRadius: 12,
                elevation: 8,
              }}>
                <Text style={{
                  fontSize: 32,
                  fontWeight: '900',
                  color: getHealthColor(healthScore),
                }}>
                  {healthScore}
                </Text>
              </View>
              <Text style={{ fontSize: 14, color: colors.textMuted, marginTop: 8, fontWeight: '600' }}>
                out of 10
              </Text>
            </View>
          </View>
        </View>

        {/* Individual Health Issue Cards */}
        <View style={{ marginHorizontal: 20, marginBottom: 24 }}>
          <Text style={{ fontSize: 22, fontWeight: '700', color: colors.textPrimary, marginBottom: 16 }}>
            Active Health Issues
          </Text>
          
          {issues.map((issue) => {
            return (
              <Swipeable
                key={issue.id}
                renderRightActions={() => renderRightAction(issue.id)}
                rightThreshold={40}
              >
                <View style={{
                  backgroundColor: colors.surfaceElevated,
                  borderRadius: 20,
                  marginBottom: 16,
                  shadowColor: colors.shadow,
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.2,
                  shadowRadius: 16,
                  elevation: 8,
                }}
                >
                  <TouchableOpacity
                    onPress={() => toggleCardExpansion(issue.id)}
                    style={{ padding: 20 }}
                  >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: colors.textPrimary, marginBottom: 4 }}>
                          {issue.title}
                        </Text>
                        <Text style={{ fontSize: 15, color: colors.textSecondary, marginBottom: 6 }}>
                          {issue.condition}
                        </Text>
                        <Text style={{ fontSize: 13, color: colors.textMuted }}>
                          Duration: {issue.duration} • Updated {issue.lastUpdate}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <View style={{
                          backgroundColor: issue.severityColor,
                          paddingHorizontal: 12,
                          paddingVertical: 6,
                          borderRadius: 12,
                          shadowColor: issue.severityColor,
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.4,
                          shadowRadius: 6,
                          elevation: 4,
                        }}>
                          <Text style={{ fontSize: 12, fontWeight: '700', color: colors.textPrimary }}>
                            {issue.severity}
                          </Text>
                        </View>
                      </View>
                    </View>
                
                {/* Always visible line graph */}
                <View style={{ marginTop: 8 }}>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textSecondary, marginBottom: 8 }}>
                    Pain Level Trend (Last 12 Days)
                  </Text>
                  {renderLineGraph(issue.data, issue.severityColor)}
                </View>
                
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
                      <Ionicons 
                        name={expandedCards[issue.id] ? "chevron-up" : "chevron-down"} 
                        size={20} 
                        color={colors.accent} 
                      />
                      <Text style={{ color: colors.accent, fontSize: 14, fontWeight: '600', marginLeft: 4 }}>
                        {expandedCards[issue.id] ? 'Show Less' : 'Learn More'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  
                  {/* Expandable section */}
                  {expandedCards[issue.id] && (
                    <View style={{ paddingHorizontal: 20, paddingBottom: 20, borderTopWidth: 1, borderTopColor: colors.surfaceHighlight }}>
                      <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary, marginTop: 16, marginBottom: 8 }}>
                        Medical Assessment
                      </Text>
                      <Text style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 20, marginBottom: 12 }}>
                        {issue.medicalTerms}
                      </Text>
                      
                      <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary, marginBottom: 8 }}>
                        Recommendations
                      </Text>
                      <Text style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 20 }}>
                        {issue.recommendations}
                      </Text>
                    </View>
                  )}
                </View>
              </Swipeable>
            )
          })}
        </View>

        {/* Enhanced Action Buttons */}
        <View style={{ marginHorizontal: 20, marginBottom: 24 }}>
          <TouchableOpacity style={{
            backgroundColor: colors.buttonSecondary,
            borderRadius: 20,
            padding: 22,
            alignItems: 'center',
            marginBottom: 16,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.25,
            shadowRadius: 12,
            elevation: 6,
          }}>
            <Text style={{ fontSize: 17, fontWeight: '800', color: colors.textPrimary }}>
              Prepare for Doctor Visit
            </Text>
          </TouchableOpacity>
        </View>

        {/* Enhanced Health Tips Section */}
        <View style={{ marginHorizontal: 20, marginBottom: 24 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: colors.textPrimary, marginBottom: 16 }}>
            Health Tips
          </Text>
          <View style={{
            backgroundColor: colors.surfaceElevated,
            borderRadius: 20,
            padding: 24,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.2,
            shadowRadius: 12,
            elevation: 6,
          }}>
            <Text style={{ fontSize: 16, color: colors.textSecondary, lineHeight: 24 }}>
              Based on your recent symptoms, consider staying hydrated and monitoring your pain levels closely. If symptoms worsen or you develop fever, seek immediate medical attention.
            </Text>
          </View>
        </View>

        {/* Photo Analysis - Bottom Priority */}
        <View style={{ marginHorizontal: 20, marginBottom: 60 }}>
          <TouchableOpacity style={{
            backgroundColor: colors.buttonPrimary,
            borderRadius: 20,
            padding: 22,
            alignItems: 'center',
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.4,
            shadowRadius: 16,
            elevation: 10,
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Ionicons name="camera" size={24} color={colors.textPrimary} />
              <Text style={{ fontSize: 17, fontWeight: '800', color: colors.textPrimary }}>
                Photo Analysis
              </Text>
            </View>
            <Text style={{ fontSize: 13, color: colors.textPrimary, opacity: 0.8, marginTop: 4 }}>
              Analyze symptoms visually
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Dismiss Confirmation Modal */}
      <Modal
        visible={dismissModal.visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setDismissModal({visible: false, issueId: null})}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 40,
        }}>
          <View style={{
            backgroundColor: colors.surfaceElevated,
            borderRadius: 20,
            padding: 24,
            width: '100%',
            maxWidth: 320,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.4,
            shadowRadius: 16,
            elevation: 12,
          }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: colors.textPrimary, marginBottom: 12, textAlign: 'center' }}>
              Remove Health Issue
            </Text>
            <Text style={{ fontSize: 15, color: colors.textSecondary, lineHeight: 22, textAlign: 'center', marginBottom: 24 }}>
              Are you sure you want to remove this from your health history? This action cannot be undone.
            </Text>
            
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity
                onPress={() => setDismissModal({visible: false, issueId: null})}
                style={{
                  flex: 1,
                  backgroundColor: colors.buttonSecondary,
                  paddingVertical: 14,
                  borderRadius: 12,
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={confirmDismiss}
                style={{
                  flex: 1,
                  backgroundColor: colors.danger,
                  paddingVertical: 14,
                  borderRadius: 12,
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textPrimary }}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
