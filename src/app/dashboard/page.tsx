import styles from './dashboard.module.css'

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <p>Dashboard content. Hopefully the header should say "Dashboard"!</p>
    </div>
  );
}

DashboardPage.pageTitle = "Dashboard";