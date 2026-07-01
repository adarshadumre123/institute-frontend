

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import { Link } from 'react-router-dom';
import {
  Calendar,
  BookOpen,
  User,
  Mail,
  Video,
  Plus
} from "lucide-react";

const GetClass = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const getAllClass = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/class/getAllClass",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setClasses(res.data.newClass);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch classes"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllClass();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading Classes...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Live Classes
      </h1>

      <div className="flex justify-end mb-6">
  <Link
    to={`/class-create`}
    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
  >
    <Plus size={18} />
    Add Class
  </Link>
</div>

      {classes.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No classes available.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {item.description || "No description provided"}
              </p>

              <div className="space-y-3">

                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span className="font-medium">
                    Course:
                  </span>
                  <span>{item.course?.title}</span>
                </div>

                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span className="font-medium">
                    Teacher:
                  </span>
                  <span>
                    {item.createdBy?.firstName}{" "}
                    {item.createdBy?.lastName}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>{item.createdBy?.email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>
                    {new Date(item.classDate).toLocaleString()}
                  </span>
                </div>
              </div>

              <a
                href={item.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                <Video size={18} />
                Join Class
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetClass;