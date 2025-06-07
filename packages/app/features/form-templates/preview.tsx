'use client'

import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import { FormTemplate, FormField } from './templates'

interface TemplatePreviewProps {
  template: FormTemplate
  isVisible: boolean
  onClose: () => void
  onUseTemplate: () => void
}

export function TemplatePreview({ template, isVisible, onClose, onUseTemplate }: TemplatePreviewProps) {
  const [responses, setResponses] = useState<Record<string, any>>({})

  if (!isVisible) return null

  const renderField = (field: FormField, sectionIndex: number, fieldIndex: number) => {
    const fieldId = `${sectionIndex}-${fieldIndex}`
    
    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'date':
        return (
          <View key={fieldId} style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              {field.label} {field.required && <Text style={styles.required}>*</Text>}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder={field.placeholder}
              value={responses[fieldId] || ''}
              onChangeText={(value) => setResponses({...responses, [fieldId]: value})}
              editable={false}
            />
          </View>
        )
      
      case 'textarea':
        return (
          <View key={fieldId} style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              {field.label} {field.required && <Text style={styles.required}>*</Text>}
            </Text>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              placeholder={field.placeholder}
              value={responses[fieldId] || ''}
              onChangeText={(value) => setResponses({...responses, [fieldId]: value})}
              multiline
              numberOfLines={4}
              editable={false}
            />
          </View>
        )
      
      case 'select':
      case 'radio':
        return (
          <View key={fieldId} style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              {field.label} {field.required && <Text style={styles.required}>*</Text>}
            </Text>
            <View style={styles.radioGroup}>
              {field.options?.map((option, optionIndex) => (
                <View key={optionIndex} style={styles.radioOption}>
                  <View style={[styles.radioCircle, responses[fieldId] === option && styles.radioSelected]} />
                  <Text style={styles.radioText}>{option}</Text>
                </View>
              ))}
            </View>
          </View>
        )
      
      case 'multiselect':
      case 'checkbox':
        return (
          <View key={fieldId} style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              {field.label} {field.required && <Text style={styles.required}>*</Text>}
            </Text>
            <View style={styles.checkboxGroup}>
              {field.options?.map((option, optionIndex) => (
                <View key={optionIndex} style={styles.checkboxOption}>
                  <View style={[styles.checkbox, (responses[fieldId] || []).includes(option) && styles.checkboxSelected]} />
                  <Text style={styles.checkboxText}>{option}</Text>
                </View>
              ))}
            </View>
          </View>
        )
      
      case 'scale':
        return (
          <View key={fieldId} style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              {field.label} {field.required && <Text style={styles.required}>*</Text>}
            </Text>
            <View style={styles.scaleContainer}>
              <View style={styles.scaleLabels}>
                <Text style={styles.scaleLabel}>{field.min || 0}</Text>
                <Text style={styles.scaleLabel}>{field.max || 10}</Text>
              </View>
              <View style={styles.scaleButtons}>
                {Array.from({ length: (field.max || 10) - (field.min || 0) + 1 }, (_, i) => {
                  const value = (field.min || 0) + i
                  return (
                    <TouchableOpacity
                      key={i}
                      style={[styles.scaleButton, responses[fieldId] === value && styles.scaleButtonSelected]}
                      disabled
                    >
                      <Text style={[styles.scaleButtonText, responses[fieldId] === value && styles.scaleButtonTextSelected]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
            </View>
          </View>
        )
      
      case 'number':
        return (
          <View key={fieldId} style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              {field.label} {field.required && <Text style={styles.required}>*</Text>}
            </Text>
            <TextInput
              style={styles.numberInput}
              placeholder="Enter number"
              value={responses[fieldId] || ''}
              onChangeText={(value) => setResponses({...responses, [fieldId]: value})}
              keyboardType="numeric"
              editable={false}
            />
          </View>
        )
      
      default:
        return null
    }
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.backdrop} />
      <View style={styles.modal}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Preview: {template.name}</Text>
            <Text style={styles.headerSubtitle}>Patient View - {template.estimatedTime}</Text>
            <View style={styles.templateInfo}>
              <Text style={styles.specialtyText}>{template.specialty}</Text>
              <Text style={styles.categoryText}>{template.category}</Text>
            </View>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.useButton} onPress={onUseTemplate}>
              <Text style={styles.useButtonText}>Use Template</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>{template.name}</Text>
              <Text style={styles.formDescription}>{template.description}</Text>
              <Text style={styles.estimatedTime}>Estimated time: {template.estimatedTime}</Text>
            </View>

            {template.sections.map((section, sectionIndex) => (
              <View key={section.id} style={styles.section}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                {section.description && (
                  <Text style={styles.sectionDescription}>{section.description}</Text>
                )}
                
                <View style={styles.fieldsContainer}>
                  {section.fields.map((field, fieldIndex) => 
                    renderField(field, sectionIndex, fieldIndex)
                  )}
                </View>
              </View>
            ))}

            <View style={styles.formFooter}>
              <TouchableOpacity style={styles.submitButton} disabled>
                <Text style={styles.submitButtonText}>Submit Form</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    width: '95%',
    maxWidth: 1000,
    height: '95%',
    maxHeight: 900,
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
    marginBottom: 8,
  },
  templateInfo: {
    flexDirection: 'row' as const,
    gap: 12,
  },
  specialtyText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a73e8',
    backgroundColor: '#e8f0fe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5f6368',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  headerActions: {
    flexDirection: 'row' as const,
    gap: 12,
    alignItems: 'flex-start',
  },
  useButton: {
    backgroundColor: '#1a73e8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  useButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f8f9fa',
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
    backgroundColor: '#f8f9fa',
  },
  formContainer: {
    padding: 24,
  },
  formHeader: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e8eaed',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 8,
  },
  formDescription: {
    fontSize: 16,
    color: '#5f6368',
    lineHeight: 24,
    marginBottom: 12,
  },
  estimatedTime: {
    fontSize: 14,
    color: '#1a73e8',
    fontWeight: '500',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e8eaed',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#5f6368',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  fieldsContainer: {
    gap: 20,
  },
  fieldContainer: {
    marginBottom: 4,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 8,
  },
  required: {
    color: '#d93025',
  },
  textInput: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#5f6368',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  numberInput: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#5f6368',
    maxWidth: 120,
  },
  radioGroup: {
    gap: 12,
  },
  radioOption: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 8,
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e8eaed',
    backgroundColor: '#ffffff',
  },
  radioSelected: {
    borderColor: '#1a73e8',
    backgroundColor: '#1a73e8',
  },
  radioText: {
    fontSize: 14,
    color: '#202124',
  },
  checkboxGroup: {
    gap: 12,
  },
  checkboxOption: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#e8eaed',
    backgroundColor: '#ffffff',
  },
  checkboxSelected: {
    borderColor: '#1a73e8',
    backgroundColor: '#1a73e8',
  },
  checkboxText: {
    fontSize: 14,
    color: '#202124',
  },
  scaleContainer: {
    alignItems: 'center',
  },
  scaleLabels: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  scaleLabel: {
    fontSize: 12,
    color: '#5f6368',
    fontWeight: '500',
  },
  scaleButtons: {
    flexDirection: 'row' as const,
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  scaleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e8eaed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scaleButtonSelected: {
    backgroundColor: '#1a73e8',
    borderColor: '#1a73e8',
  },
  scaleButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5f6368',
  },
  scaleButtonTextSelected: {
    color: '#ffffff',
  },
  formFooter: {
    marginTop: 32,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    opacity: 0.6,
  },
  submitButtonText: {
    color: '#5f6368',
    fontSize: 16,
    fontWeight: '600',
  },
}