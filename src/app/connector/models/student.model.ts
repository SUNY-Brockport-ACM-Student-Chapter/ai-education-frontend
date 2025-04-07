import { StudentAnswer, Enrollment } from ".";

export interface Student {
  student_id: number;
  clerk_user_id: string;
  user_name: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  is_active: boolean;
  last_login: string; // ISO date string
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  answers?: StudentAnswer[];
  enrollment?: Enrollment[];
}

// For creating/updating students
export interface StudentCreate {
  clerk_user_id: string;
  user_name: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

// For API responses
export interface StudentResponse {
  success: boolean;
  message?: string;
  data?: Student;
}
