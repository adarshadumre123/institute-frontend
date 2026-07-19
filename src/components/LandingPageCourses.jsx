import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loader2, FileText, User, Mail, GraduationCap, Sparkles } from "lucide-react";

const LandingPageCourse = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getAllCourses = async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:8000/api/v1/course/landing-page-course");
            setCourses(res.data.course || []);
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllCourses();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-[#FFF9F5] min-h-screen">
                <Loader2 className="h-10 w-10 animate-spin text-[#B34E17]" />
                <p className="mt-4 text-gray-600 font-medium">Loading courses...</p>
            </div>
        );
    }

    if (courses.length === 0) {
        return (
            <div className="text-center py-20 bg-[#FFF9F5] min-h-screen flex flex-col justify-center items-center">
                <p className="text-gray-600 text-lg font-medium">No courses available right now.</p>
            </div>
        );
    }

    return (
        <div className="bg-[#FFF9F5] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-3xl sm:text-4xl font-black text-[#2E1A11] tracking-tight flex items-center gap-2">
                    Explore Courses <Sparkles className="text-[#8C3E1A] fill-[#8C3E1A] w-6 h-6" />
                </h1>
                <p className="text-[#65534A] mt-2 text-base sm:text-lg font-medium">
                    Discover premium learning materials to accelerate your career path.
                </p>
            </div>
            <div className="max-w-6xl mx-10">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <div
                            key={course._id}
                            className="bg-white rounded-4xl shadow-sm overflow-hidden border border-[#E5DCD5] flex flex-col justify-between"
                        >
                            {/* Top Card Graphic Area */}
                            <div className="bg-[#EFE6DC] h-36 flex items-center justify-center relative px-6">
                                {/* Price Tag Badge */}
                                <div className="absolute top-4 right-4 bg-[#1E1611] text-white text-sm font-bold px-4 py-1.5 rounded-full">
                                    {course.price === 0 ? "Free" : `Rs. ${course.price}`}
                                </div>
                                {/* Center Graduation Cap Icon */}
                                <GraduationCap className="w-16 h-16 text-[#8C4A27]" strokeWidth={1.5} />
                            </div>

                            {/* Card Details Area */}
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    {/* Subject Tag Header */}
                                    <div className="flex items-center gap-2 text-[#B34E17] font-bold text-xs uppercase tracking-wider mb-2">
                                        <FileText className="w-4 h-4" strokeWidth={2.5} />
                                        <span>{course.subject}</span>
                                    </div>

                                    {/* Course Title */}
                                    <h3 className="text-2xl font-bold text-[#8C4A27] mb-3 leading-tight">
                                        {course.subject}
                                    </h3>

                                    {/* Course Short Description */}
                                    <p className="text-gray-600 text-sm mb-4 font-light leading-relaxed">
                                        {course.shortDescription}
                                    </p>
                                </div>

                                <div>
                                    {/* User Details Block */}
                                    <div className="border-t border-gray-100 pt-4 space-y-2 text-sm text-[#2D2D2D]">
                                        <div className="flex items-center gap-2 font-medium">
                                            <User className="w-4 h-4 text-[#8C4A27]" />
                                            <span>{course.createdBy?.name || "adarsha dumre"}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 font-light">
                                            <Mail className="w-4 h-4 text-gray-400" />
                                            <span>{course.createdBy?.email || "test@test.com"}</span>
                                        </div>
                                    </div>

                                    {/* Action Button Section */}
                                    <div className="mt-4">
                                        <button
                                            onClick={() => navigate(`/login`)}
                                            className="w-full bg-[#B34E17] hover:bg-[#963E10] text-white font-bold text-center py-3 px-4 rounded-xl transition-colors duration-200"
                                        >
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPageCourse;