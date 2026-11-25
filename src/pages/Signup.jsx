
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  ArrowRight,
  BookOpen,
  Users,
  PenLine,
  CheckCircle2,
  Sparkles,
  LockKeyhole,
} from "lucide-react";

import "./Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const passwordStrength = () => {
    const password = formData.password;

    if (!password) return 0;

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = passwordStrength();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      submit: "",
    }));

    setSuccess(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Please create a password.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.terms) {
      newErrors.terms = "Please accept the terms to continue.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Frontend demonstration only.
      // Backend registration API will be connected later.
      setSuccess(true);
    }
  };

  return (
    <div className="signup-page">

      {/* LEFT BRAND PANEL */}

      <aside className="signup-sidebar">

        <Link to="/" className="signup-logo">
          <span className="signup-logo-icon">L</span>
          LUMEN
        </Link>

        <div className="sidebar-content">

          <span className="sidebar-eyebrow">
            <Sparkles size={13} />
            A COMMUNITY OF CURIOUS MINDS
          </span>

          <h1>
            Your ideas deserve
            <br />
            a place to <span>grow.</span>
          </h1>

          <p className="sidebar-description">
            Discover new perspectives, share what you know,
            and connect with people who believe ideas
            can make a difference.
          </p>

          {/* Decorative journal */}

          <div className="signup-illustration">

            <div className="illustration-circle"></div>

            <div className="illustration-card">

              <div className="illustration-card-top">
                <span>LUMEN JOURNAL</span>
                <BookOpen size={16} />
              </div>

              <div className="illustration-divider"></div>

              <h2>
                Every idea
                <br />
                starts somewhere.
              </h2>

              <p>Write. Share. Discover.</p>

              <div className="illustration-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <small>YOUR NEXT CHAPTER BEGINS HERE</small>

            </div>

            <div className="floating-note">
              <Sparkles size={16} />
              <span>Make your voice heard.</span>
            </div>

          </div>

          {/* Benefits */}

          <div className="sidebar-benefits">

            <div className="benefit-item">
              <span><PenLine size={17} /></span>
              <div>
                <strong>Share your perspective</strong>
                <small>Turn your thoughts into meaningful stories.</small>
              </div>
            </div>

            <div className="benefit-item">
              <span><Users size={17} /></span>
              <div>
                <strong>Find your community</strong>
                <small>Connect with people who inspire you.</small>
              </div>
            </div>

          </div>

        </div>

        <div className="sidebar-footer">
          © 2026 Lumen CMS. A brighter place for ideas.
        </div>

      </aside>


      {/* RIGHT SIGNUP FORM */}

      <main className="signup-main">

        <div className="signup-top-link">
          <span>Already part of Lumen?</span>
          <Link to="/login">Sign in <ArrowRight size={14} /></Link>
        </div>

        <div className="signup-form-wrapper">

          <div className="form-heading">

            <span className="form-welcome">
              <Sparkles size={14} />
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2>Create your account</h2>

            <p>
              Join a community where ideas are shared
              and curiosity is celebrated.
            </p>

          </div>

          {success ? (

            <div className="signup-success">

              <div className="success-icon">
                <CheckCircle2 size={34} />
              </div>

              <h2>You're ready to join Lumen!</h2>

              <p>
                Your details passed frontend validation.
                Connect the registration API to create your account.
              </p>

              <button
                type="button"
                className="signup-submit"
                onClick={() => {
                  setSuccess(false);
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    terms: false,
                  });
                }}
              >
                Back to signup
              </button>

            </div>

          ) : (

            <form onSubmit={handleSubmit} noValidate>

              {/* FULL NAME */}

              <div className="form-group">
                <label htmlFor="name">Full name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />

                {errors.name && (
                  <small className="field-error">{errors.name}</small>
                )}
              </div>


              {/* EMAIL */}

              <div className="form-group">
                <label htmlFor="email">Email address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

                {errors.email && (
                  <small className="field-error">{errors.email}</small>
                )}
              </div>


              {/* PASSWORD */}

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <div className="password-input">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>

                {formData.password && (
                  <div className="password-strength">

                    <div className="strength-bars">
                      {[1, 2, 3, 4].map((bar) => (
                        <span
                          key={bar}
                          className={bar <= strength ? `strength-${strength}` : ""}
                        ></span>
                      ))}
                    </div>

                    <small>
                      {["", "Weak", "Fair", "Good", "Strong"][strength]}
                    </small>

                  </div>
                )}

                <small className="input-hint">
                  Use at least 8 characters.
                </small>

                {errors.password && (
                  <small className="field-error">{errors.password}</small>
                )}
              </div>


              {/* CONFIRM PASSWORD */}

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm password</label>

                <div className="password-input">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <small className="field-error">
                    {errors.confirmPassword}
                  </small>
                )}
              </div>


              {/* TERMS */}

              <div className="terms-wrapper">

                <label className="terms-label">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                  />

                  <span>
                    I agree to the <a href="/terms">Terms of Service</a>
                    {" "}and <a href="/privacy">Privacy Policy</a>.
                  </span>
                </label>

                {errors.terms && (
                  <small className="field-error">{errors.terms}</small>
                )}

              </div>


              {/* SUBMIT */}

              <button type="submit" className="signup-submit">
                Create account
                <ArrowRight size={17} />
              </button>

              <div className="form-security">
                <LockKeyhole size={13} />
                Your information is kept secure.
              </div>

            </form>

          )}

          <div className="signup-bottom">
            By joining Lumen, you're making room for new ideas,
            new connections, and new perspectives.
          </div>

        </div>

      </main>

    </div>
  );
}
