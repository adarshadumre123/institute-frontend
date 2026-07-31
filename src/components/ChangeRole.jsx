import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import api from "../utils/api";

const ChangeUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // Fetch Users
  const getAllUsers = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        "/api/v1/users/get",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setUsers(res.data.users);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch users."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // Change Role
  const updateRole = async (userId, role) => {
    try {
      const res = await api.put(
        `/api/v1/user/change-role/${userId}`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        getAllUsers();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Role update failed."
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  // hello 

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Manage Users
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow">

          <table className="min-w-full">

            <thead className="bg-indigo-600 text-white">

              <tr>
                <th className="py-3 px-4 text-left">SN</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Current Role</th>
                <th className="py-3 px-4 text-left">Change Role</th>
              </tr>

            </thead>

            <tbody>

              {users.map((user, index) => (

                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3">
                    {user.firstName} {user.lastName}
                  </td>

                  <td className="px-4 py-3">
                    {user.email}
                  </td>

                  <td className="px-4 py-3">
                    {user.phone}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        user.role === "admin"
                          ? "bg-red-500"
                          : user.role === "teacher"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-4 py-3">

                    {user.role === "admin" ? (
                      <span className="text-red-500 font-semibold">
                        Cannot Change
                      </span>
                    ) : (
                      <select
                        value={user.role}
                        onChange={(e) =>
                          updateRole(user._id, e.target.value)
                        }
                        className="border rounded-lg px-3 py-2"
                      >
                        <option value="student">
                          Student
                        </option>

                        <option value="teacher">
                          Teacher
                        </option>
                      </select>
                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ChangeUser;