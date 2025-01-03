import React from "react";

const ManageStudentsPanel = () => {
  return (
    <div className="manage-user-panel">
      <div className="manage-users-label">Manage Students</div>

      <div className="manage-users-searchbox">
        <input type="text" className="m-u-usersearch" />
        <button className="m-u-usersearch-button">Search</button>
      </div>

      <div className="manage-users-infoform">
        <form>
          <label htmlFor="">Name</label>
          <input type="text" id="student-fname" className="m-u-name"/>
          <input type="text" id="student-lname" className="m-u-name"/>
          <br />
          <label htmlFor="">Email</label>
          <input type="text" id="student-email" className="m-u-email"/>
          <br />
          <label htmlFor="">Password</label>
          <input type="text" id="student-password" className="m-u-email"/>
        </form>
      </div>

      <div className="manage-users-infotext">
        <p>Last Login:</p>
        <p>Account Created:</p>
        <p>Account Updated:</p>
      </div>

      <div className="manage-users-options">
        <form>
          <input type="checkbox" name="i-inactive" id="i-inactive" />
          <label htmlFor="i-inactive">Set Inactive</label>
        </form>
      </div>
    </div>
  );
};

export default ManageStudentsPanel;
