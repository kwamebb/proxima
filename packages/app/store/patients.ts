import { create } from 'zustand'
import { Patient } from '@/types/patient'
interface PatientState {
    patients:Patient[],
    filteredPatients:Patient[],
    searchTerms: string,
    isLoading: boolean,
    error: string | null,
    setPatients: (patients: Patient[]) => void,
    setFilteredPatients: (patients:Patient[]) => void,
    setSearchTerms: (terms:string) => void,
    setIsLoading: (isLoading:boolean) => void,
    setError: (error:string | null) => void,
}
    
