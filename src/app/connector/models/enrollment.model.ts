import { Student, Course } from ".";

export type EnrollmentStatus = "enrolled" | "cancelled" | "pending";

export interface Enrollment {
  enrollment_id: number;
  student_id: number;
  course_id: number;
  status: EnrollmentStatus;
  enrollment_date: string; // ISO date string
  student?: Student;
  course?: Course;
}

// For creating/updating enrollments
export interface EnrollmentCreate {
  student_id: number;
  course_id: number;
  status?: EnrollmentStatus;
}

// For API responses
export interface EnrollmentResponse {
  success: boolean;
  message?: string;
  data?: Enrollment;
}

export const EnrollmentStatus = {
  ENROLLED: "enrolled",
  CANCELLED: "cancelled",
  PENDING: "pending",
} as const;
