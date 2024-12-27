import styles from "./page.module.css";
import Header from "../../components/Header";
import StudentCourseNavBar from "../../components/StudentCourseNavBar";

const Page = () => {
  const pageTitle = "Course 1";
  /** Set page title here, displayed in Header **/
  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/** Add your content within the main-workspace div */}
        <StudentCourseNavBar />

        <p>
          To Add: move the course views and nav bar into a folder inside student/course. Adjust
          stying for narrower screens. Exams view needs exam list with links to take exam (directed
          to first or second attempt accordingly) or viewing the AI review, if button is inactive
          make it not clickable and set to like 0.5 or 0.25 opacity, whatever looks good.
        </p>
      </div>
    </div>
  );
};

export default Page;
