import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://byqfoitydtjyddsythmi.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5cWZvaXR5ZHRqeWRkc3l0aG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0MzM2MDAsImV4cCI6MjA4ODAwOTYwMH0.cTrQqIx1JwLblbU36_RGI1V2-Jmy1Vzv10x5IvMLjso';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Journey stage constants
export const JOURNEY_STAGES = [
  'New Inquiry',
  'Consultation Scheduled',
  'Quote Sent',
  'Booking Confirmed',
  'Travel Arranged',
  'Treatment Complete',
  'Follow-up',
] as const;

export type JourneyStage = typeof JOURNEY_STAGES[number];

export interface Lead {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  email: string;
  phone: string | null;
  treatment_interest: string | null;
  message: string | null;
  budget_range: string | null;
  preferred_dates: string | null;
  medical_history: string | null;
  passport_country: string | null;
  status: JourneyStage;
  source_form: string;
  assigned_to: string | null;
  notes: Array<{ text: string; author: string; date: string }>;
}

export interface JourneyHistory {
  id: string;
  lead_id: string;
  from_stage: string | null;
  to_stage: string;
  changed_by: string | null;
  changed_at: string;
  note: string | null;
}

// Helper to submit a lead from any form
// Note: Journey history is auto-created via database trigger
export async function submitLead(data: {
  name: string;
  email: string;
  phone?: string;
  treatment_interest?: string;
  message?: string;
  budget_range?: string;
  preferred_dates?: string;
  medical_history?: string;
  passport_country?: string;
  source_form: string;
}) {
  const { error } = await supabase
    .from('leads')
    .insert([{
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      treatment_interest: data.treatment_interest || null,
      message: data.message || null,
      budget_range: data.budget_range || null,
      preferred_dates: data.preferred_dates || null,
      medical_history: data.medical_history || null,
      passport_country: data.passport_country || null,
      source_form: data.source_form,
      status: 'New Inquiry',
      notes: [],
    }]);

  if (error) throw error;
}
