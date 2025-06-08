'use client'

import { TextLink } from 'solito/link'
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import { FormTemplateScreen, TemplatePreview, FormTemplate } from '../form-templates'
import { CommunityMarketplaceScreen, CommunityTemplate } from '../community-marketplace'
import { ExportOptionsPopup } from '../export-options'
import { CommunitySharingPopup } from '../community-sharing'

interface Question {
  id: string
  type: 'free-response' | 'scale' | 'multiple-choice'
  question: string
  options?: string[]
  scaleMin?: number
  scaleMax?: number
}

export function CreateFormScreen() {
  const [activeTab, setActiveTab] = useState<'templates' | 'create' | 'marketplace' | 'my-forms'>('templates')
  const [formTitle, setFormTitle] = useState('Untitled Form')
  const [formDescription, setFormDescription] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [previewTemplate, setPreviewTemplate] = useState<FormTemplate | CommunityTemplate | null>(null)
  const [showExportOptions, setShowExportOptions] = useState(false)
  const [showCommunitySharing, setShowCommunitySharing] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      type: 'free-response',
      question: 'Enter your question here...',
    }
  ])

  const handleTemplateSelect = (template: FormTemplate | CommunityTemplate) => {
    // Convert template to our question format
    const templateQuestions: Question[] = []
    
    template.sections.forEach((section, sectionIndex) => {
      section.fields.forEach((field, fieldIndex) => {
        const questionId = `${sectionIndex}-${fieldIndex}`
        
        switch (field.type) {
          case 'textarea':
          case 'text':
          case 'email':
          case 'phone':
          case 'date':
            templateQuestions.push({
              id: questionId,
              type: 'free-response',
              question: field.label,
            })
            break
          case 'scale':
            templateQuestions.push({
              id: questionId,
              type: 'scale',
              question: field.label,
              scaleMin: field.min || 1,
              scaleMax: field.max || 10,
            })
            break
          case 'select':
          case 'radio':
          case 'multiselect':
          case 'checkbox':
            templateQuestions.push({
              id: questionId,
              type: 'multiple-choice',
              question: field.label,
              options: field.options || ['Option 1', 'Option 2'],
            })
            break
        }
      })
    })

    // Update form with template data
    setFormTitle(template.name)
    setFormDescription(template.description)
    setQuestions(templateQuestions.length > 0 ? templateQuestions : questions)
    setActiveTab('create')
  }

  const handleTemplatePreview = (template: FormTemplate | CommunityTemplate) => {
    setPreviewTemplate(template)
    setShowPreview(true)
  }

  const handlePreviewClose = () => {
    setShowPreview(false)
    setPreviewTemplate(null)
  }

  const handleUseTemplateFromPreview = () => {
    if (previewTemplate) {
      handleTemplateSelect(previewTemplate)
      handlePreviewClose()
    }
  }

  // Export handlers
  const exportHandlers = {
    pdf: () => console.log('Export PDF'),
    print: () => console.log('Print form'),
    save: () => console.log('Save locally'),
    link: () => console.log('Generate link'),
    email: () => console.log('Email distribution'),
    qr: () => console.log('Generate QR code'),
    embed: () => console.log('Get embed code'),
    community: () => {
      setShowExportOptions(false)
      setShowCommunitySharing(true)
    }
  }

  const handleCommunityShare = (config: any) => {
    console.log('Community sharing config:', config)
    // Handle the sharing logic here
  }

  const addQuestion = (type: Question['type']) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type,
      question: 'Enter your question here...',
      ...(type === 'multiple-choice' && { options: ['Option 1', 'Option 2'] }),
      ...(type === 'scale' && { scaleMin: 1, scaleMax: 10 }),
    }
    setQuestions([...questions, newQuestion])
  }

  const updateQuestion = (id: string, field: keyof Question, value: any) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, [field]: value } : q
    ))
  }

  const deleteQuestion = (id: string) => {
    if (questions.length > 1) {
      setQuestions(questions.filter(q => q.id !== id))
    }
  }

  const addOption = (questionId: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId && q.options 
        ? { ...q, options: [...q.options, `Option ${q.options.length + 1}`] }
        : q
    ))
  }

  const updateOption = (questionId: string, optionIndex: number, value: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId && q.options
        ? { ...q, options: q.options.map((opt, i) => i === optionIndex ? value : opt) }
        : q
    ))
  }

  const removeOption = (questionId: string, optionIndex: number) => {
    setQuestions(questions.map(q => 
      q.id === questionId && q.options && q.options.length > 2
        ? { ...q, options: q.options.filter((_, i) => i !== optionIndex) }
        : q
    ))
  }

  const renderQuestion = (question: Question, index: number) => {
    return (
      <View key={question.id} style={styles.questionCard}>
        <View style={styles.questionHeader}>
          <Text style={styles.questionNumber}>Question {index + 1}</Text>
          <View style={styles.questionActions}>
            <TouchableOpacity 
              style={styles.questionTypeButton}
              onPress={() => {/* Future: open type selector */}}
            >
              <Text style={styles.questionTypeText}>
                {question.type === 'free-response' ? 'Free Response' : 
                 question.type === 'scale' ? '1-10 Scale' : 'Multiple Choice'}
              </Text>
            </TouchableOpacity>
            {questions.length > 1 && (
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => deleteQuestion(question.id)}
              >
                <Text style={styles.deleteButtonText}>🗑️</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <TextInput
          style={styles.questionInput}
          value={question.question}
          onChangeText={(text) => updateQuestion(question.id, 'question', text)}
          placeholder="Enter your question here..."
          placeholderTextColor="#5f6368"
          multiline
        />

        {question.type === 'multiple-choice' && (
          <View style={styles.optionsContainer}>
            {question.options?.map((option, optionIndex) => (
              <View key={optionIndex} style={styles.optionRow}>
                <Text style={styles.optionLabel}>{String.fromCharCode(65 + optionIndex)}.</Text>
                <TextInput
                  style={styles.optionInput}
                  value={option}
                  onChangeText={(text) => updateOption(question.id, optionIndex, text)}
                  placeholder={`Option ${optionIndex + 1}`}
                  placeholderTextColor="#5f6368"
                />
                {question.options && question.options.length > 2 && (
                  <TouchableOpacity 
                    style={styles.removeOptionButton}
                    onPress={() => removeOption(question.id, optionIndex)}
                  >
                    <Text style={styles.removeOptionText}>×</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            <TouchableOpacity 
              style={styles.addOptionButton}
              onPress={() => addOption(question.id)}
            >
              <Text style={styles.addOptionText}>+ Add Option</Text>
            </TouchableOpacity>
          </View>
        )}

        {question.type === 'scale' && (
          <View style={styles.scaleContainer}>
            <View style={styles.scaleInfo}>
              <Text style={styles.scaleLabel}>Scale: {question.scaleMin} to {question.scaleMax}</Text>
              <View style={styles.scalePreview}>
                {Array.from({ length: question.scaleMax! - question.scaleMin! + 1 }, (_, i) => (
                  <View key={i} style={styles.scalePoint}>
                    <Text style={styles.scalePointText}>{question.scaleMin! + i}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Animated Background Shapes */}
      <View style={styles.backgroundShapes}>
        <View style={styles.shape1}></View>
        <View style={styles.shape2}></View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TextLink href="/doctor-dashboard" style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back to Dashboard</Text>
          </TextLink>
          <Text style={styles.headerTitle}>Form Builder</Text>
        </View>
        {/* Only show export button when actually creating a form */}
        {activeTab === 'create' && (
          <TouchableOpacity 
            style={styles.exportButton}
            onPress={() => setShowExportOptions(true)}
          >
            <Text style={styles.exportButtonText}>📤 Export Form</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'templates' && styles.activeTab]}
          onPress={() => setActiveTab('templates')}
        >
          <Text style={[styles.tabText, activeTab === 'templates' && styles.activeTabText]}>
            📋 Pre-made Templates
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'create' && styles.activeTab]}
          onPress={() => setActiveTab('create')}
        >
          <Text style={[styles.tabText, activeTab === 'create' && styles.activeTabText]}>
            ✨ Create Form
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'marketplace' && styles.activeTab]}
          onPress={() => setActiveTab('marketplace')}
        >
          <Text style={[styles.tabText, activeTab === 'marketplace' && styles.activeTabText]}>
            🌟 Community Marketplace
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'my-forms' && styles.activeTab]}
          onPress={() => setActiveTab('my-forms')}
        >
          <Text style={[styles.tabText, activeTab === 'my-forms' && styles.activeTabText]}>
            📁 My Forms
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {activeTab === 'templates' ? (
          <FormTemplateScreen 
            onTemplateSelect={handleTemplateSelect} 
            onTemplatePreview={handleTemplatePreview}
          />
        ) : activeTab === 'marketplace' ? (
          <CommunityMarketplaceScreen
            onTemplateSelect={handleTemplateSelect}
            onTemplatePreview={handleTemplatePreview}
          />
        ) : activeTab === 'my-forms' ? (
          <View style={styles.myFormsContainer}>
            <Text style={styles.myFormsTitle}>My Forms</Text>
            <Text style={styles.myFormsSubtitle}>Your saved and published forms will appear here</Text>
            {/* Placeholder for My Forms content */}
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateIcon}>📝</Text>
              <Text style={styles.emptyStateTitle}>No forms yet</Text>
              <Text style={styles.emptyStateText}>
                Create your first form or save a template to see it here
              </Text>
            </View>
          </View>
        ) : (
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.createContainer}>
              {/* Form Settings */}
              <View style={styles.formSettingsCard}>
                <Text style={styles.sectionTitle}>Form Details</Text>
                <TextInput
                  style={styles.titleInput}
                  value={formTitle}
                  onChangeText={setFormTitle}
                  placeholder="Form Title"
                  placeholderTextColor="#5f6368"
                />
                <TextInput
                  style={styles.descriptionInput}
                  value={formDescription}
                  onChangeText={setFormDescription}
                  placeholder="Form Description (optional)"
                  placeholderTextColor="#5f6368"
                  multiline
                />
              </View>

              {/* Questions */}
              <View style={styles.questionsContainer}>
                <Text style={styles.sectionTitle}>Questions</Text>
                {questions.map((question, index) => renderQuestion(question, index))}
                
                {/* Add Question Buttons */}
                <View style={styles.addQuestionContainer}>
                  <Text style={styles.addQuestionTitle}>Add New Question</Text>
                  <View style={styles.addQuestionButtons}>
                    <TouchableOpacity 
                      style={styles.addQuestionButton}
                      onPress={() => addQuestion('free-response')}
                    >
                      <Text style={styles.addQuestionIcon}>📝</Text>
                      <Text style={styles.addQuestionText}>Free Response</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={styles.addQuestionButton}
                      onPress={() => addQuestion('scale')}
                    >
                      <Text style={styles.addQuestionIcon}>📊</Text>
                      <Text style={styles.addQuestionText}>1-10 Scale</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={styles.addQuestionButton}
                      onPress={() => addQuestion('multiple-choice')}
                    >
                      <Text style={styles.addQuestionIcon}>☑️</Text>
                      <Text style={styles.addQuestionText}>Multiple Choice</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Actions */}
              <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.previewButton}>
                  <Text style={styles.previewButtonText}>👁️ Preview Form</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}>
                  <Text style={styles.saveButtonText}>💾 Save Draft</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.publishButton}
                  onPress={() => setShowExportOptions(true)}
                >
                  <Text style={styles.publishButtonText}>📤 Export Form</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </View>

      {/* Template Preview Modal */}
      {previewTemplate && (
        <TemplatePreview
          template={previewTemplate}
          isVisible={showPreview}
          onClose={handlePreviewClose}
          onUseTemplate={handleUseTemplateFromPreview}
        />
      )}

      {/* Export Options Popup */}
      <ExportOptionsPopup
        isVisible={showExportOptions}
        onClose={() => setShowExportOptions(false)}
        onExportPDF={exportHandlers.pdf}
        onPrint={exportHandlers.print}
        onSaveLocally={exportHandlers.save}
        onGenerateLink={exportHandlers.link}
        onEmailDistribution={exportHandlers.email}
        onGenerateQR={exportHandlers.qr}
        onEmbedCode={exportHandlers.embed}
        onShareCommunity={exportHandlers.community}
      />

      {/* Community Sharing Popup */}
      <CommunitySharingPopup
        isVisible={showCommunitySharing}
        onClose={() => setShowCommunitySharing(false)}
        onShare={handleCommunityShare}
      />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
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
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'column' as const,
  },
  backButton: {
    marginBottom: 8,
  },
  backButtonText: {
    color: '#1a73e8',
    fontSize: 14,
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#202124',
  },
  exportButton: {
    backgroundColor: '#1a73e8',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 0,
  },
  exportButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  tabContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
    flexDirection: 'row' as const,
    gap: 16,
    position: 'relative' as const,
    zIndex: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#dadce0',
    backgroundColor: '#f8f9fa',
  },
  activeTab: {
    backgroundColor: '#e8f0fe',
    borderColor: '#1a73e8',
  },
  tabText: {
    color: '#5f6368',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#1a73e8',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    position: 'relative' as const,
    zIndex: 10,
  },
  templatesContainer: {
    padding: 32,
  },
  templateGrid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    gap: 20,
    marginTop: 20,
  },
  templateCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e8eaed',
    width: '47%',
    minWidth: 200,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  templateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 8,
  },
  templateDescription: {
    fontSize: 14,
    color: '#5f6368',
    marginBottom: 16,
  },
  templateButton: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    opacity: 0.5,
    borderWidth: 1,
    borderColor: '#dadce0',
  },
  templateButtonText: {
    color: '#5f6368',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  comingSoon: {
    color: '#5f6368',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  createContainer: {
    padding: 32,
  },
  formSettingsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e8eaed',
    marginBottom: 32,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 20,
  },
  titleInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dadce0',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#202124',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  descriptionInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dadce0',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#202124',
    fontSize: 14,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  questionsContainer: {
    marginBottom: 32,
  },
  questionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e8eaed',
    marginBottom: 20,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  questionHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00d4ff',
  },
  questionActions: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 12,
  },
  questionTypeButton: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8b5cf6',
  },
  questionTypeText: {
    color: '#8b5cf6',
    fontSize: 12,
    fontWeight: '500',
  },
  deleteButton: {
    backgroundColor: 'rgba(255, 107, 53, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff6b35',
  },
  deleteButtonText: {
    fontSize: 12,
  },
  questionInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dadce0',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#202124',
    fontSize: 16,
    minHeight: 50,
    marginBottom: 16,
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionRow: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  optionLabel: {
    color: '#202124',
    fontSize: 16,
    fontWeight: '500',
    minWidth: 20,
  },
  optionInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dadce0',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#202124',
    fontSize: 14,
  },
  removeOptionButton: {
    backgroundColor: 'rgba(255, 107, 53, 0.2)',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff6b35',
  },
  removeOptionText: {
    color: '#ff6b35',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addOptionButton: {
    backgroundColor: '#e8f0fe',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#1a73e8',
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  addOptionText: {
    color: '#1a73e8',
    fontSize: 12,
    fontWeight: '500',
  },
  scaleContainer: {
    marginTop: 8,
  },
  scaleInfo: {
    alignItems: 'center',
  },
  scaleLabel: {
    color: '#202124',
    fontSize: 14,
    marginBottom: 12,
  },
  scalePreview: {
    flexDirection: 'row' as const,
    gap: 8,
  },
  scalePoint: {
    backgroundColor: 'rgba(0, 212, 255, 0.2)',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  scalePointText: {
    color: '#00d4ff',
    fontSize: 12,
    fontWeight: '600',
  },
  addQuestionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 24,
    borderWidth: 2,
    borderColor: '#dadce0',
    borderStyle: 'dashed',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  addQuestionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 16,
    textAlign: 'center',
  },
  addQuestionButtons: {
    flexDirection: 'row' as const,
    gap: 16,
    justifyContent: 'center',
  },
  addQuestionButton: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dadce0',
    minWidth: 120,
  },
  addQuestionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  addQuestionText: {
    color: '#202124',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  actionsContainer: {
    flexDirection: 'row' as const,
    gap: 16,
    justifyContent: 'center',
  },
  previewButton: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8b5cf6',
  },
  previewButtonText: {
    color: '#8b5cf6',
    fontSize: 14,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#dadce0',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  saveButtonText: {
    color: '#5f6368',
    fontSize: 14,
    fontWeight: '600',
  },
  publishButton: {
    backgroundColor: 'rgba(0, 212, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  publishButtonText: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
  },
  myFormsContainer: {
    padding: 32,
  },
  myFormsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 20,
  },
  myFormsSubtitle: {
    fontSize: 14,
    color: '#5f6368',
    marginBottom: 32,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 8,
  },
  emptyStateText: {
    color: '#5f6368',
    fontSize: 14,
    textAlign: 'center',
  },
} 