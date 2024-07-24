import { useState } from "react";
import "./Title.css";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

function Title() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };
  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };
  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <div className="title">
      <div className="content">
        <button className="button" onClick={openSignInModal}>
          Sign In
        </button>
        <button className="button" onClick={openSignUpModal}>
          Sign Up
        </button>

        <SignInModal
          isOpen={isSignInModalOpen}
          onRequestClose={closeSignInModal}
        ></SignInModal>
        <SignUpModal
          isOpen={isSignUpModalOpen}
          onRequestClose={closeSignUpModal}
        ></SignUpModal>
      </div>
    </div>
  );
}

export default Title;
