export interface FormField {
  id: string
  type: 'text' | 'textarea' | 'select' | 'multiselect' | 'radio' | 'checkbox' | 'number' | 'date' | 'scale' | 'phone' | 'email'
  label: string
  placeholder?: string
  required: boolean
  options?: string[]
  min?: number
  max?: number
  validation?: string
  conditional?: {
    dependsOn: string
    showIf: string | string[]
  }
}

export interface FormSection {
  id: string
  title: string
  description?: string
  fields: FormField[]
}

export interface FormTemplate {
  id: string
  name: string
  description: string
  specialty: string
  category: 'intake' | 'assessment' | 'follow-up' | 'screening' | 'specialty'
  estimatedTime: string
  sections: FormSection[]
  tags: string[]
}

export const formTemplates: FormTemplate[] = [
  {
    id: 'new-patient-intake',
    name: 'New Patient Comprehensive Intake',
    description: 'Complete registration and medical history for new patients',
    specialty: 'General',
    category: 'intake',
    estimatedTime: '15-20 minutes',
    tags: ['registration', 'medical history', 'onboarding'],
    sections: [
      {
        id: 'demographics',
        title: 'Patient Information',
        description: 'Basic demographic and contact information',
        fields: [
          { id: 'firstName', type: 'text', label: 'First Name', required: true },
          { id: 'lastName', type: 'text', label: 'Last Name', required: true },
          { id: 'dateOfBirth', type: 'date', label: 'Date of Birth', required: true },
          { id: 'gender', type: 'select', label: 'Gender', required: true, options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'] },
          { id: 'phone', type: 'phone', label: 'Phone Number', required: true },
          { id: 'email', type: 'email', label: 'Email Address', required: true },
          { id: 'address', type: 'textarea', label: 'Home Address', required: true },
          { id: 'emergencyContact', type: 'text', label: 'Emergency Contact Name', required: true },
          { id: 'emergencyPhone', type: 'phone', label: 'Emergency Contact Phone', required: true },
          { id: 'relationship', type: 'text', label: 'Relationship to Patient', required: true }
        ]
      },
      {
        id: 'insurance',
        title: 'Insurance Information',
        fields: [
          { id: 'insuranceCarrier', type: 'text', label: 'Insurance Carrier', required: true },
          { id: 'policyNumber', type: 'text', label: 'Policy Number', required: true },
          { id: 'groupNumber', type: 'text', label: 'Group Number', required: false },
          { id: 'subscriberName', type: 'text', label: 'Subscriber Name', required: true },
          { id: 'subscriberDOB', type: 'date', label: 'Subscriber Date of Birth', required: true }
        ]
      },
      {
        id: 'medical-history',
        title: 'Medical History',
        fields: [
          { id: 'currentMedications', type: 'textarea', label: 'Current Medications (include dosage)', placeholder: 'List all current medications including over-the-counter drugs and supplements', required: false },
          { id: 'allergies', type: 'textarea', label: 'Allergies', placeholder: 'List any allergies to medications, foods, or other substances', required: false },
          { id: 'medicalConditions', type: 'textarea', label: 'Current Medical Conditions', placeholder: 'List any ongoing medical conditions or diagnoses', required: false },
          { id: 'surgicalHistory', type: 'textarea', label: 'Previous Surgeries', placeholder: 'List any previous surgeries with approximate dates', required: false },
          { id: 'familyHistory', type: 'textarea', label: 'Family Medical History', placeholder: 'List significant medical conditions in immediate family members', required: false }
        ]
      },
      {
        id: 'social-history',
        title: 'Social History',
        fields: [
          { id: 'smoking', type: 'radio', label: 'Do you smoke tobacco?', required: true, options: ['Never', 'Former smoker', 'Current smoker'] },
          { id: 'smokingDetails', type: 'text', label: 'Smoking details', placeholder: 'How much and for how long?', required: false, conditional: { dependsOn: 'smoking', showIf: ['Former smoker', 'Current smoker'] } },
          { id: 'alcohol', type: 'radio', label: 'Do you drink alcohol?', required: true, options: ['Never', 'Occasionally', 'Regularly'] },
          { id: 'alcoholDetails', type: 'text', label: 'Alcohol consumption details', placeholder: 'How often and how much?', required: false, conditional: { dependsOn: 'alcohol', showIf: ['Occasionally', 'Regularly'] } },
          { id: 'exercise', type: 'select', label: 'Exercise frequency', required: true, options: ['No exercise', '1-2 times per week', '3-4 times per week', '5+ times per week'] },
          { id: 'occupation', type: 'text', label: 'Occupation', required: false }
        ]
      }
    ]
  },
  {
    id: 'pre-visit-symptom-assessment',
    name: 'Pre-Visit Symptom Assessment',
    description: 'Universal form to assess current symptoms before appointment',
    specialty: 'General',
    category: 'assessment',
    estimatedTime: '5-10 minutes',
    tags: ['symptoms', 'chief complaint', 'pre-visit'],
    sections: [
      {
        id: 'chief-complaint',
        title: 'Main Concern',
        fields: [
          { id: 'primaryConcern', type: 'textarea', label: 'What is the main reason for your visit today?', required: true },
          { id: 'symptomDuration', type: 'select', label: 'How long have you had these symptoms?', required: true, options: ['Less than 1 day', '1-3 days', '1 week', '2-4 weeks', '1-3 months', '3-6 months', 'More than 6 months'] },
          { id: 'symptomOnset', type: 'radio', label: 'How did the symptoms start?', required: true, options: ['Gradually', 'Suddenly', 'After an injury', 'Not sure'] }
        ]
      },
      {
        id: 'pain-assessment',
        title: 'Pain Assessment',
        fields: [
          { id: 'hasPain', type: 'radio', label: 'Are you experiencing pain?', required: true, options: ['Yes', 'No'] },
          { id: 'painLevel', type: 'scale', label: 'Pain level (0 = no pain, 10 = worst pain)', min: 0, max: 10, required: false, conditional: { dependsOn: 'hasPain', showIf: 'Yes' } },
          { id: 'painLocation', type: 'text', label: 'Where is the pain located?', required: false, conditional: { dependsOn: 'hasPain', showIf: 'Yes' } },
          { id: 'painType', type: 'multiselect', label: 'How would you describe the pain?', options: ['Sharp', 'Dull', 'Throbbing', 'Burning', 'Cramping', 'Shooting'], required: false, conditional: { dependsOn: 'hasPain', showIf: 'Yes' } },
          { id: 'painTriggers', type: 'textarea', label: 'What makes the pain worse?', required: false, conditional: { dependsOn: 'hasPain', showIf: 'Yes' } },
          { id: 'painRelief', type: 'textarea', label: 'What makes the pain better?', required: false, conditional: { dependsOn: 'hasPain', showIf: 'Yes' } }
        ]
      },
      {
        id: 'associated-symptoms',
        title: 'Associated Symptoms',
        fields: [
          { id: 'fever', type: 'radio', label: 'Do you have a fever?', required: true, options: ['Yes', 'No', 'Not sure'] },
          { id: 'nausea', type: 'radio', label: 'Do you have nausea or vomiting?', required: true, options: ['Yes', 'No'] },
          { id: 'fatigue', type: 'radio', label: 'Do you feel unusually tired?', required: true, options: ['Yes', 'No'] },
          { id: 'appetiteChange', type: 'radio', label: 'Has your appetite changed?', required: true, options: ['Increased', 'Decreased', 'No change'] },
          { id: 'sleepChange', type: 'radio', label: 'Has your sleep pattern changed?', required: true, options: ['Sleeping more', 'Sleeping less', 'No change'] },
          { id: 'otherSymptoms', type: 'textarea', label: 'Any other symptoms?', placeholder: 'Please describe any other symptoms you are experiencing', required: false }
        ]
      }
    ]
  },
  {
    id: 'cardiology-chest-pain',
    name: 'Cardiology Chest Pain Evaluation',
    description: 'Specialized assessment for patients with chest pain or cardiac symptoms',
    specialty: 'Cardiology',
    category: 'specialty',
    estimatedTime: '10-15 minutes',
    tags: ['cardiology', 'chest pain', 'cardiac'],
    sections: [
      {
        id: 'chest-pain-characteristics',
        title: 'Chest Pain Details',
        fields: [
          { id: 'chestPainLocation', type: 'multiselect', label: 'Where is the chest pain located?', required: true, options: ['Center of chest', 'Left side', 'Right side', 'Upper chest', 'Lower chest', 'Radiates to arm', 'Radiates to jaw', 'Radiates to back'] },
          { id: 'painQuality', type: 'multiselect', label: 'How would you describe the pain?', required: true, options: ['Crushing', 'Squeezing', 'Pressure', 'Sharp', 'Stabbing', 'Burning', 'Aching'] },
          { id: 'painSeverity', type: 'scale', label: 'Pain severity (0-10)', min: 0, max: 10, required: true },
          { id: 'painDuration', type: 'select', label: 'How long does each episode last?', required: true, options: ['Less than 1 minute', '1-5 minutes', '5-15 minutes', '15-30 minutes', '30+ minutes', 'Constant'] },
          { id: 'painTriggers', type: 'multiselect', label: 'What triggers the pain?', required: false, options: ['Exercise', 'Stress', 'Eating', 'Cold weather', 'Rest', 'Deep breathing', 'No specific trigger'] },
          { id: 'painRelief', type: 'multiselect', label: 'What relieves the pain?', required: false, options: ['Rest', 'Nitroglycerin', 'Pain medication', 'Change of position', 'Nothing helps'] }
        ]
      },
      {
        id: 'cardiac-symptoms',
        title: 'Other Cardiac Symptoms',
        fields: [
          { id: 'shortnessOfBreath', type: 'radio', label: 'Do you have shortness of breath?', required: true, options: ['Yes', 'No'] },
          { id: 'sobDetails', type: 'multiselect', label: 'When do you experience shortness of breath?', required: false, options: ['At rest', 'With mild activity', 'With moderate activity', 'With strenuous activity', 'When lying flat', 'At night'], conditional: { dependsOn: 'shortnessOfBreath', showIf: 'Yes' } },
          { id: 'palpitations', type: 'radio', label: 'Do you have palpitations or irregular heartbeat?', required: true, options: ['Yes', 'No'] },
          { id: 'dizziness', type: 'radio', label: 'Do you experience dizziness or lightheadedness?', required: true, options: ['Yes', 'No'] },
          { id: 'syncope', type: 'radio', label: 'Have you fainted or nearly fainted?', required: true, options: ['Yes', 'No'] },
          { id: 'swelling', type: 'radio', label: 'Do you have swelling in your legs or feet?', required: true, options: ['Yes', 'No'] }
        ]
      },
      {
        id: 'cardiac-risk-factors',
        title: 'Cardiac Risk Factors',
        fields: [
          { id: 'familyHeartDisease', type: 'radio', label: 'Family history of heart disease?', required: true, options: ['Yes', 'No', 'Unknown'] },
          { id: 'diabetes', type: 'radio', label: 'Do you have diabetes?', required: true, options: ['Yes', 'No'] },
          { id: 'highBP', type: 'radio', label: 'Do you have high blood pressure?', required: true, options: ['Yes', 'No', 'Unknown'] },
          { id: 'highCholesterol', type: 'radio', label: 'Do you have high cholesterol?', required: true, options: ['Yes', 'No', 'Unknown'] },
          { id: 'smoker', type: 'radio', label: 'Do you smoke or have you ever smoked?', required: true, options: ['Never', 'Former smoker', 'Current smoker'] },
          { id: 'exerciseTolerance', type: 'select', label: 'How many flights of stairs can you climb without stopping?', required: true, options: ['Cannot climb stairs', 'Less than 1 flight', '1 flight', '2-3 flights', 'More than 3 flights'] }
        ]
      }
    ]
  },
  {
    id: 'orthopedic-injury-assessment',
    name: 'Orthopedic Injury Assessment',
    description: 'Comprehensive evaluation for musculoskeletal injuries and pain',
    specialty: 'Orthopedics',
    category: 'specialty',
    estimatedTime: '10-15 minutes',
    tags: ['orthopedics', 'injury', 'pain', 'musculoskeletal'],
    sections: [
      {
        id: 'injury-details',
        title: 'Injury Information',
        fields: [
          { id: 'injuryLocation', type: 'select', label: 'Location of injury/pain', required: true, options: ['Neck', 'Shoulder', 'Elbow', 'Wrist/Hand', 'Upper back', 'Lower back', 'Hip', 'Knee', 'Ankle/Foot', 'Multiple locations'] },
          { id: 'injuryMechanism', type: 'radio', label: 'How did the injury occur?', required: true, options: ['Sports injury', 'Fall', 'Car accident', 'Work-related', 'Lifting heavy object', 'Gradual onset', 'Unknown'] },
          { id: 'injuryDate', type: 'date', label: 'When did the injury occur?', required: true },
          { id: 'previousTreatment', type: 'multiselect', label: 'What treatments have you tried?', required: false, options: ['Rest', 'Ice', 'Heat', 'Over-the-counter pain medication', 'Prescription medication', 'Physical therapy', 'Chiropractic care', 'Massage', 'Injections'] }
        ]
      },
      {
        id: 'pain-function',
        title: 'Pain and Function',
        fields: [
          { id: 'currentPainLevel', type: 'scale', label: 'Current pain level (0-10)', min: 0, max: 10, required: true },
          { id: 'worstPainLevel', type: 'scale', label: 'Worst pain level in past week (0-10)', min: 0, max: 10, required: true },
          { id: 'painPattern', type: 'radio', label: 'Pain pattern', required: true, options: ['Constant', 'Intermittent', 'Only with activity', 'Only at rest', 'Worse in morning', 'Worse at night'] },
          { id: 'radiatingPain', type: 'radio', label: 'Does the pain radiate or travel?', required: true, options: ['Yes', 'No'] },
          { id: 'radiationLocation', type: 'text', label: 'Where does the pain travel to?', required: false, conditional: { dependsOn: 'radiatingPain', showIf: 'Yes' } },
          { id: 'numbnessTingling', type: 'radio', label: 'Do you have numbness or tingling?', required: true, options: ['Yes', 'No'] },
          { id: 'weakness', type: 'radio', label: 'Do you have weakness in the affected area?', required: true, options: ['Yes', 'No'] }
        ]
      },
      {
        id: 'functional-impact',
        title: 'Functional Impact',
        fields: [
          { id: 'workImpact', type: 'radio', label: 'Has this affected your ability to work?', required: true, options: ['Not at all', 'Somewhat', 'Significantly', 'Unable to work'] },
          { id: 'sleepImpact', type: 'radio', label: 'Has this affected your sleep?', required: true, options: ['Not at all', 'Somewhat', 'Significantly', 'Unable to sleep'] },
          { id: 'dailyActivities', type: 'multiselect', label: 'Which activities are difficult?', required: false, options: ['Walking', 'Climbing stairs', 'Lifting', 'Bending', 'Sitting', 'Standing', 'Driving', 'Sports/Exercise', 'Household chores'] },
          { id: 'goals', type: 'textarea', label: 'What are your goals for treatment?', placeholder: 'What activities would you like to return to?', required: false }
        ]
      }
    ]
  },
  {
    id: 'mental-health-screening',
    name: 'Mental Health Screening (PHQ-9 + GAD-7)',
    description: 'Standardized screening for depression and anxiety',
    specialty: 'Mental Health',
    category: 'screening',
    estimatedTime: '5-10 minutes',
    tags: ['mental health', 'depression', 'anxiety', 'PHQ-9', 'GAD-7'],
    sections: [
      {
        id: 'phq9',
        title: 'Depression Screening (PHQ-9)',
        description: 'Over the last 2 weeks, how often have you been bothered by any of the following problems?',
        fields: [
          { id: 'phq9_1', type: 'radio', label: 'Little interest or pleasure in doing things', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'phq9_2', type: 'radio', label: 'Feeling down, depressed, or hopeless', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'phq9_3', type: 'radio', label: 'Trouble falling or staying asleep, or sleeping too much', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'phq9_4', type: 'radio', label: 'Feeling tired or having little energy', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'phq9_5', type: 'radio', label: 'Poor appetite or overeating', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'phq9_6', type: 'radio', label: 'Feeling bad about yourself or that you are a failure', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'phq9_7', type: 'radio', label: 'Trouble concentrating on things like reading or watching TV', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'phq9_8', type: 'radio', label: 'Moving or speaking slowly, or being fidgety or restless', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'phq9_9', type: 'radio', label: 'Thoughts that you would be better off dead or hurting yourself', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] }
        ]
      },
      {
        id: 'gad7',
        title: 'Anxiety Screening (GAD-7)',
        description: 'Over the last 2 weeks, how often have you been bothered by the following problems?',
        fields: [
          { id: 'gad7_1', type: 'radio', label: 'Feeling nervous, anxious, or on edge', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'gad7_2', type: 'radio', label: 'Not being able to stop or control worrying', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'gad7_3', type: 'radio', label: 'Worrying too much about different things', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'gad7_4', type: 'radio', label: 'Trouble relaxing', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'gad7_5', type: 'radio', label: 'Being so restless that it is hard to sit still', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'gad7_6', type: 'radio', label: 'Becoming easily annoyed or irritable', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
          { id: 'gad7_7', type: 'radio', label: 'Feeling afraid as if something awful might happen', required: true, options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] }
        ]
      },
      {
        id: 'additional-mental-health',
        title: 'Additional Information',
        fields: [
          { id: 'previousTreatment', type: 'radio', label: 'Have you received mental health treatment before?', required: true, options: ['Yes', 'No'] },
          { id: 'currentMedications', type: 'radio', label: 'Are you currently taking any psychiatric medications?', required: true, options: ['Yes', 'No'] },
          { id: 'substanceUse', type: 'radio', label: 'Do you use alcohol or drugs to cope with stress?', required: true, options: ['Never', 'Rarely', 'Sometimes', 'Often'] },
          { id: 'supportSystem', type: 'radio', label: 'Do you have people you can talk to about problems?', required: true, options: ['Yes, many', 'Yes, a few', 'Maybe one person', 'No one'] },
          { id: 'additionalConcerns', type: 'textarea', label: 'Any additional mental health concerns?', required: false }
        ]
      }
    ]
  },
  {
    id: 'post-operative-followup',
    name: 'Post-Operative Follow-up',
    description: 'Assessment for patients recovering from surgery',
    specialty: 'Surgery',
    category: 'follow-up',
    estimatedTime: '8-12 minutes',
    tags: ['surgery', 'post-op', 'recovery', 'follow-up'],
    sections: [
      {
        id: 'surgery-details',
        title: 'Surgery Information',
        fields: [
          { id: 'surgeryType', type: 'text', label: 'Type of surgery performed', required: true },
          { id: 'surgeryDate', type: 'date', label: 'Date of surgery', required: true },
          { id: 'surgeon', type: 'text', label: 'Surgeon name', required: true },
          { id: 'anesthesiaType', type: 'select', label: 'Type of anesthesia used', required: false, options: ['General', 'Spinal', 'Local', 'Sedation', 'Not sure'] }
        ]
      },
      {
        id: 'pain-management',
        title: 'Pain and Symptom Management',
        fields: [
          { id: 'currentPainLevel', type: 'scale', label: 'Current pain level (0-10)', min: 0, max: 10, required: true },
          { id: 'painTrend', type: 'radio', label: 'How is your pain compared to yesterday?', required: true, options: ['Much better', 'Somewhat better', 'About the same', 'Somewhat worse', 'Much worse'] },
          { id: 'painMedication', type: 'radio', label: 'Are you taking pain medication as prescribed?', required: true, options: ['Yes, as prescribed', 'Yes, but less than prescribed', 'Yes, but more than prescribed', 'No, not taking any'] },
          { id: 'medicationEffectiveness', type: 'radio', label: 'How effective is your pain medication?', required: true, options: ['Very effective', 'Somewhat effective', 'Not very effective', 'Not effective at all'] },
          { id: 'sideEffects', type: 'multiselect', label: 'Are you experiencing any medication side effects?', required: false, options: ['Nausea', 'Constipation', 'Drowsiness', 'Dizziness', 'Confusion', 'Itching', 'No side effects'] }
        ]
      },
      {
        id: 'wound-healing',
        title: 'Wound and Healing',
        fields: [
          { id: 'woundAppearance', type: 'radio', label: 'How does your incision/wound look?', required: true, options: ['Normal healing', 'Some redness', 'Significant redness', 'Swelling', 'Drainage', 'Concerning appearance'] },
          { id: 'drainageType', type: 'multiselect', label: 'If there is drainage, what type?', required: false, options: ['Clear', 'Yellow', 'Green', 'Bloody', 'Thick/pus', 'Foul smelling'], conditional: { dependsOn: 'woundAppearance', showIf: 'Drainage' } },
          { id: 'woundCare', type: 'radio', label: 'Are you following wound care instructions?', required: true, options: ['Yes, exactly as instructed', 'Mostly following instructions', 'Having difficulty following instructions', 'Not following instructions'] },
          { id: 'activityLevel', type: 'radio', label: 'Are you following activity restrictions?', required: true, options: ['Yes, completely', 'Mostly', 'Somewhat', 'Not at all'] }
        ]
      },
      {
        id: 'recovery-progress',
        title: 'Recovery Progress',
        fields: [
          { id: 'appetite', type: 'radio', label: 'How is your appetite?', required: true, options: ['Normal', 'Decreased', 'Increased', 'No appetite'] },
          { id: 'nausea', type: 'radio', label: 'Are you experiencing nausea or vomiting?', required: true, options: ['No', 'Mild nausea', 'Moderate nausea', 'Severe nausea', 'Vomiting'] },
          { id: 'bowelMovement', type: 'radio', label: 'Have you had a bowel movement since surgery?', required: true, options: ['Yes, normal', 'Yes, but constipated', 'No, but not concerned', 'No, and concerned'] },
          { id: 'sleepQuality', type: 'radio', label: 'How is your sleep?', required: true, options: ['Sleeping well', 'Some difficulty', 'Poor sleep', 'Unable to sleep'] },
          { id: 'mobilityLevel', type: 'radio', label: 'How is your mobility?', required: true, options: ['Back to normal', 'Improving', 'About the same', 'Getting worse'] },
          { id: 'concerningSymptoms', type: 'multiselect', label: 'Are you experiencing any concerning symptoms?', required: false, options: ['Fever', 'Chills', 'Shortness of breath', 'Chest pain', 'Leg swelling', 'Confusion', 'None of these'] },
          { id: 'additionalConcerns', type: 'textarea', label: 'Any other concerns or questions?', required: false }
        ]
      }
    ]
  },
  {
    id: 'pediatric-well-child',
    name: 'Pediatric Well-Child Visit',
    description: 'Comprehensive assessment for routine pediatric checkups',
    specialty: 'Pediatrics',
    category: 'assessment',
    estimatedTime: '10-15 minutes',
    tags: ['pediatrics', 'well-child', 'development', 'immunizations'],
    sections: [
      {
        id: 'child-info',
        title: 'Child Information',
        fields: [
          { id: 'childName', type: 'text', label: 'Child\'s full name', required: true },
          { id: 'dateOfBirth', type: 'date', label: 'Date of birth', required: true },
          { id: 'parentGuardian', type: 'text', label: 'Parent/Guardian name', required: true },
          { id: 'relationship', type: 'select', label: 'Relationship to child', required: true, options: ['Mother', 'Father', 'Legal guardian', 'Grandparent', 'Other'] },
          { id: 'primaryConcerns', type: 'textarea', label: 'Any current concerns about your child?', required: false }
        ]
      },
      {
        id: 'development',
        title: 'Development and Milestones',
        fields: [
          { id: 'motorSkills', type: 'radio', label: 'Motor development appropriate for age?', required: true, options: ['Yes, on track', 'Some concerns', 'Significant concerns', 'Not sure'] },
          { id: 'languageSkills', type: 'radio', label: 'Language development appropriate for age?', required: true, options: ['Yes, on track', 'Some concerns', 'Significant concerns', 'Not sure'] },
          { id: 'socialSkills', type: 'radio', label: 'Social development appropriate for age?', required: true, options: ['Yes, on track', 'Some concerns', 'Significant concerns', 'Not sure'] },
          { id: 'schoolPerformance', type: 'radio', label: 'How is your child doing in school/daycare?', required: false, options: ['Excellent', 'Good', 'Fair', 'Poor', 'Not applicable'] },
          { id: 'behaviorConcerns', type: 'multiselect', label: 'Any behavioral concerns?', required: false, options: ['Aggression', 'Attention problems', 'Sleep issues', 'Eating problems', 'Mood changes', 'No concerns'] }
        ]
      },
      {
        id: 'health-habits',
        title: 'Health and Safety',
        fields: [
          { id: 'sleepHours', type: 'number', label: 'Hours of sleep per night', min: 0, max: 24, required: true },
          { id: 'sleepQuality', type: 'radio', label: 'Sleep quality', required: true, options: ['Sleeps well', 'Some difficulty', 'Frequent wake-ups', 'Major sleep problems'] },
          { id: 'appetite', type: 'radio', label: 'Appetite', required: true, options: ['Good appetite', 'Fair appetite', 'Poor appetite', 'Overeating'] },
          { id: 'dietConcerns', type: 'multiselect', label: 'Any diet concerns?', required: false, options: ['Picky eater', 'Food allergies', 'Weight concerns', 'Eating too much junk food', 'No concerns'] },
          { id: 'physicalActivity', type: 'radio', label: 'Physical activity level', required: true, options: ['Very active', 'Moderately active', 'Somewhat active', 'Not very active'] },
          { id: 'screenTime', type: 'select', label: 'Daily screen time', required: true, options: ['Less than 1 hour', '1-2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours'] }
        ]
      },
      {
        id: 'immunizations',
        title: 'Immunizations and Health History',
        fields: [
          { id: 'vaccinationsUpToDate', type: 'radio', label: 'Are immunizations up to date?', required: true, options: ['Yes', 'No', 'Not sure'] },
          { id: 'recentIllnesses', type: 'textarea', label: 'Any recent illnesses or injuries?', required: false },
          { id: 'medications', type: 'textarea', label: 'Current medications (including vitamins)', required: false },
          { id: 'allergies', type: 'textarea', label: 'Known allergies', required: false },
          { id: 'familyHistory', type: 'textarea', label: 'Relevant family medical history', required: false }
        ]
      }
    ]
  },
  {
    id: 'womens-health-annual',
    name: 'Women\'s Health Annual Exam',
    description: 'Comprehensive annual gynecological and women\'s health assessment',
    specialty: 'OB/GYN',
    category: 'assessment',
    estimatedTime: '12-18 minutes',
    tags: ['women\'s health', 'gynecology', 'annual exam', 'reproductive health'],
    sections: [
      {
        id: 'menstrual-history',
        title: 'Menstrual and Reproductive History',
        fields: [
          { id: 'lastMenstrualPeriod', type: 'date', label: 'First day of last menstrual period', required: true },
          { id: 'menstrualCycleLength', type: 'number', label: 'Typical cycle length (days)', min: 15, max: 60, required: true },
          { id: 'periodDuration', type: 'number', label: 'Period duration (days)', min: 1, max: 15, required: true },
          { id: 'menstrualFlow', type: 'radio', label: 'Menstrual flow', required: true, options: ['Light', 'Normal', 'Heavy', 'Very heavy'] },
          { id: 'menstrualPain', type: 'radio', label: 'Menstrual cramping/pain', required: true, options: ['None', 'Mild', 'Moderate', 'Severe'] },
          { id: 'irregularPeriods', type: 'radio', label: 'Are your periods regular?', required: true, options: ['Yes, very regular', 'Mostly regular', 'Somewhat irregular', 'Very irregular'] },
          { id: 'ageFirstPeriod', type: 'number', label: 'Age at first period', min: 8, max: 20, required: true }
        ]
      },
      {
        id: 'pregnancy-history',
        title: 'Pregnancy and Sexual Health',
        fields: [
          { id: 'pregnancies', type: 'number', label: 'Number of pregnancies', min: 0, max: 20, required: true },
          { id: 'liveBirths', type: 'number', label: 'Number of live births', min: 0, max: 20, required: true },
          { id: 'miscarriages', type: 'number', label: 'Number of miscarriages', min: 0, max: 20, required: true },
          { id: 'sexuallyActive', type: 'radio', label: 'Are you sexually active?', required: true, options: ['Yes', 'No'] },
          { id: 'contraception', type: 'multiselect', label: 'Current contraception method', required: false, options: ['Birth control pills', 'IUD', 'Condoms', 'Diaphragm', 'Depo shot', 'Implant', 'Sterilization', 'None'], conditional: { dependsOn: 'sexuallyActive', showIf: 'Yes' } },
          { id: 'pregnancyPlans', type: 'radio', label: 'Are you planning to become pregnant in the next year?', required: false, options: ['Yes', 'No', 'Maybe', 'Not sure'], conditional: { dependsOn: 'sexuallyActive', showIf: 'Yes' } }
        ]
      },
      {
        id: 'gynecologic-symptoms',
        title: 'Gynecologic Symptoms',
        fields: [
          { id: 'vaginalDischarge', type: 'radio', label: 'Abnormal vaginal discharge?', required: true, options: ['No', 'Yes, mild', 'Yes, moderate', 'Yes, severe'] },
          { id: 'vaginalItching', type: 'radio', label: 'Vaginal itching or burning?', required: true, options: ['No', 'Yes, mild', 'Yes, moderate', 'Yes, severe'] },
          { id: 'pelvicPain', type: 'radio', label: 'Pelvic pain?', required: true, options: ['No', 'Yes, mild', 'Yes, moderate', 'Yes, severe'] },
          { id: 'painfulIntercourse', type: 'radio', label: 'Painful intercourse?', required: false, options: ['No', 'Sometimes', 'Often', 'Always'], conditional: { dependsOn: 'sexuallyActive', showIf: 'Yes' } },
          { id: 'bleedingBetweenPeriods', type: 'radio', label: 'Bleeding between periods?', required: true, options: ['No', 'Rarely', 'Sometimes', 'Often'] },
          { id: 'hotFlashes', type: 'radio', label: 'Hot flashes or night sweats?', required: true, options: ['No', 'Rarely', 'Sometimes', 'Often'] }
        ]
      },
      {
        id: 'breast-health',
        title: 'Breast Health',
        fields: [
          { id: 'breastSelfExam', type: 'radio', label: 'Do you perform breast self-exams?', required: true, options: ['Yes, monthly', 'Yes, occasionally', 'No'] },
          { id: 'breastConcerns', type: 'radio', label: 'Any breast concerns?', required: true, options: ['No concerns', 'Breast pain', 'Breast lumps', 'Nipple discharge', 'Other concerns'] },
          { id: 'lastMammogram', type: 'select', label: 'Last mammogram', required: false, options: ['Within past year', '1-2 years ago', '2-3 years ago', 'More than 3 years ago', 'Never had one'] },
          { id: 'familyBreastCancer', type: 'radio', label: 'Family history of breast or ovarian cancer?', required: true, options: ['No', 'Yes, breast cancer', 'Yes, ovarian cancer', 'Yes, both'] }
        ]
      },
      {
        id: 'preventive-care',
        title: 'Preventive Care',
        fields: [
          { id: 'lastPapSmear', type: 'select', label: 'Last Pap smear', required: true, options: ['Within past year', '1-2 years ago', '2-3 years ago', 'More than 3 years ago', 'Never had one'] },
          { id: 'lastSTDTesting', type: 'select', label: 'Last STD testing', required: false, options: ['Within past year', '1-2 years ago', '2-3 years ago', 'More than 3 years ago', 'Never tested'], conditional: { dependsOn: 'sexuallyActive', showIf: 'Yes' } },
          { id: 'tobaccoUse', type: 'radio', label: 'Tobacco use', required: true, options: ['Never', 'Former user', 'Current user'] },
          { id: 'alcoholUse', type: 'select', label: 'Alcohol consumption', required: true, options: ['Never', 'Rarely', '1-2 drinks per week', '3-7 drinks per week', 'More than 7 drinks per week'] },
          { id: 'exerciseFrequency', type: 'select', label: 'Exercise frequency', required: true, options: ['No exercise', '1-2 times per week', '3-4 times per week', '5+ times per week'] }
        ]
      }
    ]
  },
  {
    id: 'chronic-disease-management',
    name: 'Chronic Disease Management',
    description: 'Follow-up assessment for patients with chronic conditions like diabetes, hypertension, or heart disease',
    specialty: 'Internal Medicine',
    category: 'follow-up',
    estimatedTime: '10-15 minutes',
    tags: ['chronic disease', 'diabetes', 'hypertension', 'management'],
    sections: [
      {
        id: 'current-conditions',
        title: 'Current Medical Conditions',
        fields: [
          { id: 'primaryConditions', type: 'multiselect', label: 'Primary chronic conditions', required: true, options: ['Diabetes Type 1', 'Diabetes Type 2', 'High blood pressure', 'High cholesterol', 'Heart disease', 'COPD', 'Asthma', 'Kidney disease', 'Arthritis', 'Depression', 'Other'] },
          { id: 'diagnosisDate', type: 'text', label: 'When were you first diagnosed?', placeholder: 'e.g., 5 years ago, 2018', required: true },
          { id: 'lastA1C', type: 'number', label: 'Last A1C result (if diabetic)', min: 4, max: 15, required: false },
          { id: 'lastA1CDate', type: 'date', label: 'Date of last A1C', required: false }
        ]
      },
      {
        id: 'medications',
        title: 'Medication Management',
        fields: [
          { id: 'currentMedications', type: 'textarea', label: 'List all current medications with dosages', placeholder: 'Include prescription medications, over-the-counter drugs, and supplements', required: true },
          { id: 'medicationCompliance', type: 'radio', label: 'How often do you take medications as prescribed?', required: true, options: ['Always', 'Most of the time', 'Sometimes', 'Rarely', 'Never'] },
          { id: 'missedDosesReason', type: 'multiselect', label: 'If you miss doses, why?', required: false, options: ['Forget to take them', 'Side effects', 'Cost concerns', 'Feel better without them', 'Don\'t believe they help', 'Other'], conditional: { dependsOn: 'medicationCompliance', showIf: ['Most of the time', 'Sometimes', 'Rarely', 'Never'] } },
          { id: 'sideEffects', type: 'textarea', label: 'Any medication side effects?', required: false },
          { id: 'medicationConcerns', type: 'textarea', label: 'Any concerns about your medications?', required: false }
        ]
      },
      {
        id: 'monitoring',
        title: 'Home Monitoring',
        fields: [
          { id: 'bloodPressureMonitoring', type: 'radio', label: 'Do you check your blood pressure at home?', required: true, options: ['Yes, daily', 'Yes, weekly', 'Yes, occasionally', 'No'] },
          { id: 'recentBPReading', type: 'text', label: 'Most recent blood pressure reading', placeholder: 'e.g., 120/80', required: false, conditional: { dependsOn: 'bloodPressureMonitoring', showIf: ['Yes, daily', 'Yes, weekly', 'Yes, occasionally'] } },
          { id: 'bloodSugarMonitoring', type: 'radio', label: 'Do you check your blood sugar at home?', required: false, options: ['Yes, multiple times daily', 'Yes, daily', 'Yes, occasionally', 'No'] },
          { id: 'recentBloodSugar', type: 'text', label: 'Typical blood sugar range', placeholder: 'e.g., 100-140 mg/dL', required: false, conditional: { dependsOn: 'bloodSugarMonitoring', showIf: ['Yes, multiple times daily', 'Yes, daily', 'Yes, occasionally'] } },
          { id: 'weightMonitoring', type: 'radio', label: 'Do you weigh yourself regularly?', required: true, options: ['Yes, daily', 'Yes, weekly', 'Yes, occasionally', 'No'] }
        ]
      },
      {
        id: 'lifestyle-factors',
        title: 'Lifestyle Management',
        fields: [
          { id: 'dietCompliance', type: 'radio', label: 'How well do you follow your recommended diet?', required: true, options: ['Very well', 'Somewhat well', 'Occasionally', 'Not well', 'No special diet'] },
          { id: 'exerciseFrequency', type: 'select', label: 'Exercise frequency', required: true, options: ['No exercise', '1-2 times per week', '3-4 times per week', '5+ times per week'] },
          { id: 'smokingStatus', type: 'radio', label: 'Smoking status', required: true, options: ['Never smoked', 'Former smoker', 'Current smoker'] },
          { id: 'alcoholConsumption', type: 'select', label: 'Alcohol consumption', required: true, options: ['None', '1-2 drinks per week', '3-7 drinks per week', 'More than 7 drinks per week'] },
          { id: 'stressLevel', type: 'scale', label: 'Stress level (0-10)', min: 0, max: 10, required: true },
          { id: 'sleepQuality', type: 'radio', label: 'Sleep quality', required: true, options: ['Excellent', 'Good', 'Fair', 'Poor'] }
        ]
      },
      {
        id: 'symptoms-concerns',
        title: 'Current Symptoms and Concerns',
        fields: [
          { id: 'symptomsWorsening', type: 'radio', label: 'Are your symptoms getting worse?', required: true, options: ['Much better', 'Somewhat better', 'About the same', 'Somewhat worse', 'Much worse'] },
          { id: 'newSymptoms', type: 'textarea', label: 'Any new symptoms since last visit?', required: false },
          { id: 'energyLevel', type: 'scale', label: 'Energy level (0-10)', min: 0, max: 10, required: true },
          { id: 'qualityOfLife', type: 'scale', label: 'Overall quality of life (0-10)', min: 0, max: 10, required: true },
          { id: 'specificConcerns', type: 'textarea', label: 'Any specific concerns or questions?', required: false },
          { id: 'treatmentGoals', type: 'textarea', label: 'What are your main goals for managing your condition?', required: false }
        ]
      }
    ]
  },
  {
    id: 'patient-satisfaction',
    name: 'Patient Experience & Satisfaction Survey',
    description: 'Comprehensive feedback on healthcare experience and quality of care',
    specialty: 'Quality Improvement',
    category: 'follow-up',
    estimatedTime: '8-12 minutes',
    tags: ['satisfaction', 'experience', 'quality', 'feedback'],
    sections: [
      {
        id: 'visit-details',
        title: 'Visit Information',
        fields: [
          { id: 'visitDate', type: 'date', label: 'Date of visit', required: true },
          { id: 'providerSeen', type: 'text', label: 'Healthcare provider seen', required: true },
          { id: 'visitType', type: 'select', label: 'Type of visit', required: true, options: ['Routine check-up', 'Follow-up visit', 'New problem', 'Emergency visit', 'Procedure', 'Surgery consultation'] },
          { id: 'firstVisit', type: 'radio', label: 'Was this your first visit with this provider?', required: true, options: ['Yes', 'No'] }
        ]
      },
      {
        id: 'access-scheduling',
        title: 'Access and Scheduling',
        fields: [
          { id: 'schedulingEase', type: 'scale', label: 'How easy was it to schedule your appointment? (1=Very difficult, 5=Very easy)', min: 1, max: 5, required: true },
          { id: 'appointmentTiming', type: 'radio', label: 'Were you able to get an appointment when you needed it?', required: true, options: ['Yes, right away', 'Yes, within a few days', 'Yes, but took longer than preferred', 'No, had to wait too long'] },
          { id: 'waitTime', type: 'select', label: 'How long did you wait beyond your scheduled appointment time?', required: true, options: ['No wait', '1-10 minutes', '11-20 minutes', '21-30 minutes', 'More than 30 minutes'] },
          { id: 'officeHours', type: 'radio', label: 'Are the office hours convenient for you?', required: true, options: ['Very convenient', 'Somewhat convenient', 'Not very convenient', 'Not convenient at all'] }
        ]
      },
      {
        id: 'provider-communication',
        title: 'Provider Communication',
        fields: [
          { id: 'providerListening', type: 'scale', label: 'How well did your provider listen to you? (1=Poor, 5=Excellent)', min: 1, max: 5, required: true },
          { id: 'explanationClarity', type: 'scale', label: 'How clearly did your provider explain things? (1=Poor, 5=Excellent)', min: 1, max: 5, required: true },
          { id: 'questionsAnswered', type: 'radio', label: 'Did your provider answer all your questions?', required: true, options: ['Yes, completely', 'Yes, mostly', 'Some questions answered', 'No, few questions answered'] },
          { id: 'timeSpent', type: 'radio', label: 'Did your provider spend enough time with you?', required: true, options: ['Yes, plenty of time', 'Yes, adequate time', 'Somewhat rushed', 'Very rushed'] },
          { id: 'providerRespect', type: 'scale', label: 'How respectful was your provider? (1=Not respectful, 5=Very respectful)', min: 1, max: 5, required: true },
          { id: 'culturalSensitivity', type: 'scale', label: 'How culturally sensitive was your care? (1=Poor, 5=Excellent)', min: 1, max: 5, required: true }
        ]
      },
      {
        id: 'staff-service',
        title: 'Staff and Service Quality',
        fields: [
          { id: 'staffCourtesy', type: 'scale', label: 'How courteous was the office staff? (1=Poor, 5=Excellent)', min: 1, max: 5, required: true },
          { id: 'staffHelpfulness', type: 'scale', label: 'How helpful was the office staff? (1=Poor, 5=Excellent)', min: 1, max: 5, required: true },
          { id: 'phoneService', type: 'scale', label: 'How would you rate phone service? (1=Poor, 5=Excellent)', min: 1, max: 5, required: false },
          { id: 'facilityRating', type: 'scale', label: 'How would you rate the facility? (1=Poor, 5=Excellent)', min: 1, max: 5, required: true },
          { id: 'cleanliness', type: 'scale', label: 'How clean was the facility? (1=Poor, 5=Excellent)', min: 1, max: 5, required: true },
          { id: 'privacy', type: 'radio', label: 'Was your privacy respected?', required: true, options: ['Always', 'Usually', 'Sometimes', 'Never'] }
        ]
      },
      {
        id: 'care-quality',
        title: 'Quality of Care',
        fields: [
          { id: 'overallSatisfaction', type: 'scale', label: 'Overall satisfaction with your visit (1=Very dissatisfied, 5=Very satisfied)', min: 1, max: 5, required: true },
          { id: 'careQuality', type: 'scale', label: 'How would you rate the quality of care? (1=Poor, 5=Excellent)', min: 1, max: 5, required: true },
          { id: 'needsMet', type: 'radio', label: 'Were your healthcare needs met?', required: true, options: ['Completely', 'Mostly', 'Somewhat', 'Not at all'] },
          { id: 'recommendProvider', type: 'radio', label: 'Would you recommend this provider to others?', required: true, options: ['Definitely yes', 'Probably yes', 'Probably no', 'Definitely no'] },
          { id: 'returnForCare', type: 'radio', label: 'Would you return for future care?', required: true, options: ['Definitely yes', 'Probably yes', 'Probably no', 'Definitely no'] }
        ]
      },
      {
        id: 'feedback',
        title: 'Additional Feedback',
        fields: [
          { id: 'improvements', type: 'textarea', label: 'What could we do to improve your experience?', required: false },
          { id: 'positiveComments', type: 'textarea', label: 'What did we do well?', required: false },
          { id: 'additionalComments', type: 'textarea', label: 'Any additional comments or suggestions?', required: false }
        ]
      }
    ]
  }
]