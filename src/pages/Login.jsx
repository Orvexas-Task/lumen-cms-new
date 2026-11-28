import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  ArrowRight,
  BookOpen,
  Sparkles,
  LockKeyhole,
  Mail,
  CheckCircle2,
  PenLine,
  Users,
} from "lucide-react";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [forgotMessage, setForgotMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      submit: "",
    }));

    setForgotMessage("");
    setSuccess(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Please enter your password.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Frontend demonstration only.
      // Authentication API will be connected later.
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      setErrors({
        email: "Enter your email address to reset your password.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors({
        email: "Please enter a valid email address.",
      });
      return;
    }

    setForgotMessage(
      "Password reset will be available once email authentication is connected."
    );
  };

  return (
    <div className="login-page">

      {/* LEFT BRAND PANEL */}

      <aside className="login-sidebar">

        <Link to="/" className="login-logo">
          <span className="login-logo-icon">L</span>
          LUMEN
        </Link>

        <div className="login-sidebar-content">

          <span className="login-eyebrow">
            <Sparkles size={13} />
            GOOD TO HAVE YOU BACK
          </span>

          <h1>
            Your next
            <br />
            great idea
            <br />
            <span>starts here.</span>
          </h1>

          <p className="login-description">
            Pick up where you left off. Discover fresh perspectives,
            explore thoughtful stories, and share what inspires you.
          </p>

          {/* JOURNAL ILLUSTRATION */}

          <div className="login-illustration">

            <div className="login-illustration-circle"></div>

            <div className="login-journal-card">

              <div className="login-journal-header">
                <span>LUMEN JOURNAL</span>
                <BookOpen size={16} />
              </div>

              <div className="login-journal-divider"></div>

              <span className="login-journal-caption">
                A THOUGHT WORTH SHARING
              </span>

              <h2>
                Welcome
                <br />
                back to ideas.
              </h2>

              <div className="login-journal-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <small>READ. REFLECT. RECONNECT.</small>

            </div>

            <div className="login-floating-note">
              <Sparkles size={15} />
              <span>There's always more to discover.</span>
            </div>

          </div>

          {/* BENEFITS */}

          <div className="login-benefits">

            <div className="login-benefit">
              <span><PenLine size={17} /></span>
              <div>
                <strong>Your ideas, your space</strong>
                <small>Continue creating and sharing.</small>
              </div>
            </div>

            <div className="login-benefit">
              <span><Users size={17} /></span>
              <div>
                <strong>Your community awaits</strong>
                <small>Reconnect with curious minds.</small>
              </div>
            </div>

          </div>

        </div>

        <div className="login-sidebar-footer">
          © 2026 Lumen CMS. A brighter place for ideas.
        </div>

      </aside>


      {/* RIGHT LOGIN PANEL */}

      <main className="login-main">

        <div className="login-top-link">
          <span>New to Lumen?</span>
          <Link to="/signup">
            Create account <ArrowRight size={14} />
          </Link>
        </div>

        <div className="login-form-wrapper">

          <div className="login-form-heading">

            <span className="login-form-eyebrow">
              <Sparkles size={14} />
              WELCOME BACK
            </span>

            <h2>Sign in to Lumen</h2>

            <p>
              We're glad you're here. Enter your details
              to access your account.
            </p>

          </div>

          {success ? (

            <div className="login-success">

              <div className="login-success-icon">
                <CheckCircle2 size={35} />
              </div>

              <h2>Welcome back!</h2>

              <p>
                Redirecting you to Home...
              </p>

              <button
                type="button"
                className="login-submit"
                onClick={() => navigate("/")}
              >
                Go to Home now
              </button>

            </div>

          ) : (

            <form onSubmit={handleSubmit} noValidate>

              {/* EMAIL */}

              <div className="login-form-group">

                <label htmlFor="login-email">
                  Email address
                </label>

                <div className="login-input-wrapper">
                  <Mail size={17} />

                  <input
                    id="login-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                {errors.email && (
                  <small className="login-error">
                    {errors.email}
                  </small>
                )}

              </div>


              {/* PASSWORD */}

              <div className="login-form-group">

                <div className="login-password-label">
                  <label htmlFor="login-password">
                    Password
                  </label>

                  <a href="#forgot" onClick={handleForgotPassword}>
                    Forgot password?
                  </a>
                </div>

                <div className="login-input-wrapper">
                  <LockKeyhole size={17} />

                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <small className="login-error">
                    {errors.password}
                  </small>
                )}

              </div>


              {/* REMEMBER ME */}

              <div className="login-remember">
                <label>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                  <span>Remember me</span>
                </label>
              </div>


              {/* FORGOT PASSWORD FEEDBACK */}

              {forgotMessage && (
                <div className="login-info-message">
                  {forgotMessage}
                </div>
              )}


              {/* SUBMIT */}

              <button type="submit" className="login-submit">
                Sign in
                <ArrowRight size={17} />
              </button>

              <div className="login-security">
                <LockKeyhole size={13} />
                Your information is kept secure.
              </div>

            </form>

          )}

          <div className="login-divider">
            <span></span>
            <small>YOUR SPACE IS WAITING</small>
            <span></span>
          </div>

          <div className="login-bottom">
            Don't have an account?
            <Link to="/signup"> Join Lumen</Link>
          </div>

        </div>

      </main>

    </div>
  );
}