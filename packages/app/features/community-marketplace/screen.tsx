'use client'

import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import { CommunityTemplate } from './types'
import { communityTemplates } from './data'

interface CommunityMarketplaceScreenProps {
  onTemplateSelect: (template: CommunityTemplate) => void
  onTemplatePreview: (template: CommunityTemplate) => void
}

export function CommunityMarketplaceScreen({ onTemplateSelect, onTemplatePreview }: CommunityMarketplaceScreenProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'rating'>('popular')

  const filters = ['all', 'newest', 'trending', 'highly-rated', 'most-downloaded']
  const specialtyFilters = Array.from(new Set(communityTemplates.map(t => t.specialty)))

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowSearchResults(true)
    }
  }

  const filteredTemplates = communityTemplates.filter(template => {
    if (showSearchResults && searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        template.name.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query) ||
        template.specialty.toLowerCase().includes(query) ||
        template.author.name.toLowerCase().includes(query) ||
        template.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    return true
  })

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.stats.downloads - a.stats.downloads
      case 'newest':
        return new Date(b.stats.datePublished).getTime() - new Date(a.stats.datePublished).getTime()
      case 'rating':
        return b.stats.rating - a.stats.rating
      default:
        return 0
    }
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Text key={i} style={[styles.star, i < Math.floor(rating) && styles.starFilled]}>
        ★
      </Text>
    ))
  }

  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}k`
    }
    return downloads.toString()
  }

  if (showSearchResults) {
    return (
      <View style={styles.container}>
        <View style={styles.searchResultsHeader}>
          <TouchableOpacity style={styles.backButton} onPress={() => setShowSearchResults(false)}>
            <Text style={styles.backButtonText}>← Back to Marketplace</Text>
          </TouchableOpacity>
          <Text style={styles.searchResultsTitle}>
            Search Results for "{searchQuery}" ({filteredTemplates.length} found)
          </Text>
        </View>

        <ScrollView style={styles.searchResults} showsVerticalScrollIndicator={false}>
          <View style={styles.templatesGrid}>
            {sortedTemplates.map((template) => (
              <View key={template.id} style={styles.templateCard}>
                <View style={styles.templateHeader}>
                  <View style={styles.templateBadges}>
                    <View style={styles.specialtyBadge}>
                      <Text style={styles.specialtyBadgeText}>{template.specialty}</Text>
                    </View>
                    <View style={styles.verifiedBadge}>
                      <Text style={styles.verifiedBadgeText}>
                        {template.author.verified ? '✓ Verified' : 'Community'}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.templateTime}>⏱️ {template.estimatedTime}</Text>
                </View>

                <Text style={styles.templateTitle}>{template.name}</Text>
                <Text style={styles.templateDescription}>{template.description}</Text>

                <View style={styles.authorInfo}>
                  <Text style={styles.authorName}>{template.author.name}</Text>
                  <Text style={styles.authorTitle}>{template.author.title}</Text>
                  {template.permissions.showHospitalAffiliation && (
                    <Text style={styles.authorHospital}>{template.author.hospital}</Text>
                  )}
                </View>

                <View style={styles.templateStats}>
                  <View style={styles.rating}>
                    {renderStars(template.stats.rating)}
                    <Text style={styles.ratingText}>
                      {template.stats.rating} ({template.stats.reviewCount})
                    </Text>
                  </View>
                  <Text style={styles.downloads}>
                    📥 {formatDownloads(template.stats.downloads)} downloads
                  </Text>
                </View>

                <View style={styles.templateFooter}>
                  <TouchableOpacity 
                    style={styles.previewButton}
                    onPress={() => onTemplatePreview(template)}
                  >
                    <Text style={styles.previewButtonText}>Preview</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[
                      styles.useTemplateButton,
                      template.permissions.requireApproval && styles.approvalRequiredButton
                    ]}
                    onPress={() => onTemplateSelect(template)}
                  >
                    <Text style={styles.useTemplateButtonText}>
                      {template.permissions.requireApproval ? 'Request Access' : 'Use Template'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Community Marketplace</Text>
          <Text style={styles.headerSubtitle}>Discover forms created by healthcare professionals</Text>
        </View>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search templates, specialties, or doctors..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Filters and Sort */}
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterChip,
                selectedFilter === filter && styles.filterChipActive
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text style={[
                styles.filterChipText,
                selectedFilter === filter && styles.filterChipTextActive
              ]}>
                {filter === 'all' ? 'All Templates' : 
                 filter === 'newest' ? '🆕 Newest' :
                 filter === 'trending' ? '🔥 Trending' :
                 filter === 'highly-rated' ? '⭐ Top Rated' :
                 filter === 'most-downloaded' ? '📈 Popular' : filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.sortContainer}>
          <Text style={styles.sortLabel}>Sort by:</Text>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'popular' && styles.sortButtonActive]}
            onPress={() => setSortBy('popular')}
          >
            <Text style={styles.sortButtonText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'newest' && styles.sortButtonActive]}
            onPress={() => setSortBy('newest')}
          >
            <Text style={styles.sortButtonText}>Newest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'rating' && styles.sortButtonActive]}
            onPress={() => setSortBy('rating')}
          >
            <Text style={styles.sortButtonText}>Rating</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured Section */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>🌟 Featured Templates</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.featuredGrid}>
              {sortedTemplates.slice(0, 3).map((template) => (
                <View key={template.id} style={styles.featuredCard}>
                  <View style={styles.featuredHeader}>
                    <Text style={styles.featuredSpecialty}>{template.specialty}</Text>
                    <View style={styles.featuredRating}>
                      <Text style={styles.featuredStar}>⭐</Text>
                      <Text style={styles.featuredRatingText}>{template.stats.rating}</Text>
                    </View>
                  </View>
                  <Text style={styles.featuredTitle}>{template.name}</Text>
                  <Text style={styles.featuredAuthor}>by {template.author.name}</Text>
                  <Text style={styles.featuredDownloads}>
                    {formatDownloads(template.stats.downloads)} downloads
                  </Text>
                  <TouchableOpacity 
                    style={styles.featuredButton}
                    onPress={() => onTemplatePreview(template)}
                  >
                    <Text style={styles.featuredButtonText}>View</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* All Templates */}
        <View style={styles.allTemplatesSection}>
          <Text style={styles.sectionTitle}>All Community Templates</Text>
          <View style={styles.templatesGrid}>
            {sortedTemplates.map((template) => (
              <View key={template.id} style={styles.templateCard}>
                <View style={styles.templateHeader}>
                  <View style={styles.templateBadges}>
                    <View style={styles.specialtyBadge}>
                      <Text style={styles.specialtyBadgeText}>{template.specialty}</Text>
                    </View>
                    <View style={styles.verifiedBadge}>
                      <Text style={styles.verifiedBadgeText}>
                        {template.author.verified ? '✓ Verified' : 'Community'}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.templateTime}>⏱️ {template.estimatedTime}</Text>
                </View>

                <Text style={styles.templateTitle}>{template.name}</Text>
                <Text style={styles.templateDescription}>{template.description}</Text>

                <View style={styles.authorInfo}>
                  <Text style={styles.authorName}>{template.author.name}</Text>
                  <Text style={styles.authorTitle}>{template.author.title}</Text>
                  {template.permissions.showHospitalAffiliation && (
                    <Text style={styles.authorHospital}>{template.author.hospital}</Text>
                  )}
                </View>

                <View style={styles.templateStats}>
                  <View style={styles.rating}>
                    {renderStars(template.stats.rating)}
                    <Text style={styles.ratingText}>
                      {template.stats.rating} ({template.stats.reviewCount})
                    </Text>
                  </View>
                  <Text style={styles.downloads}>
                    📥 {formatDownloads(template.stats.downloads)} downloads
                  </Text>
                </View>

                <View style={styles.templateFooter}>
                  <TouchableOpacity 
                    style={styles.previewButton}
                    onPress={() => onTemplatePreview(template)}
                  >
                    <Text style={styles.previewButtonText}>Preview</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[
                      styles.useTemplateButton,
                      template.permissions.requireApproval && styles.approvalRequiredButton
                    ]}
                    onPress={() => onTemplateSelect(template)}
                  >
                    <Text style={styles.useTemplateButtonText}>
                      {template.permissions.requireApproval ? 'Request Access' : 'Use Template'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
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
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerContent: {
    flex: 1,
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
  searchContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    marginLeft: 32,
  },
  searchInput: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: '#202124',
    width: 320,
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: '#1a73e8',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchButtonText: {
    fontSize: 16,
  },
  searchResultsHeader: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  backButton: {
    marginBottom: 12,
  },
  backButtonText: {
    color: '#1a73e8',
    fontSize: 14,
    fontWeight: '500',
  },
  searchResultsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#202124',
  },
  searchResults: {
    flex: 1,
    padding: 32,
  },
  filtersContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  filterScroll: {
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  filterChip: {
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
  filterChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5f6368',
  },
  filterChipTextActive: {
    color: '#1a73e8',
    fontWeight: '600',
  },
  sortContainer: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  sortLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5f6368',
    marginRight: 12,
  },
  sortButton: {
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  sortButtonActive: {
    backgroundColor: '#1a73e8',
  },
  sortButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5f6368',
  },
  content: {
    flex: 1,
  },
  featuredSection: {
    padding: 32,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 20,
  },
  featuredGrid: {
    flexDirection: 'row' as const,
    gap: 20,
  },
  featuredCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: 280,
    borderWidth: 1,
    borderColor: '#e8eaed',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  featuredHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  featuredSpecialty: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a73e8',
    backgroundColor: '#e8f0fe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  featuredRating: {
    flexDirection: 'row' as const,
    alignItems: 'center',
  },
  featuredStar: {
    fontSize: 14,
    marginRight: 4,
  },
  featuredRatingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#202124',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 8,
    lineHeight: 22,
  },
  featuredAuthor: {
    fontSize: 14,
    color: '#5f6368',
    marginBottom: 4,
  },
  featuredDownloads: {
    fontSize: 12,
    color: '#5f6368',
    marginBottom: 16,
  },
  featuredButton: {
    backgroundColor: '#1a73e8',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  featuredButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  allTemplatesSection: {
    padding: 32,
    paddingTop: 0,
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
  specialtyBadge: {
    backgroundColor: '#e8f0fe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  specialtyBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a73e8',
  },
  verifiedBadge: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  verifiedBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#137333',
  },
  templateTime: {
    fontSize: 12,
    color: '#5f6368',
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
  authorInfo: {
    marginBottom: 16,
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 2,
  },
  authorTitle: {
    fontSize: 12,
    color: '#5f6368',
    marginBottom: 2,
  },
  authorHospital: {
    fontSize: 12,
    color: '#1a73e8',
    fontWeight: '500',
  },
  templateStats: {
    marginBottom: 20,
  },
  rating: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    marginBottom: 8,
  },
  star: {
    fontSize: 14,
    color: '#e8eaed',
    marginRight: 2,
  },
  starFilled: {
    color: '#fbbf24',
  },
  ratingText: {
    fontSize: 12,
    color: '#5f6368',
    marginLeft: 8,
  },
  downloads: {
    fontSize: 12,
    color: '#5f6368',
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
  approvalRequiredButton: {
    backgroundColor: '#ff6b35',
  },
  useTemplateButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
}