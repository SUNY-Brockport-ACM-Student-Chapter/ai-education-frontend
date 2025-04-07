import { Course } from ".";

export type TeacherRole = "admin" | "teacher";

export interface Teacher {
  teacher_id: number;
  user_name: string;
  first_name: string;
  last_name: string | null;
  email: string;
  clerk_user_id: string;
  role: TeacherRole;
  is_active: boolean;
  last_login: string; // ISO date string
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  courses?: Course[];
}

// For creating/updating teachers
export interface TeacherCreate {
  user_name: string;
  first_name: string;
  last_name?: string;
  email: string;
  clerk_user_id: string;
  role?: TeacherRole;
}

// For API responses
export interface TeacherResponse {
  success: boolean;
  message?: string;
  data?: Teacher;
}
