import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <p>Landing page</p>
    </div>
  );
}

Page.pageTitle = "Default Page";