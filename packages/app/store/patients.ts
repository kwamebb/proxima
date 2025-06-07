import { create } from 'zustand'
import { supabase, Patient } from '../lib/supabase'

interface PatientState {
    patients: Patient[],
    filteredPatients: Patient[],
    searchTerms: string,
    isLoading: boolean,
    error: string | null,
    activeFilters: string[],
    
    // Setters
    setPatients: (patients: Patient[]) => void,
    setFilteredPatients: (patients: Patient[]) => void,
    setSearchTerms: (terms: string) => void,
    setIsLoading: (isLoading: boolean) => void,
    setError: (error: string | null) => void,
    setActiveFilters: (filters: string[]) => void,
    
    // Supabase Actions
    fetchPatients: () => Promise<void>,
    searchPatients: (query?: string, filters?: string[]) => Promise<void>,
    filterPatients: () => void,
    
    // Filter Actions
    addFilter: (filter: string) => void,
    removeFilter: (filter: string) => void,
    clearFilters: () => void,
}

export const usePatientStore = create<PatientState>((set, get) => ({
    patients: [],
    filteredPatients: [],
    searchTerms: '',
    isLoading: false,
    error: null,
    activeFilters: [],
    
    // Simple setters
    setPatients: (patients) => set({ patients }),
    setSearchTerms: (searchTerms) => set({ searchTerms }),
    setFilteredPatients: (filteredPatients) => set({ filteredPatients }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    setActiveFilters: (activeFilters) => set({ activeFilters }),
    
    // Fetch all patients from Supabase
    fetchPatients: async () => {
        set({ isLoading: true, error: null })
        
        try {
            const { data, error } = await supabase
                .from('patients')
                .select('*')
                .order('name', { ascending: true })
            
            if (error) {
                set({ error: error.message, isLoading: false })
            } else {
                set({ patients: data || [], isLoading: false })
                get().filterPatients()
            }
        } catch (err) {
            set({ error: 'Network error occurred', isLoading: false })
        }
    },
    
    // Search patients with query and filters
    searchPatients: async (query?: string, filters?: string[]) => {
        set({ isLoading: true, error: null })
        
        try {
            let queryBuilder = supabase
                .from('patients')
                .select('*')
            
            // Add text search if query provided
            if (query && query.trim()) {
                queryBuilder = queryBuilder.or(
                    `name.ilike.%${query}%,condition.ilike.%${query}%,department.ilike.%${query}%,email.ilike.%${query}%`
                )
            }
            
            // Add filters if provided
            if (filters && filters.length > 0) {
                // Status filters
                const statusFilters = filters.filter(f => 
                    ['active', 'follow-up', 'critical', 'discharged'].includes(f.toLowerCase())
                )
                if (statusFilters.length > 0) {
                    queryBuilder = queryBuilder.in('status', statusFilters.map(f => 
                        f === 'follow-up' ? 'Follow-up' : 
                        f.charAt(0).toUpperCase() + f.slice(1).toLowerCase()
                    ))
                }
                
                // Department filters
                const deptFilters = filters.filter(f => 
                    ['cardiology', 'dermatology', 'orthopedics', 'pediatrics', 'neurology'].includes(f.toLowerCase())
                )
                if (deptFilters.length > 0) {
                    queryBuilder = queryBuilder.in('department', deptFilters.map(f => 
                        f.charAt(0).toUpperCase() + f.slice(1).toLowerCase()
                    ))
                }
            }
            
            const { data, error } = await queryBuilder.order('name', { ascending: true })
            
            if (error) {
                set({ error: error.message, isLoading: false })
            } else {
                set({ patients: data || [], isLoading: false })
                get().filterPatients()
            }
        } catch (err) {
            set({ error: 'Search error occurred', isLoading: false })
        }
    },
    
    // Filter patients locally (for real-time filtering)
    filterPatients: () => {
        const { patients, searchTerms, activeFilters } = get()
        
        let filtered = patients
        
        // Apply search query
        if (searchTerms.trim()) {
            const query = searchTerms.toLowerCase()
            filtered = filtered.filter(patient => 
                patient.name?.toLowerCase().includes(query) ||
                patient.condition?.toLowerCase().includes(query) ||
                patient.department?.toLowerCase().includes(query) ||
                patient.email?.toLowerCase().includes(query)
            )
        }
        
        // Apply filters
        if (activeFilters.length > 0) {
            filtered = filtered.filter(patient => {
                return activeFilters.some(filter => {
                    switch (filter.toLowerCase()) {
                        case 'active':
                            return patient.status?.toLowerCase() === 'active'
                        case 'follow-up':
                            return patient.status?.toLowerCase() === 'follow-up'
                        case 'critical':
                            return patient.status?.toLowerCase() === 'critical'
                        case 'discharged':
                            return patient.status?.toLowerCase() === 'discharged'
                        case 'cardiology':
                        case 'dermatology':
                        case 'orthopedics':
                        case 'pediatrics':
                        case 'neurology':
                            return patient.department?.toLowerCase() === filter.toLowerCase()
                        case 'recent':
                            // Patients visited in last 7 days
                            if (!patient.last_visit) return false
                            const lastVisit = new Date(patient.last_visit)
                            const sevenDaysAgo = new Date()
                            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
                            return lastVisit > sevenDaysAgo
                        case 'overdue':
                            // Patients who haven't visited in 30+ days
                            if (!patient.last_visit) return true
                            const visit = new Date(patient.last_visit)
                            const thirtyDaysAgo = new Date()
                            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
                            return visit < thirtyDaysAgo
                        default:
                            return false
                    }
                })
            })
        }
        
        set({ filteredPatients: filtered })
    },
    
    // Filter management
    addFilter: (filter) => {
        const { activeFilters } = get()
        if (!activeFilters.includes(filter)) {
            const newFilters = [...activeFilters, filter]
            set({ activeFilters: newFilters })
            get().filterPatients()
        }
    },
    
    removeFilter: (filter) => {
        const { activeFilters } = get()
        const newFilters = activeFilters.filter(f => f !== filter)
        set({ activeFilters: newFilters })
        get().filterPatients()
    },
    
    clearFilters: () => {
        set({ activeFilters: [] })
        get().filterPatients()
    },
}))





