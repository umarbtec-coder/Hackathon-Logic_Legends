import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Complaint.css";

const API_URL = "http://localhost:5000/api/complaints";

const Complaint = () => {
  const [complaint, setComplaint] = useState({
    name: "",
    room: "",
    category: "",
    priority: "",
    description: "",
  });

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setComplaint({
      ...complaint,
      [e.target.name]: e.target.value,
    });

    setMessage("");
    setError("");
  };

  const fetchComplaints = async () => {
    try {
      setFetching(true);

      const response = await axios.get(API_URL);

      if (response.data.success) {
        setComplaints(response.data.complaints);
      }
    } catch (error) {
      console.error("Fetch complaints error:", error);

      setError("Unable to load complaint history.");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      !complaint.name ||
      !complaint.room ||
      !complaint.category ||
      !complaint.priority ||
      !complaint.description
    ) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(API_URL, {
        studentName: complaint.name,
        roomNumber: complaint.room,
        category: complaint.category,
        priority: complaint.priority,
        description: complaint.description,
      });

      if (response.data.success) {
        setMessage("Complaint submitted successfully! ✅");

        setComplaint({
          name: "",
          room: "",
          category: "",
          priority: "",
          description: "",
        });

        fetchComplaints();
      }
    } catch (error) {
      console.error("Submit complaint error:", error);

      setError(
        error.response?.data?.message ||
          "Failed to submit complaint. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="complaint-page">
      <div className="complaint-header">
        <span className="header-badge">SMART HOSTEL MANAGEMENT</span>

        <h1>Raise a Complaint</h1>

        <p>
          Facing an issue in your hostel? Submit your complaint and
          we'll make sure it gets resolved.
        </p>
      </div>

      <div className="complaint-wrapper">
        <div className="complaint-form-card">
          <div className="card-title">
            <div className="title-icon">⚠️</div>

            <div>
              <h2>Submit Complaint</h2>
              <p>Tell us what problem you're facing</p>
            </div>
          </div>

          {message && (
            <div className="success-message">
              {message}
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label>Student Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={complaint.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Room Number</label>

                <input
                  type="text"
                  name="room"
                  placeholder="e.g. A-204"
                  value={complaint.room}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Complaint Category</label>

                <select
                  name="category"
                  value={complaint.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Water">Water</option>
                  <option value="Room Maintenance">
                    Room Maintenance
                  </option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Food">Food</option>
                  <option value="Wi-Fi">Wi-Fi</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Priority</label>

                <select
                  name="priority"
                  value={complaint.priority}
                  onChange={handleChange}
                >
                  <option value="">Select priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Complaint Description</label>

              <textarea
                name="description"
                rows="5"
                placeholder="Describe your problem in detail..."
                value={complaint.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Complaint"}

              {!loading && <span>→</span>}
            </button>
          </form>
        </div>

        <div className="info-card">
          <div className="info-icon">🏠</div>

          <h3>Need Help?</h3>

          <p>
            Our hostel management team is here to help you with
            maintenance and other hostel-related issues.
          </p>

          <div className="info-item">
            <span>⚡</span>

            <div>
              <strong>Quick Response</strong>
              <small>We review complaints regularly</small>
            </div>
          </div>

          <div className="info-item">
            <span>🔒</span>

            <div>
              <strong>Secure</strong>
              <small>Your complaint details are protected</small>
            </div>
          </div>

          <div className="info-item">
            <span>📋</span>

            <div>
              <strong>Track Status</strong>
              <small>Monitor your complaint progress</small>
            </div>
          </div>
        </div>
      </div>

      {complaints.length > 0 && (
        <div className="complaint-history">
          <div className="history-heading">
            <div>
              <span className="history-label">
                YOUR ACTIVITY
              </span>

              <h2>Complaint History</h2>
            </div>

            <span className="complaint-count">
              {complaints.length} Complaint
              {complaints.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="complaint-list">
            {complaints.map((item) => (
              <div
                className="complaint-item"
                key={item._id}
              >
                <div className="complaint-main">
                  <div className="complaint-number">
                    #
                    {item._id
                      ? item._id.toString().slice(-4)
                      : "0000"}
                  </div>

                  <div>
                    <h3>{item.category}</h3>

                    <p>{item.description}</p>

                    <div className="complaint-meta">
                      <span>
                        Room {item.roomNumber}
                      </span>

                      <span>
                        {item.createdAt
                          ? new Date(
                              item.createdAt
                            ).toLocaleDateString()
                          : "N/A"}
                      </span>

                      <span>
                        {item.priority} Priority
                      </span>
                    </div>
                  </div>
                </div>

                <span className="status pending">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {fetching && (
        <div className="complaint-loading">
          Loading complaint history...
        </div>
      )}
    </div>
  );
};

export default Complaint;