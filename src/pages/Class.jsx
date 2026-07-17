import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const Class = () => {
  const [classItem, setClassItem] = useState({
    title: "",
    description: "",
    zoomLink: "",
    course: "",
    classDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [newClass, setNewClass] = useState([]);

  const handleChange = (e) => {
    setClassItem((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const{courseId}=useParams()

  const token = localStorage.getItem("token");
  const createClass = async (e) => {
    e.preventDefault();


    setLoading(true);

    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/class/create-class/${courseId}`,
        classItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success("Class created successfully");

        setClassItem({
          title: "",
          description: "",
          zoomLink: "",
          course: "",
          classDate: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Class
      </h2>

      <form onSubmit={createClass} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">
            Class Title
          </label>

          <input
            type="text"
            name="title"
            value={classItem.title}
            onChange={handleChange}
            placeholder="Enter class title"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Description
          </label>

          <textarea
            name="description"
            value={classItem.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full border rounded-md p-2"
            rows="4"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Zoom Link
          </label>

          <input
            type="text"
            name="zoomLink"
            value={classItem.zoomLink}
            onChange={handleChange}
            placeholder="https://zoom.us/..."
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Course ID
          </label>

          <input
            type="text"
            name="course"
            value={classItem.course}
            onChange={handleChange}
            placeholder="Enter Course ID"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Class Date & Time
          </label>

          <input
            type="datetime-local"
            name="classDate"
            value={classItem.classDate}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#2E1A11] hover:bg-[#2d1912] text-white py-2 rounded-md"
        >
          {loading ? "Creating..." : "Create Class"}
        </button>

      </form>
    </div>
  );
};

export default Class;