'use client'

import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useState } from 'react'

export function PatientSearchScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  // Mock patient data - replace with Supabase data later
  const mockPatients = [
    {
      id: 1,
      name: 'John Smith',
      age: 45,
      department: 'Cardiology',
      status: 'Active',
      lastVisit: '2024-01-15',
      phone: '(555) 123-4567',
      condition: 'Hypertension'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      age: 32,
      department: 'Dermatology',
      status: 'Follow-up',
      lastVisit: '2024-01-12',
      phone: '(555) 987-6543',
      condition: 'Eczema'
    },
    {
      id: 3,
      name: 'Michael Brown',
      age: 67,
      department: 'Orthopedics',
      status: 'Discharged',
      lastVisit: '2024-01-10',
      phone: '(555) 456-7890',
      condition: 'Knee Replacement'
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 28,
      department: 'Pediatrics',
      status: 'Active',
      lastVisit: '2024-01-14',
      phone: '(555) 321-0987',
      condition: 'Routine Checkup'
    },
    {
      id: 5,
      name: 'Robert Wilson',
      age: 55,
      department: 'Neurology',
      status: 'Critical',
      lastVisit: '2024-01-16',
      phone: '(555) 654-3210',
      condition: 'Migraine'
    }
  ]

  const filterOptions = [
    { id: 'active', label: 'Active Patients', type: 'status' },
    { id: 'follow-up', label: 'Follow-up Required', type: 'status' },
    { id: 'critical', label: 'Critical Care', type: 'status' },
    { id: 'cardiology', label: 'Cardiology', type: 'department' },
    { id: 'dermatology', label: 'Dermatology', type: 'department' },
    { id: 'orthopedics', label: 'Orthopedics', type: 'department' },
    { id: 'pediatrics', label: 'Pediatrics', type: 'department' },
    { id: 'neurology', label: 'Neurology', type: 'department' },
    { id: 'recent', label: 'Recent Visits', type: 'time' },
    { id: 'overdue', label: 'Overdue Checkup', type: 'time' }
  ]

  // Filter patients based on search query and active filters
  const filteredPatients = mockPatients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         patient.department.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (activeFilters.length === 0) return matchesSearch
    
    const matchesFilters = activeFilters.some(filter => {
      switch (filter) {
        case 'active':
          return patient.status.toLowerCase() === 'active'
        case 'follow-up':
          return patient.status.toLowerCase() === 'follow-up'
        case 'critical':
          return patient.status.toLowerCase() === 'critical'
        case 'cardiology':
        case 'dermatology':
        case 'orthopedics':
        case 'pediatrics':
        case 'neurology':
          return patient.department.toLowerCase() === filter
        case 'recent':
          // Simple recent logic - in real app, compare with actual dates
          return new Date(patient.lastVisit) > new Date('2024-01-12')
        case 'overdue':
          // Simple overdue logic - in real app, use proper date calculations
          return new Date(patient.lastVisit) < new Date('2024-01-12')
        default:
          return false
      }
    })
    
    return matchesSearch && matchesFilters
  })

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return '#00d4ff'
      case 'follow-up':
        return '#8b5cf6'
      case 'critical':
        return '#ff6b35'
      case 'discharged':
        return '#5f6368'
      default:
        return '#5f6368'
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Patient Search</Text>
        <Text style={styles.subtitle}>Search and filter through patient records</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search patients by name, condition, or department..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9aa0a6"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setSearchQuery('')}
            >
              <Text style={styles.clearButtonText}>×</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <Text style={styles.filtersTitle}>Filters</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
        >
          <View style={styles.filtersList}>
            {filterOptions.map((filter) => (
              <TouchableOpacity
                key={filter.id}
                style={[
                  styles.filterChip,
                  activeFilters.includes(filter.id) && styles.activeFilterChip
                ]}
                onPress={() => toggleFilter(filter.id)}
              >
                <Text style={[
                  styles.filterText,
                  activeFilters.includes(filter.id) && styles.activeFilterText
                ]}>
                  {filter.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Results */}
      <View style={styles.resultsContainer}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsCount}>
            {filteredPatients.length} patient{filteredPatients.length !== 1 ? 's' : ''} found
          </Text>
          {activeFilters.length > 0 && (
            <TouchableOpacity
              style={styles.clearFiltersButton}
              onPress={() => setActiveFilters([])}
            >
              <Text style={styles.clearFiltersText}>Clear filters</Text>
            </TouchableOpacity>
          )}
        </View>

        <ScrollView style={styles.patientsList} showsVerticalScrollIndicator={false}>
          {filteredPatients.map((patient) => (
            <TouchableOpacity key={patient.id} style={styles.patientCard}>
              <View style={styles.patientHeader}>
                <View style={styles.patientInfo}>
                  <Text style={styles.patientName}>{patient.name}</Text>
                  <Text style={styles.patientAge}>Age: {patient.age}</Text>
                </View>
                <View style={[
                  styles.statusBadge,
                  { backgroundColor: `${getStatusColor(patient.status)}20` }
                ]}>
                  <Text style={[
                    styles.statusText,
                    { color: getStatusColor(patient.status) }
                  ]}>
                    {patient.status}
                  </Text>
                </View>
              </View>
              
              <View style={styles.patientDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Department:</Text>
                  <Text style={styles.detailValue}>{patient.department}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Condition:</Text>
                  <Text style={styles.detailValue}>{patient.condition}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Last Visit:</Text>
                  <Text style={styles.detailValue}>{patient.lastVisit}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Phone:</Text>
                  <Text style={styles.detailValue}>{patient.phone}</Text>
                </View>
              </View>

              <View style={styles.patientActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>View Records</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.primaryActionButton]}>
                  <Text style={[styles.actionButtonText, styles.primaryActionButtonText]}>
                    Schedule Appointment
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
          
          {filteredPatients.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateIcon}>👩‍⚕️</Text>
              <Text style={styles.emptyStateTitle}>No patients found</Text>
              <Text style={styles.emptyStateText}>
                Try adjusting your search criteria or filters
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = {
  container: {
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#5f6368',
  },
  searchContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  searchInputContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 24,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#e8eaed',
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#9aa0a6',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#202124',
    outline: 'none',
  },
  clearButton: {
    padding: 4,
  },
  clearButtonText: {
    fontSize: 20,
    color: '#9aa0a6',
    fontWeight: 'bold',
  },
  filtersContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  filtersTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 12,
    paddingHorizontal: 32,
  },
  filtersScroll: {
    paddingLeft: 32,
  },
  filtersList: {
    flexDirection: 'row' as const,
    gap: 12,
    paddingRight: 32,
  },
  filterChip: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e8eaed',
  },
  activeFilterChip: {
    backgroundColor: '#e8f0fe',
    borderColor: '#1a73e8',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5f6368',
  },
  activeFilterText: {
    color: '#1a73e8',
  },
  resultsContainer: {
    flex: 1,
    padding: 32,
  },
  resultsHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  resultsCount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#202124',
  },
  clearFiltersButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  clearFiltersText: {
    fontSize: 14,
    color: '#1a73e8',
    fontWeight: '500',
  },
  patientsList: {
    flex: 1,
  },
  patientCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e8eaed',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  patientHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 4,
  },
  patientAge: {
    fontSize: 14,
    color: '#5f6368',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  patientDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  detailLabel: {
    fontSize: 14,
    color: '#5f6368',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#202124',
    fontWeight: '500',
  },
  patientActions: {
    flexDirection: 'row' as const,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8eaed',
  },
  primaryActionButton: {
    backgroundColor: '#1a73e8',
    borderColor: '#1a73e8',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5f6368',
  },
  primaryActionButtonText: {
    color: '#ffffff',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#5f6368',
    textAlign: 'center',
  },
}