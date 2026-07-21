import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { useParams, useNavigate,Link } from "react-router-dom";
import {
    Loader2,
    BookOpen,
    Clock3,
    FileText,
    Trophy,
    Pencil,
    Trash2,
    Calendar,
    ArrowLeft,
    PlayCircle,
    AlertCircle,
} from "lucide-react";
import api from "../utils/api";

const ExamDetails = () => {
    const { examId } = useParams();
    const navigate = useNavigate();

    const [exam, setExam] = useState(null);
    const [loading, setLoading] = useState(true);
    const role = localStorage.getItem("role")
    const getData = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            const res = await api.get(`/api/v1/exams/getExamsById/${examId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.data?.exam) {
                setExam(res.data.exam);
            }
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || "Unable to fetch exam details");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (examId) {
            getData();
        }
    }, [examId]);

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return isNaN(date.getTime())
            ? dateString
            : date.toLocaleString(undefined, {
                dateStyle: "medium",
                timeStyle: "short",
            });
    };

    return (
        <div className="min-h-screen bg-[#FFF9F5] flex justify-center items-center p-4 sm:p-6 lg:p-10 font-sans text-[#2D2D2D] selection:bg-[#B34E17] selection:text-white">
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <Loader2 className="animate-spin h-12 w-12 text-[#8C3E1A]" />
                    <p className="text-base sm:text-lg font-semibold text-[#8C3E1A]/80 tracking-wide">
                        Fetching Exam Information...
                    </p>
                </div>
            ) : exam ? (
                <div className="w-full max-w-4xl bg-white border border-[#F3E7DE] rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-[#8C3E1A]/10 overflow-hidden">

                    {/* ── TOP HEADER ── */}
                    <div className="bg-linear-to-br from-[#8C3E1A] via-[#823816] to-[#6F2F11] text-white p-6 sm:p-10 relative overflow-hidden">
                        {/* Ambient Lighting FX */}
                        <div className="absolute -top-12 -right-12 w-56 h-56 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            {/* Back Link & Edit Button Bar */}
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-orange-200 hover:text-white transition cursor-pointer"
                                >
                                    <ArrowLeft size={18} />
                                    <span>Back to Exams</span>
                                </button>


                            </div>

                            {/* Title & Description */}
                            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                                {exam.title}
                            </h1>
                            <p className="text-xs sm:text-base text-orange-100/90 max-w-2xl leading-relaxed">
                                {exam.description || "No description provided for this exam."}
                            </p>
                        </div>
                    </div>

                    {/* ── STATS GRID ── */}
                    <div className="p-6 sm:p-10 space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

                            {/* SUBJECT */}
                            <div className="bg-[#FFF9F5] border border-[#F3E7DE] p-5 rounded-2xl transition hover:shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-amber-100 text-[#8C3E1A] rounded-xl">
                                        <BookOpen size={20} />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Subject
                                    </span>
                                </div>
                                <p className="text-base sm:text-lg font-bold text-[#1A1A1A] truncate">
                                    {exam.subject || "N/A"}
                                </p>
                            </div>

                            {/* DURATION */}
                            <div className="bg-[#FFF9F5] border border-[#F3E7DE] p-5 rounded-2xl transition hover:shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-orange-100 text-[#B34E17] rounded-xl">
                                        <Clock3 size={20} />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Duration
                                    </span>
                                </div>
                                <p className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                                    {exam.duration} Mins
                                </p>
                            </div>

                            {/* TOTAL MARKS */}
                            <div className="bg-[#FFF9F5] border border-[#F3E7DE] p-5 rounded-2xl transition hover:shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                                        <FileText size={20} />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Total Marks
                                    </span>
                                </div>
                                <p className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                                    {exam.totalMarks}
                                </p>
                            </div>

                            {/* PASSING MARKS */}
                            <div className="bg-[#FFF9F5] border border-[#F3E7DE] p-5 rounded-2xl transition hover:shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-yellow-100 text-yellow-700 rounded-xl">
                                        <Trophy size={20} />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Passing Marks
                                    </span>
                                </div>
                                <p className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                                    {exam.passingMarks}
                                </p>
                            </div>

                        </div>

                        {/* ── SCHEDULE PANEL ── */}
                        <div className="bg-[#FFF9F5] border border-[#E6D9CF] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">

                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white border border-[#E6D9CF] rounded-xl text-[#8C3E1A]">
                                    <Calendar size={22} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Schedule Period
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                                        Exam availability and deadline window
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto text-xs sm:text-sm">
                                <div className="bg-white p-3 rounded-xl border border-[#F3E7DE]">
                                    <span className="text-gray-400 font-medium block mb-0.5">
                                        Starts At
                                    </span>
                                    <span className="font-bold text-gray-800">
                                        {formatDate(exam.startTime)}
                                    </span>
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-[#F3E7DE]">
                                    <span className="text-gray-400 font-medium block mb-0.5">
                                        Ends At
                                    </span>
                                    <span className="font-bold text-gray-800">
                                        {formatDate(exam.endTime)}
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* ── ACTION BUTTONS ── */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Link
                                to={`/join-exam/${exam._id}`}
                                className="flex-1 py-3.5 bg-[#8C3E1A] hover:bg-[#6E2E12] text-white font-semibold rounded-xl transition duration-300 shadow-md shadow-orange-950/10 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer active:scale-[0.99]"
                            >
                                <PlayCircle size={20} />
                                <span>Join Exam Now</span>
                            </Link>

                            {
                                role==="admin" && role ==="teacher"?(
                                    
                            <button
                                onClick={() => {
                                    if (
                                        window.confirm(
                                            "Are you sure you want to delete this exam? This action cannot be undone."
                                        )
                                    ) {
                                        // Trigger delete logic here
                                    }
                                }}
                                className="py-3.5 px-6 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 font-semibold rounded-xl transition duration-300 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer active:scale-[0.99]"
                            >
                                <Trash2 size={18} />
                                <span>Delete Exam</span>
                            </button>
                                ):null
                            }

                        </div>

                    </div>
                </div>
            ) : (
                <div className="bg-white p-8 rounded-3xl border border-[#F3E7DE] shadow-xl text-center max-w-md w-full">
                    <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-3" />
                    <h2 className="text-xl font-bold text-gray-800">Exam Not Found</h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-6">
                        The exam you are looking for does not exist or has been removed.
                    </p>
                    <button
                        onClick={() => navigate(-1)}
                        className="w-full py-3 bg-[#8C3E1A] hover:bg-[#6E2E12] text-white font-semibold rounded-xl transition text-sm cursor-pointer"
                    >
                        Go Back
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExamDetails;