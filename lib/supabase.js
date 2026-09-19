// Supabase client foundation
// Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel environment variables before activation.

export const supabaseConfig={
 url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
 anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
};
