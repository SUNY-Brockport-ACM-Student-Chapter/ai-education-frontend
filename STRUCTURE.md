## Project Structure

- `src/app/`: Main application directory
  - `components/`: Reusable UI components and shared elements
    - `Add-Modify-Course/`: Components for adding or modifying courses
    - `Course-Page-Components/`: Components for displaying course pages
      - `Instructor/`: Instructor-specific course page components
      - `Student/`: Student-specific course page components
    - `Dashboard-Sliders/`: UI elements for displaying exam-related data
    - `Exam-Components/`: Components related to exam-taking
    - `Manage-Users-Page/`: Admin components for managing users
    - `Nav-Header/`: Navigation header components
    - `Popup-Components/`: Reusable popups and modal components
  
  - `instructor/`: Instructor-specific pages
    - `course_man/`: Course management pages (create, modify, manage enrollment)
    - `exam_man/`: Exam management pages (create, modify exams)
    - `submissions/`: Viewing and handling student exam submissions
    - `user_man/`: Managing student and instructor accounts
    - `course/`, `dashboard/`, `settings/`: General instructor views
    - **(Each page contains a corresponding `page.tsx` and `page.module.css` for layout-specific styles.)**

  - `student/`: Student-specific pages
    - `course/`: Student course views
    - `dashboard/`: Student dashboard
    - `exam/`: Student exam-taking views
      - `ai_review/`: AI-powered exam feedback
      - `attempt_1/`, `attempt_2/`: Multiple exam attempts
    - `settings/`: Student settings page
    - **(Each page contains a corresponding `page.tsx` and `page.module.css` for layout-specific styles.)**

  - `utils/`: Utility functions and context
    - `UserContext.tsx`: Manages global user state
    - `utilities.ts`: General helper functions

  - `middleware.ts`: Middleware logic for API authentication and authorization

- `.env.local`: Environment variables

- `.eslintrc.json`: ESLint configuration for linting rules
- `.gitignore`: Specifies intentionally untracked files
- `.prettierignore`: Files ignored by Prettier formatting
- `.prettierrc.json`: Prettier configuration for code formatting
- `next-env.d.ts`: TypeScript environment definitions for Next.js
- `next.config.mjs`: Next.js configuration settings
- `package-lock.json`: Lockfile for npm dependencies
- `package.json`: Project dependencies and scripts
- `README.md`: Documentation for setup instructions
- `STRUCTURE.md`: Documentation for project structure
- `tsconfig.json`: TypeScript configuration settings

