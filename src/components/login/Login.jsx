import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import "../../styles/footer.scss";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";

function Login() {
  // Initializing the Variables
  const [activeTab, setActiveTab] = useState("loginTab");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const [error, setError] = useState("");

  // This function sets & shows the Login or Register Tab
  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  // This function is used for sign in operation
  const handleSignIn = () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Email address & password are required.");
      return;
    }
    navigate("/me");
  };
  // This function is used for Register in operation
  const handleRegister = () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Email address & password are required.");
      return;
    }
    setIsRegistrationSuccess(true);
  };
  // This function is used for Popup message
  const closePopup = () => {
    setIsRegistrationSuccess(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "loginTab" ? "active" : ""}`}
            onClick={() => showTab("loginTab")}
          >
            LOGIN
          </div>
          <div
            className={`tab ${activeTab === "registerTab" ? "active" : ""}`}
            onClick={() => showTab("registerTab")}
          >
            REGISTER
          </div>
        </div>
        {activeTab === "loginTab" && (
          <div
            id="loginTab"
            className={`tab-content ${
              activeTab === "loginTab" ? "active" : ""
            }`}
          >
            <div className="social-login-links">
              <p>Sign in with:</p>
              <div className="social-login-links a">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle size={30} />
                </a>
                <a
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
            <p> or: </p>
            <div class="form-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div class="remember-forgot">
              <div class="remember-me">
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label for="rememberMe">Remember Me</label>
              </div>
              <div class="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <button className="login-btn" onClick={handleSignIn}>
              SIGN IN
            </button>
            <p> </p>
            <p>
              Not a member?{" "}
              <a href="#" onClick={() => showTab("registerTab")}>
                Register
              </a>
            </p>
          </div>
        )}
        {activeTab === "registerTab" && (
          <div
            id="registerTab"
            className={`tab-content ${
              activeTab === "registerTab" ? "active" : ""
            }`}
          >
            <div className="social-login-links">
              <p>Sign up with:</p>
              <div className="social-login-links a">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle size={30} />
                </a>
                <a
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
            <p> or: </p>
            <div class="form-group">
              <input
                type="text"
                id="newUsername"
                name="newUsername"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="form-group">
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <br></br>
            <button className="login-btn" onClick={handleRegister}>
              Register
            </button>
            <Popup
              open={isRegistrationSuccess}
              closeOnDocumentClick
              onClose={closePopup}
            >
              <div
                style={{
                  color: "red",
                  position: "absolute",
                  top: "50%",
                  right: "100%",
                  transform: "translateY(-50%)",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                Registration Successfull!
              </div>
            </Popup>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
