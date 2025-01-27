import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import "./component-style.css";

interface PopupWrapperProps {
  redirectTo: string;
  children: React.ReactNode;
}

const PopupWrapper: React.FC<PopupWrapperProps> = ({ redirectTo, children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [proceed, setProceed] = useState(false);
  const router = useRouter();

  const handleConfirm = () => {
    setIsPopupOpen(false);
    setProceed(true);
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsPopupOpen(true);
  };

  if (proceed) {
    router.push(redirectTo);
    setProceed(false);
  }

  const renderChildren = () => {
    if (React.isValidElement(children) && children.props.href) {
      return React.cloneElement(children as React.ReactElement<LinkProps>, {
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          setIsPopupOpen(true);
        },
      });
    }

    return <span onClick={handleClick}>{children}</span>;
  };

  return (
    <div>
      {renderChildren()}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleCancel}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h1>Exit Exam?</h1>
            <p>You will exit the exam and your current progress will be submitted.</p>
            <p>Are you sure?</p>
            <div className="confirm-cancel-buttons">
              <button className="cancel" onClick={handleCancel}>
                <p>Cancel</p>
              </button>
              <button className="confirm" onClick={handleConfirm}>
                <p>Confirm</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupWrapper;
