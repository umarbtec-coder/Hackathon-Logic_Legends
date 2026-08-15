import React from "react";
import {
  Building2,
  MessageSquareWarning,
  ClipboardCheck,
  CreditCard,
  UserRoundCheck,
  Bell,
  ShieldCheck,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import "./Features.css";

const features = [
  {
    icon: Building2,
    title: "Smart Room Allocation",
    description:
      "Assign rooms and beds intelligently while keeping occupancy and availability completely organized.",
    points: [
      "Real-time room availability",
      "Easy bed allocation",
      "Occupancy monitoring",
    ],
  },
  {
    icon: MessageSquareWarning,
    title: "Complaint Management",
    description:
      "Students can report problems digitally while wardens can monitor, assign and resolve complaints faster.",
    points: [
      "Digital complaint registration",
      "Complaint status tracking",
      "Faster issue resolution",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Tracking",
    description:
      "Maintain accurate attendance records and monitor student presence through a centralized system.",
    points: [
      "Digital attendance records",
      "Student-wise tracking",
      "Easy monitoring",
    ],
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description:
      "Manage hostel fees, payment status and pending amounts without maintaining complicated paperwork.",
    points: [
      "Payment tracking",
      "Pending fee monitoring",
      "Due-date management",
    ],
  },
  {
    icon: UserRoundCheck,
    title: "Visitor Management",
    description:
      "Keep hostel entry and visitor information organized to create a safer environment for everyone.",
    points: [
      "Visitor registration",
      "Entry and exit records",
      "Improved security",
    ],
  },
  {
    icon: Bell,
    title: "Digital Notice Board",
    description:
      "Publish important announcements instantly so students never miss important hostel updates.",
    points: [
      "Instant announcements",
      "Centralized notices",
      "Better communication",
    ],
  },
  {
    icon: Users,
    title: "Student Management",
    description:
      "Keep student information organized in one centralized platform for easier hostel administration.",
    points: [
      "Student profiles",
      "Centralized records",
      "Easy information access",
    ],
  },
  {
    icon: BarChart3,
    title: "Smart Dashboard",
    description:
      "Get a clear overview of hostel operations with useful statistics and real-time information.",
    points: [
      "Live hostel statistics",
      "Occupancy insights",
      "Quick overview",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Secure Management",
    description:
      "Keep important hostel information organized with a secure and controlled digital management system.",
    points: [
      "Organized data",
      "Role-based management",
      "Secure access",
    ],
  },
];

const Features = () => {
  return (
    <div className="features-page">

      {/* HERO */}

      <section className="features-hero">

        <div className="features-orb features-orb-one"></div>
        <div className="features-orb features-orb-two"></div>
        <div className="features-grid-bg"></div>

        <div className="features-hero-content">

          <div className="features-badge">
            <span className="features-badge-icon">
              <Sparkles size={13} />
            </span>
            POWERFUL HOSTEL FEATURES
          </div>

          <h1>
            Everything you need to
            <span> manage smarter.</span>
          </h1>

          <p>
            From room allocation to complaints, attendance, fees and
            communication — SmartHostel brings every important hostel
            operation together in one powerful platform.
          </p>

          <div className="features-hero-stats">

            <div>
              <strong>09+</strong>
              <span>Smart Features</span>
            </div>

            <div className="features-stat-line"></div>

            <div>
              <strong>24/7</strong>
              <span>Digital Access</span>
            </div>

            <div className="features-stat-line"></div>

            <div>
              <strong>100%</strong>
              <span>Centralized</span>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURE INTRO */}

      <section className="features-intro">

        <div className="features-section-container">

          <div className="features-section-heading">

            <div className="features-small-badge">
              ONE PLATFORM
            </div>

            <h2>
              Built to simplify every part of
              <span> hostel management.</span>
            </h2>

            <p>
              SmartHostel replaces scattered paperwork and complicated
              processes with simple digital tools designed for modern
              hostels.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURE CARDS */}

      <section className="all-features">

        <div className="features-section-container">

          <div className="features-main-grid">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  className="premium-feature-card"
                  key={feature.title}
                >

                  <div className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="premium-feature-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <div className="feature-points">

                    {feature.points.map((point) => (
                      <div key={point}>
                        <CheckCircle2 size={15} />
                        <span>{point}</span>
                      </div>
                    ))}

                  </div>

                  <div className="feature-card-arrow">
                    <ArrowRight size={18} />
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* WHY FEATURES */}

      <section className="features-bottom">

        <div className="features-section-container">

          <div className="features-bottom-card">

            <div className="bottom-glow"></div>

            <div className="bottom-content">

              <div className="bottom-icon">
                <ShieldCheck size={28} />
              </div>

              <div>
                <div className="features-small-badge light">
                  SMART MANAGEMENT
                </div>

                <h2>
                  Less paperwork.
                  <br />
                  <span>More control.</span>
                </h2>

                <p>
                  Give students a better experience while making hostel
                  administration faster, simpler and more organized.
                </p>

              </div>

            </div>

            <div className="bottom-checks">

              <div>
                <CheckCircle2 size={17} />
                <span>Centralized information</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Faster communication</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Better administration</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="features-cta">

        <div className="features-cta-inner">

          <div className="cta-small-icon">
            <Building2 size={24} />
          </div>

          <h2>
            Ready to experience
            <span> smarter hostel management?</span>
          </h2>

          <p>
            Bring your hostel operations together with SmartHostel.
          </p>

          <a href="/register" className="features-cta-button">
            Get Started
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </div>
  );
};

export default Features;