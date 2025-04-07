import { Teacher, Enrollment, Exam } from ".";

export interface Course {
  course_id: number;
  course_name: string;
  course_code: string;
  course_description: string | null;
  capacity: number | null;
  teacher_id: number;
  is_active: boolean;
  start_date: string; // ISO date string
  end_date: string; // ISO date string
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  teacher?: Teacher;
  enrollment?: Enrollment[];
  exams?: Exam[];
}

// For creating/updating courses
export interface CourseCreate {
  course_name: string;
  course_code: string;
  course_description?: string;
  capacity?: number;
  start_date: string; // ISO date string
  end_date: string; // ISO date string
}

// For API responses
export interface CourseResponse {
  success: boolean;
  message?: string;
  data?: Course;
}
