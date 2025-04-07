import aiAssessmentConnector from '../api/ai_assessment';   
import answerConnector from '../api/answer';
import courseConnector from '../api/course';
import enrollmentConnector from '../api/enrollment';
import examConnector from '../api/exam';
import questionConnector from '../api/question';
import studentAnswerConnector from '../api/student-answer';
import studentConnector from '../api/student';
import teacherConnector from '../api/teacher';
import { EnrollmentStatus } from '../models/enrollment.model';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function test() {
    console.log("Choose which test to run");
    console.log("1. AiAssessmentConnector");
    console.log("2. AnswerConnector");
    console.log("3. CourseConnector");
    console.log("4. EnrollmentConnector");
    console.log("5. ExamConnector");
    console.log("6. QuestionConnector");
    console.log("7. StudentAnswerConnector");
    console.log("8. StudentConnector");
    console.log("9. TeacherConnector");

    while (true) {
        const choice = await new Promise<string>(resolve => rl.question("Enter the number of the test to run: ", resolve));
    switch (choice) {
        case "1":
            await testAiAssessmentConnector();
            break;
        case "2":
            await testAnswerConnector();
            break;
        case "3":
            await testCourseConnector();
            break;
        case "4":
            await testEnrollmentConnector();
            break;  
        case "5":
            await testExamConnector();
            break;
        case "6":
            await testQuestionConnector();
            break;
        case "7":
            await testStudentAnswerConnector();
            break;
        case "8":
            await testStudentConnector();
            break;
        case "9":
            await testTeacherConnector();
            break;
        default:
                console.log("Invalid choice");
                break;
        }
    }
}

async function testAiAssessmentConnector() {
    console.log("testing ai assessment connector");
    console.log("testing get ai assessment for student answer");
    const aiAssessmentData = await aiAssessmentConnector.getAiAssessmentForStudentAnswer(1);
    console.log(aiAssessmentData);
}

async function testAnswerConnector() {
    console.log("testing answer connector");
    console.log("testing create answer");
    const answerData = await answerConnector.createAnswer(1, {
        answer_text: 'This is a test answer'
    });
    console.log(answerData);
}

async function testCourseConnector() {
    console.log("testing course connector");
    console.log("testing get active courses for teacher");
    const activeCourses = await courseConnector.getActiveCoursesForTeacher(1);
    console.log(activeCourses);

    console.log("testing create course");
    const newCourse = await courseConnector.createCourse(1, {
        course_name: "intro to relations",
        course_code: "1",
        course_description: "Interpersonal relations",
        capacity: 13,
        start_date: "2024-11-22 00:00:00",   // ISO date string
        end_date: "2024-11-22 00:00:00"     // ISO date string
    });
    console.log(newCourse);

    console.log("testing change course status");
    const statusChange = await courseConnector.changeCourseStatus(1, true);
    console.log(statusChange);

    console.log("testing update course");

    const updatedCourse = await courseConnector.updateCourse(1, {
        course_code: "4",
        course_description: "A beginner course on js"   
    });
    console.log(updatedCourse);


    console.log("testing get active courses for student");
    const studentCourses = await courseConnector.getActiveCoursesForStudent(1);
    console.log(studentCourses);
}

async function testEnrollmentConnector() {
    console.log("testing enrollment connector");
    console.log("testing create enrollment");
    const enrollmentData = await enrollmentConnector.createEnrollment(1, 1);
    console.log(enrollmentData);


    // special enrollment status ENUM case
    console.log("testing change enrollment status");
    const statusChange = await enrollmentConnector.changeEnrollmentStatus(1, 1, EnrollmentStatus.ENROLLED);
    console.log(statusChange);
}

async function testExamConnector() {
    console.log("testing exam connector");
    console.log("testing get exams for teacher");
    const exams = await examConnector.getExamsForTeacher(1);
    console.log(exams);

    console.log("testing get exams for course");
    const examsForCourse = await examConnector.getExamsForCourse(1);
    console.log(examsForCourse);

    console.log("testing create exam");
    const newExam = await examConnector.createExamForCourse(1, {
        exam_name: "intro to relations",
        exam_description: "Interpersonal relations",
        max_attempt: 1,
        start_date: "2024-11-22 00:00:00",   // ISO date string
        end_date: "2024-11-22 00:00:00"     // ISO date string
    }); 
    console.log(newExam);

    console.log("testing get student exam submission stage");
    const studentExamsSubmissionStage = await examConnector.getStudentExamSubmissionStage(1, 1);
    console.log(studentExamsSubmissionStage);

    console.log("testing get exams for student");
    const studentExams = await examConnector.getExamsForStudent(1);
    console.log(studentExams);    
}

async function testQuestionConnector() {
    console.log("testing question connector");
    console.log("testing create question");
    const questionData = await questionConnector.createQuestion(1, {
        question_text: "How long is ryans nose?"
    });
    console.log(questionData); 

    console.log("testing get questions for exam");
    const questionsForExam = await questionConnector.getQuestionsForExam(1);
    console.log(questionsForExam);
} 

async function testStudentAnswerConnector() {
    console.log("testing student answer connector");
    console.log("testing create student answer");
    const studentAnswerData = await studentAnswerConnector.createStudentAnswer(1, 1, {
        answer_text: "Ryan's nose is 10 inches long",
        answer_grade: "A",
        answer_stage: 1
    });
    console.log(studentAnswerData); 

    console.log("testing get student answers for student");
    const studentAnswers = await studentAnswerConnector.getStudentAnswersForStudent(1, 1);
    console.log(studentAnswers);   
}

async function testStudentConnector() {
    console.log("testing student connector");
    console.log("testing search for students");
    const students = await studentConnector.searchForStudents(
        {
            first_name: "Ryan"
        }
    );
    console.log(students);

    console.log("testing get students for course");
    const studentsForCourse = await studentConnector.getStudentsForCourse(1);
    console.log(studentsForCourse);
}

async function testTeacherConnector() {
    console.log("testing teacher connector");
    console.log("testing get teacher by id");
    const teacherData = await teacherConnector.getTeacherById(1);
    console.log(teacherData);
}

test();