import { CommunityTemplate } from './types'

export const communityTemplates: CommunityTemplate[] = [
  {
    id: 'community-pain-management',
    name: 'Advanced Pain Management Assessment',
    description: 'Comprehensive pain evaluation with functional impact scoring developed for chronic pain patients',
    specialty: 'Pain Management',
    category: 'assessment',
    estimatedTime: '12-15 minutes',
    tags: ['pain', 'chronic', 'functional assessment', 'quality of life'],
    author: {
      name: 'Dr. Sarah Mitchell',
      title: 'Pain Management Specialist',
      hospital: 'Cleveland Clinic',
      verified: true
    },
    stats: {
      downloads: 1247,
      rating: 4.8,
      reviewCount: 89,
      datePublished: '2024-05-15'
    },
    permissions: {
      requireApproval: false,
      allowModifications: true,
      showHospitalAffiliation: true,
      notifyOnDownload: false
    },
    status: 'published',
    sections: [
      {
        id: 'pain-history',
        title: 'Pain History',
        fields: [
          { id: 'pain-onset', type: 'date', label: 'When did your pain begin?', required: true },
          { id: 'pain-cause', type: 'textarea', label: 'What caused your pain?', required: true },
          { id: 'pain-progression', type: 'radio', label: 'Has your pain gotten worse over time?', required: true, options: ['Much worse', 'Somewhat worse', 'About the same', 'Better'] }
        ]
      }
    ]
  },
  {
    id: 'community-telehealth-intake',
    name: 'Telehealth Pre-Visit Screening',
    description: 'Streamlined intake form optimized for virtual consultations with tech setup verification',
    specialty: 'Telemedicine',
    category: 'intake',
    estimatedTime: '8-10 minutes',
    tags: ['telehealth', 'virtual visit', 'technology', 'remote care'],
    author: {
      name: 'Dr. Michael Chen',
      title: 'Family Medicine Physician',
      hospital: 'Kaiser Permanente',
      verified: true
    },
    stats: {
      downloads: 892,
      rating: 4.6,
      reviewCount: 67,
      datePublished: '2024-04-22'
    },
    permissions: {
      requireApproval: true,
      allowModifications: false,
      showHospitalAffiliation: true,
      notifyOnDownload: true
    },
    status: 'published',
    sections: [
      {
        id: 'tech-setup',
        title: 'Technology Setup',
        fields: [
          { id: 'device-type', type: 'select', label: 'What device will you use for the visit?', required: true, options: ['Computer', 'Tablet', 'Smartphone'] },
          { id: 'internet-quality', type: 'radio', label: 'How is your internet connection?', required: true, options: ['Excellent', 'Good', 'Fair', 'Poor'] }
        ]
      }
    ]
  },
  {
    id: 'community-geriatric-assessment',
    name: 'Comprehensive Geriatric Assessment',
    description: 'Multi-domain assessment for elderly patients including cognitive, functional, and social evaluations',
    specialty: 'Geriatrics',
    category: 'assessment',
    estimatedTime: '20-25 minutes',
    tags: ['geriatrics', 'elderly', 'cognitive', 'functional', 'comprehensive'],
    author: {
      name: 'Dr. Emily Rodriguez',
      title: 'Geriatrician',
      hospital: 'Johns Hopkins Hospital',
      verified: true
    },
    stats: {
      downloads: 654,
      rating: 4.9,
      reviewCount: 43,
      datePublished: '2024-03-10'
    },
    permissions: {
      requireApproval: false,
      allowModifications: true,
      showHospitalAffiliation: true,
      notifyOnDownload: false
    },
    status: 'published',
    sections: [
      {
        id: 'cognitive-screen',
        title: 'Cognitive Screening',
        fields: [
          { id: 'memory-concerns', type: 'radio', label: 'Do you have concerns about your memory?', required: true, options: ['No concerns', 'Mild concerns', 'Moderate concerns', 'Significant concerns'] },
          { id: 'daily-tasks', type: 'multiselect', label: 'Which daily tasks have become difficult?', required: false, options: ['Cooking', 'Managing finances', 'Driving', 'Taking medications', 'Shopping', 'None'] }
        ]
      }
    ]
  },
  {
    id: 'community-sports-medicine',
    name: 'Athletic Injury Return-to-Play Assessment',
    description: 'Specialized evaluation for athletes returning to competition after injury',
    specialty: 'Sports Medicine',
    category: 'assessment',
    estimatedTime: '15-18 minutes',
    tags: ['sports medicine', 'athletics', 'return to play', 'injury recovery'],
    author: {
      name: 'Dr. James Thompson',
      title: 'Sports Medicine Physician',
      hospital: 'Mayo Clinic',
      verified: true
    },
    stats: {
      downloads: 1089,
      rating: 4.7,
      reviewCount: 78,
      datePublished: '2024-04-01'
    },
    permissions: {
      requireApproval: false,
      allowModifications: false,
      showHospitalAffiliation: true,
      notifyOnDownload: true
    },
    status: 'published',
    sections: [
      {
        id: 'sport-specific',
        title: 'Sport-Specific Assessment',
        fields: [
          { id: 'sport', type: 'text', label: 'Primary sport', required: true },
          { id: 'position', type: 'text', label: 'Position/Role', required: false },
          { id: 'competition-level', type: 'select', label: 'Competition level', required: true, options: ['Recreational', 'High School', 'College', 'Professional'] }
        ]
      }
    ]
  },
  {
    id: 'community-wellness-check',
    name: 'Holistic Wellness Assessment',
    description: 'Comprehensive wellness evaluation covering physical, mental, and lifestyle factors',
    specialty: 'Preventive Medicine',
    category: 'screening',
    estimatedTime: '12-15 minutes',
    tags: ['wellness', 'prevention', 'lifestyle', 'holistic'],
    author: {
      name: 'Dr. Lisa Wang',
      title: 'Preventive Medicine Specialist',
      hospital: 'Stanford Health Care',
      verified: true
    },
    stats: {
      downloads: 743,
      rating: 4.5,
      reviewCount: 92,
      datePublished: '2024-05-28'
    },
    permissions: {
      requireApproval: false,
      allowModifications: true,
      showHospitalAffiliation: false,
      notifyOnDownload: false
    },
    status: 'published',
    sections: [
      {
        id: 'lifestyle-factors',
        title: 'Lifestyle Assessment',
        fields: [
          { id: 'stress-level', type: 'scale', label: 'Current stress level', min: 1, max: 10, required: true },
          { id: 'sleep-hours', type: 'number', label: 'Average hours of sleep per night', required: true },
          { id: 'wellness-goals', type: 'textarea', label: 'What are your wellness goals?', required: false }
        ]
      }
    ]
  },
  {
    id: 'community-urgent-care',
    name: 'Urgent Care Triage Form',
    description: 'Quick triage assessment for urgent care visits with symptom severity scoring',
    specialty: 'Emergency Medicine',
    category: 'assessment',
    estimatedTime: '5-8 minutes',
    tags: ['urgent care', 'triage', 'emergency', 'rapid assessment'],
    author: {
      name: 'Dr. Robert Kim',
      title: 'Emergency Medicine Physician',
      hospital: 'NewYork-Presbyterian',
      verified: true
    },
    stats: {
      downloads: 1156,
      rating: 4.8,
      reviewCount: 134,
      datePublished: '2024-06-02'
    },
    permissions: {
      requireApproval: true,
      allowModifications: false,
      showHospitalAffiliation: true,
      notifyOnDownload: true
    },
    status: 'published',
    sections: [
      {
        id: 'chief-complaint',
        title: 'Chief Complaint',
        fields: [
          { id: 'primary-concern', type: 'textarea', label: 'What brings you in today?', required: true },
          { id: 'severity', type: 'scale', label: 'How severe is your concern? (1-10)', min: 1, max: 10, required: true },
          { id: 'duration', type: 'select', label: 'How long have you had this problem?', required: true, options: ['Less than 1 hour', '1-6 hours', '6-24 hours', '1-3 days', 'More than 3 days'] }
        ]
      }
    ]
  }
]