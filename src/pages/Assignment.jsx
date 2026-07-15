import axios from "axios";
import { Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const{courseId}=useParams();

  const role = localStorage.getItem("role").trim().toLowerCase()
  const getAssignment = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token)

      const res = await axios.get(
        "http://localhost:8000/api/v1/assignment/get-assignment",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);

      // Change this according to your API response
      setAssignments(res.data.assignments || res.data.message || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAssignment();
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Assignments
        </h1>
        {(role === "admin" || role === "teacher") && (

          <Link to={'/create-assignment'} className=" flex absolute top-15 right-50 font-bold bg-blue-700 w-45 h-15 items-center rounded-xl text-shadow-white justify-center cursor-pointer">
            <Plus className="text-white" />
            <p className="text-white">Add Assignment</p>
          </Link>

        )}

        {loading ? (
          <div className="text-center text-lg font-semibold">
            Loading...
          </div>
        ) : assignments.length === 0 ? (
          <div className="text-center text-gray-500">
            No assignments found.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-xl font-bold mb-3 text-blue-600">
                  {item.title}
                </h2>

                <p className="text-gray-700 mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Subject:</span>{" "}
                    {item.subject}
                  </p>

                  <p>
                    <span className="font-semibold">Due Date:</span>{" "}
                    {item.dueDate
                      ? new Date(item.dueDate).toLocaleDateString()
                      : "N/A"}
                  </p>

                  <p>
                    <span className="font-semibold">Created By:</span>{" "}
                    {item.createdBy?.firstName}{" "}
                    {item.createdBy?.lastName}
                  </p>
                  <p>
                    <span className="font-semibold">Created By:</span>{" "}
                    {item.createdBy?.email}{" "}
                  </p>
                </div>

                <button className="mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
                  View Assignment
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignment;


