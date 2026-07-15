import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { FileText, Calendar, Download, Search } from "lucide-react";

const GetNotes = () => {
    const { courseId } = useParams();

    const [notes, setNotes] = useState([

    ]);
    const [search, setSearch] = useState("");
    const role = localStorage.getItem("role")?.trim().toLowerCase();

    const navigate = useNavigate()


    const getAllNote = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get(
                `http://localhost:8000/api/v1/note/course/${courseId}/get-note`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.data.success) {
                setNotes(res.data.notes);
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
        }
    };

    useEffect(() => {
        if (courseId) {
            getAllNote();
        }
    }, [courseId]);

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    console.log(filteredNotes)

    return (
        <div className="min-h-screen bg-slate-100 p-4 md:p-8">
            {/* Header */}
            <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl mb-8">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Course Notes
                </h1>
                <p className="mt-2 text-indigo-100">
                    Access all your study materials in one place.
                </p>
            </div>

      {
  (role === "teacher" || role === "admin") ? (
    <div className="flex justify-center sm:justify-end px-4 py-4">
      <Link
        to={`/course/${courseId}/create-note`}
        className="
          bg-linear-to-r from-indigo-600 to-purple-600
          text-white
          px-5 py-3
          rounded-xl
          font-semibold
          shadow-lg
          hover:shadow-xl
          hover:scale-105
          transition-all duration-300
          w-full sm:w-auto
        "
      >
        + Add Notes
      </Link>
    </div>
  ) : null
}

        

            {/* Search */}
            <div className="bg-white rounded-2xl shadow-md p-4 mb-8 flex items-center gap-3">
                <Search className="text-gray-500" size={20} />

                <input
                    type="text"
                    placeholder="Search notes..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full outline-none"
                />
            </div>

            {/* Notes Grid */}
            {filteredNotes.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNotes.map((note) => (
                        <div
                            key={note._id}
                            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-4">
                                <FileText className="text-indigo-600" size={28} />
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-800 mb-2">
                                {note.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                {note.description}
                            </p>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                                <Calendar size={16} />
                                {new Date(note.createdAt).toLocaleDateString()}
                            </div>

                            {/* Download Button */}
                            {note.fileUrl && (
                                <a
                                    href={note.fileUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
                                >
                                    <Download size={18} />
                                    View Note
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-3xl shadow-md p-12 text-center">
                    <FileText
                        size={70}
                        className="mx-auto text-gray-300 mb-4"
                    />

                    <h2 className="text-2xl font-bold text-gray-700">
                        No Notes Found
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Notes uploaded by teachers will appear here.
                    </p>
                </div>
            )}
        </div>
    );
};

export default GetNotes