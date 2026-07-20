import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { FileText, Calendar, Download, Search } from "lucide-react";
import api from '../utils/api';

const GetNotes = () => {
    const { courseId } = useParams();

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");
    const role = localStorage.getItem("role")?.trim().toLowerCase();

    const navigate = useNavigate()

    const getAllNote = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await api.get(
                `/api/v1/note/course/${courseId}/get-note`,
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
        <div className="min-h-screen bg-[#FAF9F6] p-4 md:p-8 text-[#3D251A]">
            {/* Warm Header Block */}
            <div className="bg-[#3D251A] rounded-3xl p-8 text-white shadow-xs mb-8 relative overflow-hidden">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                    Course Notes
                </h1>
                <p className="mt-2 text-[#FAF9F6]/80 font-medium">
                    Access and download all your course study materials.
                </p>
            </div>

            {/* Teacher/Admin Add Notes Action Button */}
            {(role === "teacher" || role === "admin") ? (
                <div className="flex justify-center sm:justify-end px-2 py-4">
                    <Link
                        to={`/course/${courseId}/create-note`}
                        className="
                            bg-[#A34F26]
                            hover:bg-[#8C3E1A]
                            text-white
                            px-6 py-3
                            rounded-xl
                            font-black
                            uppercase
                            tracking-wider
                            text-sm
                            shadow-xs
                            hover:scale-[1.02]
                            transition-all duration-300
                            w-full sm:w-auto
                            text-center
                        "
                    >
                        + Add Notes
                    </Link>
                </div>
            ) : null}

            {/* Search Input Control */}
            <div className="bg-white rounded-2xl shadow-xs border border-[#EFE9DF] p-4 mb-8 flex items-center gap-3">
                <Search className="text-[#65534A]/60" size={20} />
                <input
                    type="text"
                    placeholder="Search notes by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full outline-hidden bg-transparent placeholder-[#65534A]/50 font-medium text-[#3D251A]"
                />
            </div>

            {/* Notes Layout Grid */}
            {filteredNotes.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNotes.map((note) => (
                        <div
                            key={note._id}
                            className="bg-white rounded-3xl p-6 shadow-xs hover:shadow-md transition duration-300 border border-[#EFE9DF] flex flex-col justify-between"
                        >
                            <div>
                                {/* Note Icon Wrapper */}
                                <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] flex items-center justify-center mb-4 border border-[#EFE9DF]">
                                    <FileText className="text-[#A34F26]" size={28} />
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-black text-[#3D251A] mb-2 tracking-tight line-clamp-2">
                                    {note.title}
                                </h2>

                                {/* Description */}
                                <p className="text-[#65534A] text-sm mb-4 line-clamp-3 font-medium">
                                    {note.description}
                                </p>
                            </div>

                            <div>
                                {/* Date Stamp Indicator */}
                                <div className="flex items-center gap-2 text-[#65534A]/70 text-xs font-bold uppercase tracking-wide mb-5">
                                    <Calendar size={14} className="text-[#A34F26]" />
                                    {new Date(note.createdAt).toLocaleDateString(undefined, {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </div>

                                {/* Link Button to PDF/Document URL */}
                                {note.fileUrl && (
                                    <a
                                        href={note.fileUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 bg-[#FAF6F0] border border-[#EFE9DF] text-[#A34F26] hover:bg-[#A34F26] hover:text-white py-3 rounded-xl font-black uppercase tracking-wider text-xs transition-colors duration-250"
                                    >
                                        <Download size={16} />
                                        View Note
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Dynamic Empty Screen Handler */
                <div className="bg-white rounded-3xl border border-[#EFE9DF] p-12 text-center max-w-md mx-auto shadow-xs">
                    <FileText
                        size={64}
                        className="mx-auto text-[#65534A]/30 mb-4"
                    />
                    <h2 className="text-2xl font-black text-[#3D251A] tracking-tight">
                        No Notes Found
                    </h2>
                    <p className="text-[#65534A] mt-2 font-medium text-sm">
                        There are currently no matching study resources or documents uploaded for this query.
                    </p>
                </div>
            )}
        </div>
    );
};

export default GetNotes;