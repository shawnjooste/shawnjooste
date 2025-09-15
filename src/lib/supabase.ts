import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      newsletters: {
        Row: {
          id: string
          title: string
          content: string
          status: 'draft' | 'published' | 'scheduled'
          published_at: string | null
          created_at: string
          updated_at: string
          author_id: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          status?: 'draft' | 'published' | 'scheduled'
          published_at?: string | null
          created_at?: string
          updated_at?: string
          author_id: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          status?: 'draft' | 'published' | 'scheduled'
          published_at?: string | null
          created_at?: string
          updated_at?: string
          author_id?: string
        }
      }
      subscribers: {
        Row: {
          id: string
          email: string
          name: string | null
          status: 'active' | 'unsubscribed' | 'bounced'
          subscribed_at: string
          unsubscribed_at: string | null
        }
        Insert: {
          id?: string
          email: string
          name?: string | null
          status?: 'active' | 'unsubscribed' | 'bounced'
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          status?: 'active' | 'unsubscribed' | 'bounced'
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string
          price: number
          status: 'draft' | 'published' | 'archived'
          created_at: string
          updated_at: string
          instructor_id: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          price: number
          status?: 'draft' | 'published' | 'archived'
          created_at?: string
          updated_at?: string
          instructor_id: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          price?: number
          status?: 'draft' | 'published' | 'archived'
          created_at?: string
          updated_at?: string
          instructor_id?: string
        }
      }
      community_posts: {
        Row: {
          id: string
          title: string
          content: string
          category: string
          author_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          category: string
          author_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          category?: string
          author_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      consulting_sessions: {
        Row: {
          id: string
          client_name: string
          client_email: string
          session_type: '1-on-1' | 'group' | 'video'
          scheduled_at: string
          duration_minutes: number
          status: 'scheduled' | 'completed' | 'cancelled'
          rate: number
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_name: string
          client_email: string
          session_type: '1-on-1' | 'group' | 'video'
          scheduled_at: string
          duration_minutes: number
          status?: 'scheduled' | 'completed' | 'cancelled'
          rate: number
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_name?: string
          client_email?: string
          session_type?: '1-on-1' | 'group' | 'video'
          scheduled_at?: string
          duration_minutes?: number
          status?: 'scheduled' | 'completed' | 'cancelled'
          rate?: number
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      contacts: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          company: string | null
          title: string | null
          status: 'lead' | 'prospect' | 'customer'
          source: string
          tags: string[]
          value: number
          last_contact: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          title?: string | null
          status?: 'lead' | 'prospect' | 'customer'
          source: string
          tags?: string[]
          value?: number
          last_contact?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          title?: string | null
          status?: 'lead' | 'prospect' | 'customer'
          source?: string
          tags?: string[]
          value?: number
          last_contact?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
