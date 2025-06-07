'use client'

import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'

interface SettingsScreenProps {
  isVisible: boolean
  onClose: () => void
}

export function SettingsScreen({ isVisible, onClose }: SettingsScreenProps) {
  const [activeSection, setActiveSection] = useState('account')
  const [formData, setFormData] = useState({
    firstName: 'Dr. Johnson',
    lastName: 'Smith',
    email: 'johnson@mcleod.org',
    phone: '+1 (555) 123-4567',
    hospital: 'McLeod Regional Medical Center',
    department: 'Internal Medicine',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const settingsSections = [
    { id: 'account', label: 'Account Info', icon: '👤' },
    { id: 'security', label: 'Password & Security', icon: '🔒' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'billing', label: 'Pricing Plan', icon: '💳' },
    { id: 'hospital', label: 'Hospital Settings', icon: '🏥' },
    { id: 'preferences', label: 'Preferences', icon: '⚙️' },
  ]

  const renderAccountSection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Account Information</Text>
      <Text style={styles.sectionSubtitle}>Manage your personal information and profile details</Text>
      
      <View style={styles.formGrid}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput
            style={styles.input}
            value={formData.firstName}
            onChangeText={(text) => setFormData({...formData, firstName: text})}
            placeholder="Enter first name"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={formData.lastName}
            onChangeText={(text) => setFormData({...formData, lastName: text})}
            placeholder="Enter last name"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => setFormData({...formData, email: text})}
            placeholder="Enter email address"
            keyboardType="email-address"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={formData.phone}
            onChangeText={(text) => setFormData({...formData, phone: text})}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />
        </View>
      </View>
      
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  )

  const renderSecuritySection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Password & Security</Text>
      <Text style={styles.sectionSubtitle}>Keep your account secure with a strong password</Text>
      
      <View style={styles.formGrid}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Current Password</Text>
          <TextInput
            style={styles.input}
            value={formData.currentPassword}
            onChangeText={(text) => setFormData({...formData, currentPassword: text})}
            placeholder="Enter current password"
            secureTextEntry
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>New Password</Text>
          <TextInput
            style={styles.input}
            value={formData.newPassword}
            onChangeText={(text) => setFormData({...formData, newPassword: text})}
            placeholder="Enter new password"
            secureTextEntry
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Confirm New Password</Text>
          <TextInput
            style={styles.input}
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
            placeholder="Confirm new password"
            secureTextEntry
          />
        </View>
      </View>
      
      <View style={styles.securityFeatures}>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>🔐</Text>
          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Two-Factor Authentication</Text>
            <Text style={styles.featureDescription}>Add an extra layer of security</Text>
          </View>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>Enable</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>📱</Text>
          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Login Notifications</Text>
            <Text style={styles.featureDescription}>Get notified of new logins</Text>
          </View>
          <TouchableOpacity style={[styles.toggleButton, styles.toggleButtonActive]}>
            <Text style={[styles.toggleButtonText, styles.toggleButtonActiveText]}>Enabled</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  )

  const renderBillingSection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Pricing Plan</Text>
      <Text style={styles.sectionSubtitle}>Manage your subscription and billing preferences</Text>
      
      <View style={styles.planCard}>
        <View style={styles.currentPlan}>
          <View style={styles.planHeader}>
            <Text style={styles.planName}>Professional Plan</Text>
            <View style={styles.planBadge}>
              <Text style={styles.planBadgeText}>Current</Text>
            </View>
          </View>
          <Text style={styles.planPrice}>$29.99/month</Text>
          <Text style={styles.planDescription}>Perfect for individual healthcare professionals</Text>
          
          <View style={styles.planFeatures}>
            <Text style={styles.planFeature}>✓ Unlimited patient forms</Text>
            <Text style={styles.planFeature}>✓ Advanced analytics</Text>
            <Text style={styles.planFeature}>✓ Priority support</Text>
            <Text style={styles.planFeature}>✓ Data export</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.billingInfo}>
        <Text style={styles.billingTitle}>Billing Information</Text>
        <View style={styles.billingDetail}>
          <Text style={styles.billingLabel}>Next billing date:</Text>
          <Text style={styles.billingValue}>February 15, 2024</Text>
        </View>
        <View style={styles.billingDetail}>
          <Text style={styles.billingLabel}>Payment method:</Text>
          <Text style={styles.billingValue}>•••• •••• •••• 4242</Text>
        </View>
      </View>
      
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Change Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Update Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const renderHospitalSection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Hospital Settings</Text>
      <Text style={styles.sectionSubtitle}>Configure your hospital and department information</Text>
      
      <View style={styles.formGrid}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Hospital Name</Text>
          <TextInput
            style={styles.input}
            value={formData.hospital}
            onChangeText={(text) => setFormData({...formData, hospital: text})}
            placeholder="Enter hospital name"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Department</Text>
          <TextInput
            style={styles.input}
            value={formData.department}
            onChangeText={(text) => setFormData({...formData, department: text})}
            placeholder="Enter department"
          />
        </View>
      </View>
      
      <View style={styles.hospitalFeatures}>
        <Text style={styles.featuresTitle}>Hospital Integration</Text>
        
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>🔗</Text>
          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>EMR Integration</Text>
            <Text style={styles.featureDescription}>Connect with your hospital's EMR system</Text>
          </View>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>Connect</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>📊</Text>
          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Analytics Sharing</Text>
            <Text style={styles.featureDescription}>Share anonymized data with hospital</Text>
          </View>
          <TouchableOpacity style={[styles.toggleButton, styles.toggleButtonActive]}>
            <Text style={[styles.toggleButtonText, styles.toggleButtonActiveText]}>Enabled</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Save Hospital Settings</Text>
      </TouchableOpacity>
    </View>
  )

  const renderNotificationsSection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Notification Preferences</Text>
      <Text style={styles.sectionSubtitle}>Choose how you want to be notified</Text>
      
      <View style={styles.notificationGroups}>
        <View style={styles.notificationGroup}>
          <Text style={styles.groupTitle}>Email Notifications</Text>
          
          <View style={styles.featureItem}>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>New Form Submissions</Text>
              <Text style={styles.featureDescription}>Get notified when patients submit forms</Text>
            </View>
            <TouchableOpacity style={[styles.toggleButton, styles.toggleButtonActive]}>
              <Text style={[styles.toggleButtonText, styles.toggleButtonActiveText]}>On</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.featureItem}>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Daily Summary</Text>
              <Text style={styles.featureDescription}>Receive daily activity summaries</Text>
            </View>
            <TouchableOpacity style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>Off</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.notificationGroup}>
          <Text style={styles.groupTitle}>Push Notifications</Text>
          
          <View style={styles.featureItem}>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Urgent Forms</Text>
              <Text style={styles.featureDescription}>Immediate alerts for urgent submissions</Text>
            </View>
            <TouchableOpacity style={[styles.toggleButton, styles.toggleButtonActive]}>
              <Text style={[styles.toggleButtonText, styles.toggleButtonActiveText]}>On</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )

  const renderPreferencesSection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>General Preferences</Text>
      <Text style={styles.sectionSubtitle}>Customize your app experience</Text>
      
      <View style={styles.preferenceGroups}>
        <View style={styles.preferenceGroup}>
          <Text style={styles.groupTitle}>Appearance</Text>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🌙</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Dark Mode</Text>
              <Text style={styles.featureDescription}>Switch to dark theme</Text>
            </View>
            <TouchableOpacity style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>Off</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📐</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Compact View</Text>
              <Text style={styles.featureDescription}>Show more content in less space</Text>
            </View>
            <TouchableOpacity style={[styles.toggleButton, styles.toggleButtonActive]}>
              <Text style={[styles.toggleButtonText, styles.toggleButtonActiveText]}>On</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.preferenceGroup}>
          <Text style={styles.groupTitle}>Data & Privacy</Text>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📱</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Analytics</Text>
              <Text style={styles.featureDescription}>Help improve the app with usage data</Text>
            </View>
            <TouchableOpacity style={[styles.toggleButton, styles.toggleButtonActive]}>
              <Text style={[styles.toggleButtonText, styles.toggleButtonActiveText]}>On</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <View style={styles.dangerZone}>
        <Text style={styles.dangerTitle}>Danger Zone</Text>
        <TouchableOpacity style={styles.dangerButton}>
          <Text style={styles.dangerButtonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return renderAccountSection()
      case 'security':
        return renderSecuritySection()
      case 'billing':
        return renderBillingSection()
      case 'hospital':
        return renderHospitalSection()
      case 'notifications':
        return renderNotificationsSection()
      case 'preferences':
        return renderPreferencesSection()
      default:
        return renderAccountSection()
    }
  }

  if (!isVisible) return null

  return (
    <View style={styles.overlay}>
      <View style={styles.backdrop} />
      <View style={styles.modal}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Settings</Text>
            <Text style={styles.headerSubtitle}>Manage your account and preferences</Text>
            <View style={styles.hospitalInfo}>
              <Text style={styles.hospitalLabel}>Your Hospital:</Text>
              <Text style={styles.hospitalName}>McLeod Regional Medical Center</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.content}>
        <View style={styles.sidebar}>
          {settingsSections.map((section) => (
            <TouchableOpacity
              key={section.id}
              style={[
                styles.sidebarItem,
                activeSection === section.id && styles.activeSidebarItem
              ]}
              onPress={() => setActiveSection(section.id)}
            >
              <Text style={styles.sidebarIcon}>{section.icon}</Text>
              <Text style={[
                styles.sidebarLabel,
                activeSection === section.id && styles.activeSidebarLabel
              ]}>
                {section.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>
      </View>
      </View>
    </View>
  )
}

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(8px)',
  },
  modal: {
    width: '90%',
    maxWidth: 1200,
    height: '90%',
    maxHeight: 800,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerContent: {
    flex: 1,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#5f6368',
    fontWeight: '600',
  },
  hospitalInfo: {
    marginTop: 12,
    flexDirection: 'row' as const,
    alignItems: 'center',
  },
  hospitalLabel: {
    fontSize: 14,
    color: '#5f6368',
    marginRight: 8,
  },
  hospitalName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a73e8',
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
  content: {
    flex: 1,
    flexDirection: 'row' as const,
  },
  sidebar: {
    width: 280,
    backgroundColor: '#ffffff',
    borderRightWidth: 1,
    borderRightColor: '#e8eaed',
    paddingVertical: 24,
  },
  sidebarItem: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginHorizontal: 12,
    borderRadius: 8,
    marginBottom: 4,
  },
  activeSidebarItem: {
    backgroundColor: '#e8f0fe',
  },
  sidebarIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  sidebarLabel: {
    fontSize: 16,
    color: '#5f6368',
    fontWeight: '500',
  },
  activeSidebarLabel: {
    color: '#1a73e8',
    fontWeight: '600',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  sectionContent: {
    padding: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#5f6368',
    marginBottom: 32,
  },
  formGrid: {
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#202124',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#202124',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  primaryButton: {
    backgroundColor: '#1a73e8',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignSelf: 'flex-start',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginRight: 12,
  },
  secondaryButtonText: {
    color: '#1a73e8',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonGroup: {
    flexDirection: 'row' as const,
    marginTop: 24,
  },
  securityFeatures: {
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e8eaed',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#5f6368',
  },
  toggleButton: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  toggleButtonActive: {
    backgroundColor: '#e8f5e8',
    borderColor: '#34a853',
  },
  toggleButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5f6368',
  },
  toggleButtonActiveText: {
    color: '#137333',
  },
  planCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#e8eaed',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  currentPlan: {},
  planHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    marginBottom: 12,
  },
  planName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#202124',
    marginRight: 12,
  },
  planBadge: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  planBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#137333',
  },
  planPrice: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a73e8',
    marginBottom: 8,
  },
  planDescription: {
    fontSize: 16,
    color: '#5f6368',
    marginBottom: 20,
  },
  planFeatures: {
    marginBottom: 20,
  },
  planFeature: {
    fontSize: 14,
    color: '#202124',
    marginBottom: 8,
  },
  billingInfo: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e8eaed',
  },
  billingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 16,
  },
  billingDetail: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  billingLabel: {
    fontSize: 14,
    color: '#5f6368',
  },
  billingValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#202124',
  },
  hospitalFeatures: {
    marginBottom: 32,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 16,
  },
  notificationGroups: {
    marginBottom: 32,
  },
  notificationGroup: {
    marginBottom: 32,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 16,
  },
  preferenceGroups: {
    marginBottom: 32,
  },
  preferenceGroup: {
    marginBottom: 32,
  },
  dangerZone: {
    backgroundColor: '#fef7f0',
    borderWidth: 1,
    borderColor: '#fce8e6',
    borderRadius: 8,
    padding: 20,
  },
  dangerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#d93025',
    marginBottom: 12,
  },
  dangerButton: {
    backgroundColor: '#d93025',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  dangerButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
}