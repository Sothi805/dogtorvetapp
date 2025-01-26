import React, { useState, useEffect } from "react";
import image from '../../assets/images/image.png'
import { useNavigate } from "react-router-dom";
import './signUp.less'

const SignupForm = () => {
        useEffect(() => {
            document.title = "Sign-up"
          }, [])

          const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and logic here
    console.log({ username, currentPassword, newPassword, confirmPassword });
  };

  return (
    <div id="sign-up" className="sign-up">
      <div className="signup-form">
        <div className="image-side">
          <img src={image} alt="Random Cat Image" />
        </div>
        <div className="form-side">
          <h1 className="title">
            <span>:D</span>ogtor VET services
          </h1>
          <p className="description">Sign up or update your password below.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div>
              <input
                type={showPassword.current ? "text" : "password"}
                name="password"
                placeholder="Current-Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button
                className="password-button"
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, current: !prev.current }))
                }
              >
                {showPassword.current ? "Hide" : "Show"}
              </button>
            </div>
            <div>
              <input
                type={showPassword.new ? "text" : "password"}
                name="newPassword"
                placeholder="New-Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                className="password-button"
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                }
              >
                {showPassword.new ? "Hide" : "Show"}
              </button>
            </div>
            <div>
              <input
                type={showPassword.confirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New-Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="password-button"
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))
                }
              >
                {showPassword.confirm ? "Hide" : "Show"}
              </button>
            </div>
            <button type="submit">Submit</button>
          </form>
          <p className="sign-in">already have an account? <span onClick={() => {navigate("/sign-in")}}>sign-in</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
