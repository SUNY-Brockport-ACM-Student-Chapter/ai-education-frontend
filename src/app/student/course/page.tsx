import styles from "./page.module.css";
import Header from '../../components/Header';
import StudentCourseNavBar from '../../components/StudentCourseNavBar';

const Page = () => {
  const pageTitle = "Course 1";
  /** Set page title here, displayed in Header **/
  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/** Add your content within the main-workspace div */}
        <StudentCourseNavBar/>
      </div>
    </div>
  );
};

export default Page;