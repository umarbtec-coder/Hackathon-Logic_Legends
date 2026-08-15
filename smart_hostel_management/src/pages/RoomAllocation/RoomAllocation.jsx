import React, { useMemo, useState } from "react";
import {
  BedDouble,
  Users,
  Building2,
  Search,
  Sparkles,
  UserPlus,
  CheckCircle2,
  X,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import "./RoomAllocation.css";

const initialRooms = [
  {
    id: 1,
    roomNumber: "A-101",
    floor: "Ground Floor",
    capacity: 4,
    occupied: 2,
    status: "Available",
  },
  {
    id: 2,
    roomNumber: "A-102",
    floor: "Ground Floor",
    capacity: 3,
    occupied: 1,
    status: "Available",
  },
  {
    id: 3,
    roomNumber: "A-103",
    floor: "Ground Floor",
    capacity: 2,
    occupied: 2,
    status: "Occupied",
  },
  {
    id: 4,
    roomNumber: "B-201",
    floor: "First Floor",
    capacity: 4,
    occupied: 1,
    status: "Available",
  },
  {
    id: 5,
    roomNumber: "B-202",
    floor: "First Floor",
    capacity: 3,
    occupied: 0,
    status: "Available",
  },
  {
    id: 6,
    roomNumber: "B-203",
    floor: "First Floor",
    capacity: 2,
    occupied: 2,
    status: "Occupied",
  },
  {
    id: 7,
    roomNumber: "C-301",
    floor: "Second Floor",
    capacity: 4,
    occupied: 3,
    status: "Available",
  },
  {
    id: 8,
    roomNumber: "C-302",
    floor: "Second Floor",
    capacity: 2,
    occupied: 0,
    status: "Available",
  },
];

const students = [
  {
    id: 1,
    name: "Rahul Patil",
    email: "rahul@example.com",
    course: "Computer Engineering",
    year: "2nd Year",
  },
  {
    id: 2,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    course: "Information Technology",
    year: "3rd Year",
  },
  {
    id: 3,
    name: "Om Kulkarni",
    email: "om@example.com",
    course: "Computer Engineering",
    year: "1st Year",
  },
];

const RoomAllocation = () => {
  const [rooms, setRooms] = useState(initialRooms);
  const [search, setSearch] = useState("");
  const [floor, setFloor] = useState("All Floors");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState("");

  const totalRooms = rooms.length;
  const availableRooms = rooms.filter(
    (room) => room.capacity > room.occupied
  ).length;
  const occupiedRooms = rooms.filter(
    (room) => room.occupied === room.capacity
  ).length;

  const totalBeds = rooms.reduce((sum, room) => sum + room.capacity, 0);
  const occupiedBeds = rooms.reduce((sum, room) => sum + room.occupied, 0);
  const availableBeds = totalBeds - occupiedBeds;

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchesSearch = room.roomNumber
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFloor =
        floor === "All Floors" || room.floor === floor;

      return matchesSearch && matchesFloor;
    });
  }, [rooms, search, floor]);

  const openAllocation = (room) => {
    if (room.occupied >= room.capacity) return;

    setSelectedRoom(room);
    setSelectedStudent("");
    setShowModal(true);
    setSuccess("");
  };

  const allocateRoom = () => {
    if (!selectedStudent || !selectedRoom) return;

    setRooms((currentRooms) =>
      currentRooms.map((room) => {
        if (room.id === selectedRoom.id) {
          const newOccupied = room.occupied + 1;

          return {
            ...room,
            occupied: newOccupied,
            status:
              newOccupied >= room.capacity
                ? "Occupied"
                : "Available",
          };
        }

        return room;
      })
    );

    setSuccess(
      `${selectedStudent} has been successfully allocated to Room ${selectedRoom.roomNumber}.`
    );

    setShowModal(false);
    setSelectedRoom(null);
  };

  return (
    <div className="allocation-page">
      <div className="allocation-container">
        <div className="allocation-header">
          <div>
            <div className="allocation-title-row">
              <div className="allocation-title-icon">
                <Sparkles size={24} />
              </div>

              <div>
                <h1>Smart Room Allocation</h1>
                <p>
                  Intelligent room management and student allocation
                </p>
              </div>
            </div>
          </div>

          <button
            className="auto-allocate-btn"
            onClick={() => {
              const room = rooms.find(
                (item) => item.occupied < item.capacity
              );

              if (room) {
                openAllocation(room);
              }
            }}
          >
            <Sparkles size={18} />
            Auto Allocate
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon purple">
              <Building2 size={21} />
            </div>

            <div>
              <span>Total Rooms</span>
              <strong>{totalRooms}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <BedDouble size={21} />
            </div>

            <div>
              <span>Available Beds</span>
              <strong>{availableBeds}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue">
              <Users size={21} />
            </div>

            <div>
              <span>Occupied Beds</span>
              <strong>{occupiedBeds}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <ShieldCheck size={21} />
            </div>

            <div>
              <span>Available Rooms</span>
              <strong>{availableRooms}</strong>
            </div>
          </div>
        </div>

        {success && (
          <div className="success-message">
            <CheckCircle2 size={19} />
            <span>{success}</span>

            <button onClick={() => setSuccess("")}>
              <X size={17} />
            </button>
          </div>
        )}

        <div className="allocation-toolbar">
          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search room number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-box">
            <Building2 size={17} />

            <select
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            >
              <option>All Floors</option>
              <option>Ground Floor</option>
              <option>First Floor</option>
              <option>Second Floor</option>
            </select>

            <ChevronDown size={16} />
          </div>
        </div>

        <div className="section-heading">
          <div>
            <h2>Available Rooms</h2>
            <p>
              Select a room to allocate it to a student
            </p>
          </div>

          <span className="room-count">
            {filteredRooms.length} Rooms
          </span>
        </div>

        <div className="room-grid">
          {filteredRooms.map((room) => {
            const percentage =
              (room.occupied / room.capacity) * 100;

            const isFull = room.occupied >= room.capacity;

            return (
              <div
                className={`room-card ${
                  isFull ? "room-full" : ""
                }`}
                key={room.id}
              >
                <div className="room-card-top">
                  <div className="room-number">
                    <BedDouble size={20} />
                    <span>{room.roomNumber}</span>
                  </div>

                  <span
                    className={`room-status ${
                      isFull ? "full" : "available"
                    }`}
                  >
                    {isFull ? "Full" : "Available"}
                  </span>
                </div>

                <div className="room-location">
                  <Building2 size={14} />
                  {room.floor}
                </div>

                <div className="room-visual">
                  <div className="bed-icon-grid">
                    {Array.from({
                      length: room.capacity,
                    }).map((_, index) => (
                      <div
                        className={`mini-bed ${
                          index < room.occupied
                            ? "occupied-bed"
                            : ""
                        }`}
                        key={index}
                      >
                        <BedDouble size={18} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="occupancy-info">
                  <div>
                    <span>Occupancy</span>
                    <strong>
                      {room.occupied}/{room.capacity}
                    </strong>
                  </div>

                  <span>{Math.round(percentage)}%</span>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${percentage}%`,
                    }}
                  ></div>
                </div>

                <button
                  className="allocate-btn"
                  disabled={isFull}
                  onClick={() => openAllocation(room)}
                >
                  <UserPlus size={17} />

                  {isFull
                    ? "Room Full"
                    : "Allocate Student"}
                </button>
              </div>
            );
          })}
        </div>

        {filteredRooms.length === 0 && (
          <div className="empty-state">
            <Search size={40} />
            <h3>No rooms found</h3>
            <p>
              Try changing your search or floor filter.
            </p>
          </div>
        )}
      </div>

      {showModal && selectedRoom && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="allocation-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>

            <div className="modal-icon">
              <BedDouble size={25} />
            </div>

            <h2>Allocate Student</h2>

            <p className="modal-description">
              Allocate a student to Room{" "}
              <strong>{selectedRoom.roomNumber}</strong>
            </p>

            <div className="selected-room-box">
              <div>
                <span>Room</span>
                <strong>{selectedRoom.roomNumber}</strong>
              </div>

              <div>
                <span>Floor</span>
                <strong>{selectedRoom.floor}</strong>
              </div>

              <div>
                <span>Available</span>
                <strong>
                  {selectedRoom.capacity -
                    selectedRoom.occupied}{" "}
                  Bed
                </strong>
              </div>
            </div>

            <label className="modal-label">
              Select Student
            </label>

            <div className="student-select">
              <Users size={18} />

              <select
                value={selectedStudent}
                onChange={(e) =>
                  setSelectedStudent(e.target.value)
                }
              >
                <option value="">
                  Choose a student
                </option>

                {students.map((student) => (
                  <option
                    value={student.name}
                    key={student.id}
                  >
                    {student.name} — {student.course}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="confirm-allocation"
              disabled={!selectedStudent}
              onClick={allocateRoom}
            >
              <CheckCircle2 size={18} />
              Confirm Allocation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomAllocation;