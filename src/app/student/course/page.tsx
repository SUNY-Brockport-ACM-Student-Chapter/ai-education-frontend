import styles from "./page.module.css";
import Header from "../../components/Nav-Header/Header";
import CourseNavBar from "../../components/Course-Page-Components/CourseNavBar";

const Page = () => {
  const pageTitle = "Introduction to Computing";
  /** Set page title here, displayed in Header **/
  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/** Add your content within the main-workspace div */}
        <CourseNavBar />
      </div>
    </div>
  );
};

export default Page;
