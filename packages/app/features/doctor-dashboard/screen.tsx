'use client'

import { TextLink } from 'solito/link'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'

export function DoctorDashboardScreen() {
  const [activeNav, setActiveNav] = useState('dashboard')

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'create-form', label: 'Create Form', icon: '📝' },
    { id: 'patient-search', label: 'Patient Search', icon: '🔍' },
    { id: 'export', label: 'Export Data', icon: '📤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  const recentPatients = [
    { id: 1, name: 'John Smith', lastVisit: '2024-01-15', status: 'Complete' },
    { id: 2, name: 'Mary Johnson', lastVisit: '2024-01-14', status: 'Pending' },
    { id: 3, name: 'Robert Brown', lastVisit: '2024-01-13', status: 'Complete' },
    { id: 4, name: 'Sarah Davis', lastVisit: '2024-01-12', status: 'Follow-up' },
    { id: 5, name: 'Michael Wilson', lastVisit: '2024-01-11', status: 'Complete' },
  ]

  return (
    <View style={styles.container}>
      {/* Animated Background Shapes */}
      <View style={styles.backgroundShapes}>
        <View style={styles.shape1}></View>
        <View style={styles.shape2}></View>
      </View>
      
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <View style={styles.sidebarHeader}>
          <Text style={styles.sidebarTitle}>Proxima</Text>
        </View>
        
        <View style={styles.sidebarNav}>
                    {sidebarItems.map((item) => (
            item.id === 'create-form' ? (
              <TextLink key={item.id} href="/create-form">
                <TouchableOpacity
                  style={[
                    styles.navItem,
                    activeNav === item.id && styles.activeNavItem
                  ]}
                  onPress={() => setActiveNav(item.id)}
                >
                  <Text style={styles.navIcon}>{item.icon}</Text>
                  <Text style={[
                    styles.navLabel,
                    activeNav === item.id && styles.activeNavLabel
                  ]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              </TextLink>
            ) : (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.navItem,
                  activeNav === item.id && styles.activeNavItem
                ]}
                onPress={() => setActiveNav(item.id)}
              >
                <Text style={styles.navIcon}>{item.icon}</Text>
                <Text style={[
                  styles.navLabel,
                  activeNav === item.id && styles.activeNavLabel
                ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )
          ))}
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard Overview</Text>
          <Text style={styles.headerSubtitle}>Welcome back, Dr. Johnson</Text>
        </View>

        <ScrollView style={styles.dashboardContent} showsVerticalScrollIndicator={false}>
          {/* Stats Cards Row */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Unread Forms</Text>
              <View style={styles.statBadge}>
                <Text style={styles.statBadgeText}>+3 today</Text>
              </View>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>45</Text>
              <Text style={styles.statLabel}>Patients This Week</Text>
                             <View style={[styles.statBadge, { backgroundColor: 'rgba(0, 212, 255, 0.2)' }]}>
                 <Text style={[styles.statBadgeText, { color: '#00d4ff' }]}>+8 from last week</Text>
               </View>
             </View>

             <View style={styles.statCard}>
               <Text style={styles.statNumber}>8</Text>
               <Text style={styles.statLabel}>Pending Reviews</Text>
               <View style={[styles.statBadge, { backgroundColor: 'rgba(139, 92, 246, 0.2)' }]}>
                 <Text style={[styles.statBadgeText, { color: '#8b5cf6' }]}>Needs attention</Text>
               </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.actionButtons}>
                            <TextLink href="/create-form">
                <TouchableOpacity 
                  style={styles.actionButton}
                  activeOpacity={0.8}
                >
                  <Text style={styles.actionIcon}>📝</Text>
                  <Text style={styles.actionText}>Create New Form</Text>
                </TouchableOpacity>
              </TextLink>
               
               <TouchableOpacity 
                 style={styles.actionButton}
                 activeOpacity={0.8}
               >
                 <Text style={styles.actionIcon}>👤</Text>
                 <Text style={styles.actionText}>Add Patient</Text>
               </TouchableOpacity>
               
               <TouchableOpacity 
                 style={styles.actionButton}
                 activeOpacity={0.8}
               >
                 <Text style={styles.actionIcon}>📊</Text>
                 <Text style={styles.actionText}>View Reports</Text>
               </TouchableOpacity>
            </View>
          </View>

          {/* Recent Patients */}
          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Patients</Text>
            <View style={styles.patientList}>
              <ScrollView style={styles.patientScrollView} showsVerticalScrollIndicator={false}>
                {recentPatients.map((patient) => (
                  <View key={patient.id} style={styles.patientItem}>
                    <View style={styles.patientInfo}>
                      <Text style={styles.patientName}>{patient.name}</Text>
                      <Text style={styles.patientDate}>Last visit: {patient.lastVisit}</Text>
                    </View>
                                         <View style={[
                       styles.statusBadge,
                       patient.status === 'Complete' && { backgroundColor: 'rgba(0, 212, 255, 0.2)' },
                       patient.status === 'Pending' && { backgroundColor: 'rgba(255, 107, 53, 0.2)' },
                       patient.status === 'Follow-up' && { backgroundColor: 'rgba(139, 92, 246, 0.2)' },
                     ]}>
                       <Text style={[
                         styles.statusText,
                         patient.status === 'Complete' && { color: '#00d4ff' },
                         patient.status === 'Pending' && { color: '#ff6b35' },
                         patient.status === 'Follow-up' && { color: '#8b5cf6' },
                       ]}>
                         {patient.status}
                       </Text>
                     </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>

          {/* Activity Feed */}
          <View style={styles.activitySection}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <View style={styles.activityFeed}>
              <View style={styles.activityItem}>
                <Text style={styles.activityTime}>2 hours ago</Text>
                <Text style={styles.activityText}>New form submitted by John Smith</Text>
              </View>
              <View style={styles.activityItem}>
                <Text style={styles.activityTime}>4 hours ago</Text>
                <Text style={styles.activityText}>Appointment scheduled with Mary Johnson</Text>
              </View>
              <View style={styles.activityItem}>
                <Text style={styles.activityTime}>1 day ago</Text>
                <Text style={styles.activityText}>Lab results received for Robert Brown</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row' as const,
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  backgroundShapes: {
    display: 'none',
  },
  shape1: {
    display: 'none',
  },
  shape2: {
    display: 'none',
  },
  sidebar: {
    width: 280,
    backgroundColor: '#ffffff',
    borderRightWidth: 1,
    borderRightColor: '#e8eaed',
    paddingVertical: 24,
  },
  sidebarHeader: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#202124',
  },
  sidebarNav: {
    paddingTop: 24,
  },
  navItem: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginHorizontal: 12,
    borderRadius: 8,
  },
  activeNavItem: {
    backgroundColor: '#e8f0fe',
    borderWidth: 0,
  },
  navIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  navLabel: {
    fontSize: 16,
    color: '#5f6368',
    fontWeight: '500',
  },
  activeNavLabel: {
    color: '#1a73e8',
    fontWeight: '600',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#5f6368',
  },
  dashboardContent: {
    flex: 1,
    padding: 32,
  },
  statsRow: {
    flexDirection: 'row' as const,
    gap: 24,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e8eaed',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#5f6368',
    marginBottom: 12,
  },
  statBadge: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statBadgeText: {
    fontSize: 12,
    color: '#137333',
    fontWeight: '500',
  },
  quickActions: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 20,
  },
  actionButtons: {
    flexDirection: 'row' as const,
    gap: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8eaed',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 12,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#202124',
  },
  recentSection: {
    marginBottom: 32,
  },
  patientList: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8eaed',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  patientScrollView: {
    maxHeight: 350,
  },
  patientItem: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#202124',
    marginBottom: 4,
  },
  patientDate: {
    fontSize: 14,
    color: '#5f6368',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 212, 255, 0.2)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#00d4ff',
  },
  activitySection: {
    marginBottom: 32,
  },
  activityFeed: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8eaed',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  activityItem: {
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  activityTime: {
    fontSize: 12,
    color: '#5f6368',
    marginBottom: 6,
  },
  activityText: {
    fontSize: 14,
    color: '#202124',
  },
} 