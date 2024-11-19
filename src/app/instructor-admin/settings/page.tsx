import React from 'react';
import styles from "./page.module.css";
import Header from '../../components/Header';

const Page: React.FC = () => {
  const pageTitle = "Settings";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <div className={styles.settingsBody}>
          <div className={styles.settingsSection}>
            <h3>General</h3>
          </div>

          <div className={styles.settingsGeneral}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value="uname12"
                readOnly
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value="uname12@brockport.edu"
                readOnly
              />
            </div>
          </div>

          <div className={styles.settingsSection}>
            <h3>Authentication</h3>
          </div>

          <div className={styles.settingsAuthentication}>
            <div className={styles.currentPasswordGroup}>
              <label htmlFor="currentpass">Current Password</label>
              <input
                type="password"
                name="CurrentPass"
                id="currentpass"
              />
            </div>
            <div className={styles.newPasswordsContainer}>
              <div className={styles.passwordGroup}>
                <label htmlFor="newpass">New Password</label>
                <input
                  type="password"
                  name="NewPass"
                  id="newpass"
                />
              </div>
              <div className={styles.passwordGroup}>
                <label htmlFor="confirmpass">Confirm New Password</label>
                <input
                  type="password"
                  name="ConfirmPass"
                  id="confirmpass"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

