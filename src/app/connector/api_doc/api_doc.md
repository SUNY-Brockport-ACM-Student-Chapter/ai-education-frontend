# Frontend API Services Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [API Configuration](#api-configuration)
3. [API Services](#api-services)
   - [Teacher Service](#teacher-service)
   - [Student Service](#student-service)
   - [Course Service](#course-service)
   - [Exam Service](#exam-service)
   - [Question Service](#question-service)
   - [Answer Service](#answer-service)
   - [Student Answer Service](#student-answer-service)
   - [Enrollment Service](#enrollment-service)
   - [AI Assessment Service](#ai-assessment-service)
4. [Error Handling](#error-handling)

## Introduction

This documentation provides a comprehensive guide on how to use the API services in the frontend environment. These services are designed to communicate with the backend REST API and provide data to your React components.

## API Configuration

All API requests are configured using Axios. The base configuration is defined in `apiConfig.ts`:

```typescript
import api from '../apiConfig';

// Example usage
const response = await api.get('/endpoint');
```

The API is configured with:
- Base URL: `http://localhost:5000`
- Default timeout: 10000ms
- Default headers: `Content-Type: application/json`

## API Services

### Teacher Service

Import:
```typescript
import { teacherService } from '@/app/services/api/teacher';
```

#### Methods:

##### Get Teacher by ID
```typescript
const teacherData = await teacherService.getTeacherById(teacherId);
```
- **Parameters**: `teacherId` (number)
- **Returns**: TeacherResponse
- **Description**: Retrieves teacher information by ID

### Student Service

Import:
```typescript
import { studentService } from '@/app/services/api/student';
```

#### Methods:

##### Search for Students
```typescript
const students = await studentService.searchForStudents(searchQuery);
```
- **Parameters**: `searchQuery` (string)
- **Returns**: StudentResponse
- **Description**: Searches for students based on query

##### Get Students for Course
```typescript
const courseStudents = await studentService.getStudentsForCourse(courseId);
```
- **Parameters**: `courseId` (number)
- **Returns**: StudentResponse
- **Description**: Retrieves all students enrolled in a specific course

### Course Service

Import:
```typescript
import { courseService } from '@/app/services/api/course';
```

#### Methods:

##### Get Active Courses for Teacher
```typescript
const teacherCourses = await courseService.getActiveCoursesForTeacher(teacherId);
```
- **Parameters**: `teacherId` (number)
- **Returns**: CourseResponse
- **Description**: Retrieves all active courses for a specific teacher

##### Create Course
```typescript
const courseData = {
  course_name: "Introduction to Programming",
  course_code: "CS101",
  course_description: "A beginner course on programming",
  capacity: 30,
  start_date: "2024-01-01 00:00:00",
  end_date: "2024-05-31 00:00:00"
};

const newCourse = await courseService.createCourse(teacherId, courseData);
```
- **Parameters**: 
  - `teacherId` (number)
  - `courseData` (CourseCreate)
- **Returns**: CourseResponse
- **Description**: Creates a new course for a teacher

##### Update Course
```typescript
const updateData = {
  course_description: "Updated course description",
  capacity: 40
};

const updatedCourse = await courseService.updateCourse(courseId, updateData);
```
- **Parameters**: 
  - `courseId` (number)
  - `courseData` (Partial<CourseCreate>)
- **Returns**: CourseResponse
- **Description**: Updates an existing course

##### Change Course Status
```typescript
const updatedCourse = await courseService.changeCourseStatus(courseId, true);
```
- **Parameters**: 
  - `courseId` (number)
  - `isActive` (boolean)
- **Returns**: CourseResponse
- **Description**: Activates or deactivates a course

##### Get Active Courses for Student
```typescript
const studentCourses = await courseService.getActiveCoursesForStudent(studentId);
```
- **Parameters**: `studentId` (number)
- **Returns**: CourseResponse
- **Description**: Retrieves all active courses for a specific student

### Exam Service

Import:
```typescript
import { examService } from '@/app/services/api/exam';
```

#### Methods:

##### Get Exams for Teacher
```typescript
const teacherExams = await examService.getExamsForTeacher(teacherId);
```
- **Parameters**: `teacherId` (number)
- **Returns**: ExamResponse
- **Description**: Retrieves all exams created by a specific teacher

##### Create Exam
```typescript
const examData = {
  exam_name: "Midterm Exam",
  exam_description: "Covers chapters 1-5",
  max_attempt: 2,
  start_date: "2024-03-15 00:00:00",
  end_date: "2024-03-15 23:59:59"
};

const newExam = await examService.createExam(courseId, examData);
```
- **Parameters**: 
  - `courseId` (number)
  - `examData` (ExamCreate)
- **Returns**: ExamResponse
- **Description**: Creates a new exam for a course

##### Get Teacher Exams for Course
```typescript
const courseExams = await examService.getTeacherExamsForCourse(courseId);
```
- **Parameters**: `courseId` (number)
- **Returns**: ExamResponse
- **Description**: Retrieves all exams for a specific course (teacher view)

##### Get Student Exam Submission Stage
```typescript
const submissionStage = await examService.getStudentExamSubmissionStage(examId, studentId);
```
- **Parameters**: 
  - `examId` (number)
  - `studentId` (number)
- **Returns**: { stage: number }
- **Description**: Retrieves the submission stage for a student in an exam

##### Get Exams for Student
```typescript
const studentExams = await examService.getExamsForStudent(studentId);
```
- **Parameters**: `studentId` (number)
- **Returns**: ExamResponse
- **Description**: Retrieves all exams available to a specific student

##### Get Student Exams for Course
```typescript
const courseExams = await examService.getStudentExamsForCourse(courseId);
```
- **Parameters**: `courseId` (number)
- **Returns**: ExamResponse
- **Description**: Retrieves all exams for a specific course (student view)

### Question Service

Import:
```typescript
import { questionService } from '@/app/services/api/question';
```

#### Methods:

##### Create Question
```typescript
const questionData = {
  question_text: "What is a variable in programming?"
};

const newQuestion = await questionService.createQuestion(examId, questionData);
```
- **Parameters**: 
  - `examId` (number)
  - `questionData` (object)
- **Returns**: QuestionResponse
- **Description**: Creates a new question for an exam

##### Get Questions for Exam
```typescript
const examQuestions = await questionService.getQuestionsForExam(examId);
```
- **Parameters**: `examId` (number)
- **Returns**: QuestionResponse
- **Description**: Retrieves all questions for a specific exam

### Answer Service

Import:
```typescript
import { answerService } from '@/app/services/api/answer';
```

#### Methods:

##### Create Answer
```typescript
const answerData = {
  answer_text: "A variable is a storage location paired with an associated symbolic name."
};

const newAnswer = await answerService.createAnswer(questionId, answerData);
```
- **Parameters**: 
  - `questionId` (number)
  - `answerData` (object)
- **Returns**: AnswerResponse
- **Description**: Creates a new answer for a question

### Student Answer Service

Import:
```typescript
import { studentAnswerService } from '@/app/services/api/student-answer';
```

#### Methods:

##### Get Student Answers
```typescript
const studentAnswers = await studentAnswerService.getStudentAnswers(studentId, questionId);
```
- **Parameters**: 
  - `studentId` (number)
  - `questionId` (number)
- **Returns**: StudentAnswerResponse
- **Description**: Retrieves all answers submitted by a student for a specific question

##### Create Student Answer
```typescript
const answerData = {
  answer_text: "My answer to the question",
  answer_grade: "N",
  answer_stage: 1
};

const newStudentAnswer = await studentAnswerService.createStudentAnswer(studentId, questionId, answerData);
```
- **Parameters**: 
  - `studentId` (number)
  - `questionId` (number)
  - `answerData` (object)
- **Returns**: StudentAnswerResponse
- **Description**: Creates a new student answer for a question

### Enrollment Service

Import:
```typescript
import { enrollmentService } from '@/app/services/api/enrollment';
```

#### Methods:

##### Change Enrollment Status
```typescript
const statusData = {
  status: "cancelled" // Options: "enrolled", "cancelled", "pending"
};

const updatedEnrollment = await enrollmentService.changeEnrollmentStatus(studentId, courseId, statusData);
```
- **Parameters**: 
  - `studentId` (number)
  - `courseId` (number)
  - `statusData` (object)
- **Returns**: EnrollmentResponse
- **Description**: Changes the enrollment status for a student in a course

##### Create Enrollment
```typescript
const newEnrollment = await enrollmentService.createEnrollment(studentId, courseId);
```
- **Parameters**: 
  - `studentId` (number)
  - `courseId` (number)
- **Returns**: EnrollmentResponse
- **Description**: Enrolls a student in a course

### AI Assessment Service

Import:
```typescript
import { aiAssessmentService } from '@/app/services/api/ai_assessment';
```

#### Methods:

##### Get AI Assessment for Student Answer
```typescript
const assessment = await aiAssessmentService.getAIAssessment(studentAnswerId);
```
- **Parameters**: `studentAnswerId` (number)
- **Returns**: AIAssessmentResponse
- **Description**: Retrieves the AI assessment for a student's answer

## Error Handling

All API services include built-in error handling. You can use try/catch blocks to handle errors:

```typescript
try {
  const data = await courseService.getActiveCoursesForTeacher(teacherId);
  // Handle successful response
} catch (error) {
  // Handle error
  console.error('API Error:', error.message);
  // You can also check for specific error types
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error('Error status:', error.response.status);
    console.error('Error data:', error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('No response received');
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error message:', error.message);
  }
}
```
