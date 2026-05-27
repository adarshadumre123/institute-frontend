import React, { useEffect, useState } from "react";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);

  // Fetch users
  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/v1/users/get",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Filter only students
      const studentUsers = res.data.users.filter(
        (user) => user.role.toLowerCase() === "student"
      );

      setStudents(studentUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Students</h1>

      {students.length > 0 ? (
        <div className="grid gap-4">
          {students.map((student) => (
            <div
              key={student._id}
              className="bg-white shadow-md rounded-xl p-4"
            >
              <h2 className="text-xl font-semibold">
                {student.name}
              </h2>

              <p className="text-gray-600">
                {student.email}
              </p>

              <p className="text-blue-600 font-medium">
                Role: {student.role}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No Students Found</p>
      )}
    </div>
  );
};

export default Students;