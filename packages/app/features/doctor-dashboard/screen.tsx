'use client'

import { TextLink } from 'solito/link'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { PatientSearchScreen } from '../patient-search'
import { SettingsScreen } from '../settings'

export function DoctorDashboardScreen() {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [showSettings, setShowSettings] = useState(false)

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'https://img.icons8.com/fluency/48/dashboard-layout.png' },
    { id: 'create-form', label: 'Create Form', icon: 'https://img.icons8.com/ios-filled/50/form.png' },
    { id: 'patient-search', label: 'Patient Search', icon: 'https://img.icons8.com/ios-filled/50/search.png' },
    { id: 'export', label: 'Export Data', icon: 'https://img.icons8.com/ios-filled/50/download.png' },
    { id: 'settings', label: 'Settings', icon: 'https://img.icons8.com/ios-filled/50/settings.png' },
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
          <img src="/logo.png" style={{width: 96, height: 96, marginBottom: 4}} alt="Proxima Medical" />
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
                  <img src={item.icon} style={styles.navIcon} alt={item.label} />
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
                onPress={() => {
                  if (item.id === 'settings') {
                    setShowSettings(true)
                  } else {
                    setActiveNav(item.id)
                  }
                }}
              >
                <img src={item.icon} style={styles.navIcon} alt={item.label} />
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
        {activeNav === 'patient-search' ? (
          <PatientSearchScreen />
        ) : (
          <>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Dashboard Overview</Text>
              <Text style={styles.headerSubtitle}>Welcome back, Dr. Johnson</Text>
            </View>

            <ScrollView style={styles.dashboardContent} showsVerticalScrollIndicator={false}>
          {/* Stats Cards Row */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <img src="https://img.icons8.com/ios-filled/50/form.png" style={{width: 32, height: 32, position: 'absolute', top: 20, right: 20, opacity: 0.2, filter: 'sepia(1) saturate(2) hue-rotate(200deg) brightness(0.8)'}} alt="Forms" />
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Unread Forms</Text>
              <View style={styles.statBadge}>
                <Text style={styles.statBadgeText}>+3 today</Text>
              </View>
            </View>

            <View style={styles.statCard}>
              <img src="https://img.icons8.com/fluency/48/group.png" style={{width: 32, height: 32, position: 'absolute', top: 20, right: 20, opacity: 0.3}} alt="Patients" />
              <Text style={styles.statNumber}>45</Text>
              <Text style={styles.statLabel}>Patients This Week</Text>
              <View style={[styles.statBadge, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]}>
                <Text style={[styles.statBadgeText, { color: '#3b82f6' }]}>+8 from last week</Text>
              </View>
            </View>

            <View style={styles.statCard}>
              <img src="https://img.icons8.com/fluency/48/clock.png" style={{width: 32, height: 32, position: 'absolute', top: 20, right: 20, opacity: 0.3}} alt="Pending" />
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Pending Reviews</Text>
              <View style={[styles.statBadge, { backgroundColor: 'rgba(251, 146, 60, 0.15)' }]}>
                <Text style={[styles.statBadgeText, { color: '#f59e0b' }]}>Needs attention</Text>
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
                  <img src="https://img.icons8.com/fluency/48/add-file.png" style={styles.actionIcon} alt="Create Form" />
                  <Text style={styles.actionText}>Create New Form</Text>
                </TouchableOpacity>
              </TextLink>
               
               <TouchableOpacity 
                 style={styles.actionButton}
                 activeOpacity={0.8}
               >
                 <img src="https://img.icons8.com/fluency/48/add-user-male.png" style={styles.actionIcon} alt="Add Patient" />
                 <Text style={styles.actionText}>Add Patient</Text>
               </TouchableOpacity>
               
               <TouchableOpacity 
                 style={styles.actionButton}
                 activeOpacity={0.8}
               >
                 <img src="https://img.icons8.com/fluency/48/bar-chart.png" style={styles.actionIcon} alt="View Reports" />
                 <Text style={styles.actionText}>View Reports</Text>
               </TouchableOpacity>
            </View>
          </View>

          {/* Recent Patients */}
          <View style={styles.recentSection}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
              <img src="https://img.icons8.com/fluency/32/stethoscope.png" style={{width: 28, height: 28, marginRight: 12}} alt="Patients" />
              <Text style={styles.sectionTitle}>Recent Patients</Text>
            </View>
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
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
              <img src="https://img.icons8.com/ios-filled/50/activity-feed.png" style={{width: 28, height: 28, marginRight: 12}} alt="Activity" />
              <Text style={styles.sectionTitle}>Recent Activity</Text>
            </View>
            <View style={styles.activityFeed}>
              <View style={styles.activityItem}>
                <img src="https://img.icons8.com/fluency/24/form.png" style={{width: 20, height: 20, marginRight: 12}} alt="Form" />
                <View style={{flex: 1}}>
                  <Text style={styles.activityTime}>2 hours ago</Text>
                  <Text style={styles.activityText}>New form submitted by John Smith</Text>
                </View>
              </View>
              <View style={styles.activityItem}>
                <img src="https://img.icons8.com/fluency/24/calendar.png" style={{width: 20, height: 20, marginRight: 12}} alt="Appointment" />
                <View style={{flex: 1}}>
                  <Text style={styles.activityTime}>4 hours ago</Text>
                  <Text style={styles.activityText}>Appointment scheduled with Mary Johnson</Text>
                </View>
              </View>
              <View style={styles.activityItem}>
                <img src="https://img.icons8.com/fluency/24/test-tube.png" style={{width: 20, height: 20, marginRight: 12}} alt="Lab Results" />
                <View style={{flex: 1}}>
                  <Text style={styles.activityTime}>1 day ago</Text>
                  <Text style={styles.activityText}>Lab results received for Robert Brown</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
          </>
        )}
      </View>

      {/* Settings Modal */}
      <SettingsScreen 
        isVisible={showSettings} 
        onClose={() => setShowSettings(false)} 
      />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row' as const,
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
    backgroundColor: '#1e3a8a',
    borderRightWidth: 0,
    paddingVertical: 24,
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 100,
    height: '100vh',
    boxShadow: '4px 0 20px rgba(0, 0, 0, 0.1)',
  },
  sidebarHeader: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },
  sidebarTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '-0.5px',
  },
  sidebarNav: {
    paddingTop: 24,
  },
  navItem: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 12,
    transition: 'all 0.2s ease',
  },
  activeNavItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 0,
    transform: 'translateX(4px)',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
    filter: 'brightness(0) invert(1)',
    opacity: 0.9,
  },
  navLabel: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
    letterSpacing: '0.2px',
  },
  activeNavLabel: {
    color: '#ffffff',
    fontWeight: '600',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    marginLeft: 280,
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 32,
    borderBottomWidth: 0,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1e3a8a',
    marginBottom: 8,
    letterSpacing: '-0.5px',
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#64748b',
    fontWeight: '400',
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
    borderRadius: 16,
    padding: 24,
    borderWidth: 0,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    position: 'relative',
    overflow: 'hidden',
  },
  statNumber: {
    fontSize: 40,
    fontWeight: '800',
    color: '#1e3a8a',
    marginBottom: 8,
    letterSpacing: '-1px',
  },
  statLabel: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 16,
    fontWeight: '500',
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
    fontSize: 24,
    fontWeight: '700',
    color: '#1e3a8a',
    marginBottom: 0,
    letterSpacing: '-0.3px',
  },
  actionButtons: {
    flexDirection: 'row' as const,
    gap: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    borderWidth: 0,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.2s ease',
  },
  actionIcon: {
    width: 48,
    height: 48,
    marginBottom: 16,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e3a8a',
    textAlign: 'center',
  },
  recentSection: {
    marginBottom: 32,
  },
  patientList: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 0,
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
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
    borderRadius: 16,
    borderWidth: 0,
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
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