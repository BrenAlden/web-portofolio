import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xgmwysekxkiodghvdcru.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnbXd5c2VreGtpb2RnaHZkY3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5MDc1MTQsImV4cCI6MjA3MDQ4MzUxNH0.x4ivh216lGtlVIxhMQ5nBBDptPkMEqUyoE6ZnVWoqwc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);