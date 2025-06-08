'use client'

import { Text, View, TouchableOpacity } from 'react-native'

interface ExportOptionsPopupProps {
  isVisible: boolean
  onClose: () => void
  onExportPDF: () => void
  onPrint: () => void
  onSaveLocally: () => void
  onGenerateLink: () => void
  onEmailDistribution: () => void
  onGenerateQR: () => void
  onEmbedCode: () => void
  onShareCommunity: () => void
}

export function ExportOptionsPopup({ 
  isVisible, 
  onClose, 
  onExportPDF,
  onPrint,
  onSaveLocally,
  onGenerateLink,
  onEmailDistribution,
  onGenerateQR,
  onEmbedCode,
  onShareCommunity
}: ExportOptionsPopupProps) {
  if (!isVisible) return null

  const exportOptions = [
    {
      id: 'pdf',
      icon: '📄',
      title: 'Export as PDF',
      description: 'Download a PDF version of your form',
      action: onExportPDF,
      color: '#d93025'
    },
    {
      id: 'print',
      icon: '🖨️',
      title: 'Print Form',
      description: 'Print-friendly version for physical distribution',
      action: onPrint,
      color: '#5f6368'
    },
    {
      id: 'save',
      icon: '💾',
      title: 'Save Locally',
      description: 'Save form data to your device',
      action: onSaveLocally,
      color: '#1a73e8'
    },
    {
      id: 'link',
      icon: '🔗',
      title: 'Generate Link',
      description: 'Create a shareable web link for patients',
      action: onGenerateLink,
      color: '#137333'
    },
    {
      id: 'email',
      icon: '📧',
      title: 'Email Distribution',
      description: 'Send form directly to patient email addresses',
      action: onEmailDistribution,
      color: '#8b5cf6'
    },
    {
      id: 'qr',
      icon: '📱',
      title: 'QR Code',
      description: 'Generate QR code for easy mobile access',
      action: onGenerateQR,
      color: '#ff6b35'
    },
    {
      id: 'embed',
      icon: '🌐',
      title: 'Embed Code',
      description: 'Get HTML code to embed in your website',
      action: onEmbedCode,
      color: '#00d4ff'
    }
  ]

  return (
    <View style={styles.overlay}>
      <View style={styles.backdrop} />
      <View style={styles.modal}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Export & Share Options</Text>
            <Text style={styles.headerSubtitle}>Choose how you want to distribute your form</Text>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📤 Export Options</Text>
            <View style={styles.optionsGrid}>
              {exportOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={styles.optionCard}
                  onPress={option.action}
                >
                  <View style={[styles.optionIcon, { backgroundColor: `${option.color}20` }]}>
                    <Text style={styles.optionIconText}>{option.icon}</Text>
                  </View>
                  <View style={styles.optionContent}>
                    <Text style={styles.optionTitle}>{option.title}</Text>
                    <Text style={styles.optionDescription}>{option.description}</Text>
                  </View>
                  <View style={[styles.optionArrow, { borderLeftColor: option.color }]}>
                    <Text style={[styles.optionArrowText, { color: option.color }]}>→</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🌟 Community Sharing</Text>
            <TouchableOpacity style={styles.communityCard} onPress={onShareCommunity}>
              <View style={styles.communityIcon}>
                <Text style={styles.communityIconText}>📤</Text>
              </View>
              <View style={styles.communityContent}>
                <Text style={styles.communityTitle}>Share with Community</Text>
                <Text style={styles.communityDescription}>
                  Help other healthcare professionals by sharing your form template
                </Text>
                <View style={styles.communityBenefits}>
                  <Text style={styles.communityBenefit}>• Build your reputation in the medical community</Text>
                  <Text style={styles.communityBenefit}>• Help standardize best practices</Text>
                  <Text style={styles.communityBenefit}>• Control who can access your template</Text>
                </View>
              </View>
              <View style={styles.communityArrow}>
                <Text style={styles.communityArrowText}>→</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    zIndex: 1500,
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
    maxWidth: 800,
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
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 16,
  },
  optionsGrid: {
    gap: 12,
  },
  optionCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e8eaed',
    flexDirection: 'row' as const,
    alignItems: 'center',
    transition: 'all 0.2s ease',
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionIconText: {
    fontSize: 20,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#5f6368',
    lineHeight: 20,
  },
  optionArrow: {
    marginLeft: 12,
  },
  optionArrowText: {
    fontSize: 18,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#e8eaed',
    marginVertical: 24,
  },
  communityCard: {
    backgroundColor: 'linear-gradient(135deg, #e8f0fe 0%, #f3e8ff 100%)',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1a73e8',
    flexDirection: 'row' as const,
    alignItems: 'flex-start',
  },
  communityIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1a73e8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  communityIconText: {
    fontSize: 24,
    color: '#ffffff',
  },
  communityContent: {
    flex: 1,
  },
  communityTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a73e8',
    marginBottom: 6,
  },
  communityDescription: {
    fontSize: 14,
    color: '#5f6368',
    lineHeight: 20,
    marginBottom: 12,
  },
  communityBenefits: {
    gap: 4,
  },
  communityBenefit: {
    fontSize: 12,
    color: '#5f6368',
    lineHeight: 16,
  },
  communityArrow: {
    marginLeft: 12,
    alignSelf: 'center',
  },
  communityArrowText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a73e8',
  },
}