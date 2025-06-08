'use client'

import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'

interface CommunitySharingPopupProps {
  isVisible: boolean
  onClose: () => void
  onShare: (config: SharingConfig) => void
}

interface SharingConfig {
  requireApproval: boolean
  allowModifications: boolean
  showHospitalAffiliation: boolean
  notifyOnDownload: boolean
  publicDescription: string
  tags: string[]
  category: string
}

export function CommunitySharingPopup({ isVisible, onClose, onShare }: CommunitySharingPopupProps) {
  const [config, setConfig] = useState<SharingConfig>({
    requireApproval: false,
    allowModifications: true,
    showHospitalAffiliation: true,
    notifyOnDownload: false,
    publicDescription: '',
    tags: [],
    category: 'assessment'
  })

  const [newTag, setNewTag] = useState('')

  if (!isVisible) return null

  const toggleSetting = (key: keyof SharingConfig) => {
    setConfig(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const addTag = () => {
    if (newTag.trim() && !config.tags.includes(newTag.trim())) {
      setConfig(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setConfig(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleShare = () => {
    onShare(config)
    onClose()
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.backdrop} />
      <View style={styles.modal}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Share with Community</Text>
            <Text style={styles.headerSubtitle}>Configure how your template will be shared</Text>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Privacy & Access Settings */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🔒 Privacy & Access</Text>
            
            <View style={styles.settingCard}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Require My Approval</Text>
                <Text style={styles.settingDescription}>
                  Users must request permission before using your template
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.toggle, config.requireApproval && styles.toggleActive]}
                onPress={() => toggleSetting('requireApproval')}
              >
                <View style={[styles.toggleThumb, config.requireApproval && styles.toggleThumbActive]} />
              </TouchableOpacity>
            </View>

            <View style={styles.settingCard}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Allow Modifications</Text>
                <Text style={styles.settingDescription}>
                  Let others customize your template for their needs
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.toggle, config.allowModifications && styles.toggleActive]}
                onPress={() => toggleSetting('allowModifications')}
              >
                <View style={[styles.toggleThumb, config.allowModifications && styles.toggleThumbActive]} />
              </TouchableOpacity>
            </View>

            <View style={styles.settingCard}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Show Hospital Affiliation</Text>
                <Text style={styles.settingDescription}>
                  Display "McLeod Regional Medical Center" on your template
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.toggle, config.showHospitalAffiliation && styles.toggleActive]}
                onPress={() => toggleSetting('showHospitalAffiliation')}
              >
                <View style={[styles.toggleThumb, config.showHospitalAffiliation && styles.toggleThumbActive]} />
              </TouchableOpacity>
            </View>

            <View style={styles.settingCard}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Download Notifications</Text>
                <Text style={styles.settingDescription}>
                  Get notified when someone downloads your template
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.toggle, config.notifyOnDownload && styles.toggleActive]}
                onPress={() => toggleSetting('notifyOnDownload')}
              >
                <View style={[styles.toggleThumb, config.notifyOnDownload && styles.toggleThumbActive]} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Template Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📝 Template Information</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Public Description</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Describe what makes your template unique and useful..."
                value={config.publicDescription}
                onChangeText={(text) => setConfig(prev => ({ ...prev, publicDescription: text }))}
                multiline
                numberOfLines={4}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Category</Text>
              <View style={styles.categoryGrid}>
                {['intake', 'assessment', 'follow-up', 'screening', 'specialty'].map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categoryChip,
                      config.category === category && styles.categoryChipActive
                    ]}
                    onPress={() => setConfig(prev => ({ ...prev, category }))}
                  >
                    <Text style={[
                      styles.categoryChipText,
                      config.category === category && styles.categoryChipTextActive
                    ]}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Tags</Text>
              <View style={styles.tagInput}>
                <TextInput
                  style={styles.tagInputField}
                  placeholder="Add tags (e.g., pediatrics, emergency)"
                  value={newTag}
                  onChangeText={setNewTag}
                  onSubmitEditing={addTag}
                />
                <TouchableOpacity style={styles.addTagButton} onPress={addTag}>
                  <Text style={styles.addTagButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tagsContainer}>
                {config.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                    <TouchableOpacity onPress={() => removeTag(tag)}>
                      <Text style={styles.tagRemove}>×</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Preview */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>👁️ Preview</Text>
            <View style={styles.previewCard}>
              <View style={styles.previewHeader}>
                <View style={styles.previewBadges}>
                  <View style={styles.previewCategoryBadge}>
                    <Text style={styles.previewCategoryText}>{config.category}</Text>
                  </View>
                  <View style={styles.previewVerifiedBadge}>
                    <Text style={styles.previewVerifiedText}>✓ Verified</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.previewTitle}>Your Form Title</Text>
              <Text style={styles.previewDescription}>
                {config.publicDescription || 'Your template description will appear here...'}
              </Text>
              <View style={styles.previewAuthor}>
                <Text style={styles.previewAuthorName}>Dr. Johnson Smith</Text>
                {config.showHospitalAffiliation && (
                  <Text style={styles.previewHospital}>McLeod Regional Medical Center</Text>
                )}
              </View>
              {config.tags.length > 0 && (
                <View style={styles.previewTags}>
                  {config.tags.slice(0, 3).map((tag, index) => (
                    <View key={index} style={styles.previewTag}>
                      <Text style={styles.previewTagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareButtonText}>Share Template</Text>
          </TouchableOpacity>
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
    zIndex: 2000,
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
  },
  modal: {
    width: '90%',
    maxWidth: 700,
    maxHeight: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 24,
    paddingVertical: 20,
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
    fontSize: 20,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#5f6368',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e8eaed',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#5f6368',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 24,
    maxHeight: 500,
    overflow: 'scroll',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 16,
  },
  settingCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e8eaed',
    flexDirection: 'row' as const,
    alignItems: 'center',
    marginBottom: 12,
  },
  settingContent: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#5f6368',
    lineHeight: 20,
  },
  toggle: {
    width: 48,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#e8eaed',
    padding: 2,
    justifyContent: 'center',
  },
  toggleActive: {
    backgroundColor: '#1a73e8',
  },
  toggleThumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  toggleThumbActive: {
    transform: [{ translateX: 20 }],
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 8,
  },
  textArea: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#202124',
    minHeight: 80,
    textAlignVertical: 'top',
  },
  categoryGrid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryChip: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryChipActive: {
    backgroundColor: '#e8f0fe',
    borderColor: '#1a73e8',
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5f6368',
  },
  categoryChipTextActive: {
    color: '#1a73e8',
    fontWeight: '600',
  },
  tagInput: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  tagInputField: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#202124',
  },
  addTagButton: {
    backgroundColor: '#1a73e8',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  addTagButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  tagsContainer: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#e8f0fe',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row' as const,
    alignItems: 'center',
  },
  tagText: {
    fontSize: 12,
    color: '#1a73e8',
    fontWeight: '500',
    marginRight: 8,
  },
  tagRemove: {
    fontSize: 16,
    color: '#5f6368',
    fontWeight: '600',
  },
  previewCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e8eaed',
  },
  previewHeader: {
    marginBottom: 12,
  },
  previewBadges: {
    flexDirection: 'row' as const,
    gap: 8,
  },
  previewCategoryBadge: {
    backgroundColor: '#e8f0fe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  previewCategoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a73e8',
  },
  previewVerifiedBadge: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  previewVerifiedText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#137333',
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 8,
  },
  previewDescription: {
    fontSize: 14,
    color: '#5f6368',
    lineHeight: 20,
    marginBottom: 12,
  },
  previewAuthor: {
    marginBottom: 12,
  },
  previewAuthorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 2,
  },
  previewHospital: {
    fontSize: 12,
    color: '#1a73e8',
    fontWeight: '500',
  },
  previewTags: {
    flexDirection: 'row' as const,
    gap: 6,
    flexWrap: 'wrap',
  },
  previewTag: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  previewTagText: {
    fontSize: 11,
    color: '#5f6368',
    fontWeight: '500',
  },
  footer: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e8eaed',
    flexDirection: 'row' as const,
    justifyContent: 'flex-end',
    gap: 12,
  },
  cancelButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  cancelButtonText: {
    color: '#5f6368',
    fontSize: 14,
    fontWeight: '600',
  },
  shareButton: {
    backgroundColor: '#1a73e8',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  shareButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
}