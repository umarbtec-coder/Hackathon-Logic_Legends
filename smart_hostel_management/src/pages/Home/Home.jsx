import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Users,
  ClipboardCheck,
  CreditCard,
  MessageSquareWarning,
  UserRoundCheck,
  Bell,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import "./Home.css";

const features = [
  {
    icon: Building2,
    title: "Smart Room Allocation",
    description:
      "Manage rooms, beds and occupancy efficiently with a centralized room management system.",
    path: "/room-allocation",
  },
  {
    icon: MessageSquareWarning,
    title: "Complaint Management",
    description:
      "Students can raise complaints while wardens can track, update and resolve them easily.",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Tracking",
    description:
      "Keep attendance records organized and monitor student attendance in real time.",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description:
      "Track hostel fees, payments, pending amounts and due dates from one place.",
  },
  {
    icon: UserRoundCheck,
    title: "Visitor Management",
    description:
      "Maintain secure visitor records and keep track of hostel entry and exit activity.",
  },
  {
    icon: Bell,
    title: "Digital Notice Board",
    description:
      "Share important hostel announcements and notices with students instantly.",
  },
];

const Home = () => {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="badge-dot"></span>
              Smart Digital Hostel Platform
            </div>

            <h1>
              Smarter Hostel
              <span> Management.</span>
              <br />
              Better Student
              <span> Experience.</span>
            </h1>

            <p>
              Manage rooms, complaints, attendance, fees and visitors
              through one simple and intelligent hostel management
              platform.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="hero-primary-btn">
                Get Started
                <ArrowRight size={18} />
              </Link>

              <a href="#features" className="hero-secondary-btn">
                Explore Features
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-icons">
                <span>
                  <Users size={15} />
                </span>
                <span>
                  <ShieldCheck size={15} />
                </span>
                <span>
                  <CheckCircle2 size={15} />
                </span>
              </div>

              <p>
                Built for students, wardens & administrators
              </p>
            </div>

          </div>

          <div className="hero-visual">

            <div className="dashboard-glow"></div>

            <div className="dashboard-card">

              <div className="dashboard-header">
                <div>
                  <span className="dashboard-label">
                    HOSTEL OVERVIEW
                  </span>

                  <h3>Good Morning 👋</h3>
                </div>

                <div className="dashboard-avatar">
                  A
                </div>
              </div>

              <div className="dashboard-stats">

                <div className="mini-stat">
                  <div className="mini-stat-icon blue">
                    <Users size={17} />
                  </div>

                  <div>
                    <span>Students</span>
                    <strong>250</strong>
                  </div>
                </div>

                <div className="mini-stat">
                  <div className="mini-stat-icon purple">
                    <Building2 size={17} />
                  </div>

                  <div>
                    <span>Rooms</span>
                    <strong>120</strong>
                  </div>
                </div>

              </div>

              <div className="occupancy-section">

                <div className="section-heading">
                  <span>Hostel Occupancy</span>
                  <strong>95%</strong>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>

                <div className="progress-info">
                  <span>114 Occupied</span>
                  <span>6 Available</span>
                </div>

              </div>

              <div className="dashboard-bottom">

                <div className="dashboard-item">
                  <MessageSquareWarning size={18} />
                  <div>
                    <span>Complaints</span>
                    <strong>18 Pending</strong>
                  </div>
                </div>

                <div className="dashboard-item">
                  <CreditCard size={18} />
                  <div>
                    <span>Fees</span>
                    <strong>92% Collected</strong>
                  </div>
                </div>

              </div>

            </div>

            <div className="floating-card floating-card-one">
              <div className="floating-icon success">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>Room Allocated</strong>
                <span>Room A-204</span>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <div className="floating-icon warning">
                <Bell size={17} />
              </div>

              <div>
                <strong>New Notice</strong>
                <span>Hostel meeting at 6 PM</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">

          <div className="stat-box">
            <strong>250+</strong>
            <span>Students Managed</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-box">
            <strong>120+</strong>
            <span>Hostel Rooms</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-box">
            <strong>95%</strong>
            <span>Occupancy Tracking</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-box">
            <strong>24/7</strong>
            <span>Digital Management</span>
          </div>

        </div>
      </section>

      <section className="features-section" id="features">

        <div className="section-container">

          <div className="section-title">

            <div className="section-badge">
              POWERFUL FEATURES
            </div>

            <h2>
              Everything your hostel needs,
              <span> in one place.</span>
            </h2>

            <p>
              Simplify daily hostel operations with smart tools
              designed for students, wardens and administrators.
            </p>

          </div>

          <div className="features-grid">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              const cardContent = (
                <>
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <div className="feature-arrow">
                    <ArrowRight size={17} />
                  </div>
                </>
              );

              return feature.path ? (
                <Link
                  to={feature.path}
                  className="feature-card feature-card-link"
                  key={index}
                >
                  {cardContent}
                </Link>
              ) : (
                <div className="feature-card" key={index}>
                  {cardContent}
                </div>
              );
            })}

          </div>

        </div>
      </section>

      <section className="why-section" id="about">

        <div className="section-container">

          <div className="why-grid">

            <div className="why-content">

              <div className="section-badge">
                WHY SMART HOSTEL?
              </div>

              <h2>
                Turn hostel management into a
                <span> smarter experience.</span>
              </h2>

              <p>
                SmartHostel brings students, wardens and
                administrators together on one centralized platform,
                reducing paperwork and improving communication.
              </p>

              <div className="why-list">

                <div>
                  <CheckCircle2 size={19} />
                  <span>Centralized hostel information</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Faster complaint resolution</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Better room and fee management</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Improved student communication</span>
                </div>

              </div>

            </div>

            <div className="why-card">

              <div className="why-card-icon">
                <ShieldCheck size={30} />
              </div>

              <h3>One Platform.</h3>
              <h3>Complete Control.</h3>

              <p>
                From room allocation to visitor tracking,
                everything is organized in one secure digital
                platform.
              </p>

              <div className="why-card-line"></div>

              <span>
                Smart management starts here.
              </span>

            </div>

          </div>

        </div>

      </section>

      <section className="cta-section" id="contact">

        <div className="cta-container">

          <div className="cta-icon">
            <Building2 size={25} />
          </div>

          <h2>
            Ready to make hostel management
            <span> smarter?</span>
          </h2>

          <p>
            Join the digital transformation and manage your hostel
            operations with ease.
          </p>

          <Link to="/register" className="cta-button">
            Get Started
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;