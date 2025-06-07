'use client'

import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { formTemplates, FormTemplate } from './templates'

interface FormTemplateScreenProps {
  onTemplateSelect: (template: FormTemplate) => void
  onTemplatePreview: (template: FormTemplate) => void
}

export function FormTemplateScreen({ onTemplateSelect, onTemplatePreview }: FormTemplateScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all')

  const categories = ['all', 'intake', 'assessment', 'follow-up', 'screening', 'specialty']
  const specialties = ['all', ...Array.from(new Set(formTemplates.map(t => t.specialty)))]

  const filteredTemplates = formTemplates.filter(template => {
    const categoryMatch = selectedCategory === 'all' || template.category === selectedCategory
    const specialtyMatch = selectedSpecialty === 'all' || template.specialty === selectedSpecialty
    return categoryMatch && specialtyMatch
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'intake': return '📝'
      case 'assessment': return '🔍'
      case 'follow-up': return '📋'
      case 'screening': return '🩺'
      case 'specialty': return '⚕️'
      default: return '📄'
    }
  }

  const getSpecialtyColor = (specialty: string) => {
    const colors: Record<string, string> = {
      'General': '#1a73e8',
      'Cardiology': '#e74c3c',
      'Orthopedics': '#f39c12',
      'Mental Health': '#9b59b6',
      'Surgery': '#2ecc71',
      'Pediatrics': '#ff6b9d',
      'OB/GYN': '#e91e63',
      'Internal Medicine': '#34495e',
      'Quality Improvement': '#16a085'
    }
    return colors[specialty] || '#6c757d'
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Form Templates</Text>
        <Text style={styles.headerSubtitle}>Choose from professionally designed medical forms</Text>
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <View style={styles.filterGroup}>
          <Text style={styles.filterLabel}>Category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.filterChip,
                  selectedCategory === category && styles.filterChipActive
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={styles.filterChipIcon}>{getCategoryIcon(category)}</Text>
                <Text style={[
                  styles.filterChipText,
                  selectedCategory === category && styles.filterChipTextActive
                ]}>
                  {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabel}>Specialty</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
            {specialties.map((specialty) => (
              <TouchableOpacity
                key={specialty}
                style={[
                  styles.filterChip,
                  selectedSpecialty === specialty && styles.filterChipActive
                ]}
                onPress={() => setSelectedSpecialty(specialty)}
              >
                <Text style={[
                  styles.filterChipText,
                  selectedSpecialty === specialty && styles.filterChipTextActive
                ]}>
                  {specialty === 'all' ? 'All Specialties' : specialty}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Templates Grid */}
      <ScrollView style={styles.templatesContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.templatesGrid}>
          {filteredTemplates.map((template) => (
            <View
              key={template.id}
              style={styles.templateCard}
            >
              <View style={styles.templateHeader}>
                <View style={styles.templateBadges}>
                  <View style={[styles.categoryBadge, { backgroundColor: `${getSpecialtyColor(template.specialty)}20` }]}>
                    <Text style={[styles.categoryBadgeText, { color: getSpecialtyColor(template.specialty) }]}>
                      {template.specialty}
                    </Text>
                  </View>
                  <View style={styles.timeBadge}>
                    <Text style={styles.timeBadgeText}>⏱️ {template.estimatedTime}</Text>
                  </View>
                </View>
                <Text style={styles.categoryIcon}>{getCategoryIcon(template.category)}</Text>
              </View>

              <Text style={styles.templateTitle}>{template.name}</Text>
              <Text style={styles.templateDescription}>{template.description}</Text>

              <View style={styles.templateDetails}>
                <Text style={styles.detailsText}>
                  {template.sections.length} sections • {template.sections.reduce((acc, section) => acc + section.fields.length, 0)} fields
                </Text>
              </View>

              <View style={styles.templateTags}>
                {template.tags.slice(0, 3).map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
                {template.tags.length > 3 && (
                  <Text style={styles.moreTagsText}>+{template.tags.length - 3} more</Text>
                )}
              </View>

              <View style={styles.templateFooter}>
                <TouchableOpacity 
                  style={styles.previewButton}
                  onPress={() => onTemplatePreview(template)}
                >
                  <Text style={styles.previewButtonText}>Preview</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.useTemplateButton}
                  onPress={() => onTemplateSelect(template)}
                >
                  <Text style={styles.useTemplateButtonText}>Use Template</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  filtersContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  filterGroup: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 12,
    paddingHorizontal: 32,
  },
  filterScroll: {
    paddingHorizontal: 32,
  },
  filterChip: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
  },
  filterChipActive: {
    backgroundColor: '#e8f0fe',
    borderColor: '#1a73e8',
  },
  filterChipIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5f6368',
  },
  filterChipTextActive: {
    color: '#1a73e8',
    fontWeight: '600',
  },
  templatesContainer: {
    flex: 1,
    padding: 32,
  },
  templatesGrid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap',
    gap: 24,
  },
  templateCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e8eaed',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
  },
  templateHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  templateBadges: {
    flex: 1,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  categoryBadgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  timeBadge: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  timeBadgeText: {
    fontSize: 11,
    color: '#5f6368',
    fontWeight: '500',
  },
  categoryIcon: {
    fontSize: 24,
    marginLeft: 12,
  },
  templateTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 8,
    lineHeight: 24,
  },
  templateDescription: {
    fontSize: 14,
    color: '#5f6368',
    lineHeight: 20,
    marginBottom: 16,
  },
  templateDetails: {
    marginBottom: 16,
  },
  detailsText: {
    fontSize: 12,
    color: '#5f6368',
    fontWeight: '500',
  },
  templateTags: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 11,
    color: '#5f6368',
    fontWeight: '500',
  },
  moreTagsText: {
    fontSize: 11,
    color: '#1a73e8',
    fontWeight: '500',
  },
  templateFooter: {
    flexDirection: 'row' as const,
    gap: 12,
  },
  previewButton: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  previewButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5f6368',
  },
  useTemplateButton: {
    flex: 1,
    backgroundColor: '#1a73e8',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  useTemplateButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
}