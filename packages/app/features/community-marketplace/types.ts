import { FormTemplate } from '../form-templates'

export interface CommunityTemplate extends FormTemplate {
  author: {
    name: string
    title: string
    hospital: string
    verified: boolean
  }
  stats: {
    downloads: number
    rating: number
    reviewCount: number
    datePublished: string
  }
  permissions: {
    requireApproval: boolean
    allowModifications: boolean
    showHospitalAffiliation: boolean
    notifyOnDownload: boolean
  }
  status: 'published' | 'pending_approval' | 'draft'
}