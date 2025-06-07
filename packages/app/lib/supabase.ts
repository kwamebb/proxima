import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Define the Patient type to match your database schema
export type Patient = {
  id: string
  name: string
  age: number | null
  department: string | null
  status: string | null
  last_visit: string | null
  phone: string | null
  condition: string | null
  email: string | null
  address: string | null
  emergency_contact: string | null
  created_at: string
  updated_at: string
}