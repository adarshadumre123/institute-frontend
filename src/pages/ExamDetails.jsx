import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Loader, BookOpen, Clock3, FileText, Trophy, Pencil } from 'lucide-react';

const ExamDetails = () => {

    const { id } = useParams();

    const [exam, setExam] = useState("");

    const getData = async () => {
        try {

            const token = localStorage.getItem("token");

            const res = await axios.get(
                `http://localhost:8000/api/v1/exams/getExamsById/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setExam(res.data.exam);

        } catch (error) {
            toast.error("Unable to get data");
        }
    };

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);


    return (
        <div className="min-h-screen bg-linear-to-br from-blue-100 via-white to-indigo-100 flex justify-center items-center p-6">

            {
                exam ? (

                    <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-[35px] overflow-hidden border border-white">

                        {/* TOP HEADER */}
                        <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white p-10">

                            <h1 className="text-4xl font-extrabold mb-3">
                                {exam.title}
                            </h1>

                            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2 relative left-180 bottom-10 cursor-pointer">
                                <Pencil size={20} />
                                Edit
                            </button>

                            <p className="text-blue-100 text-lg">
                                {exam.description}
                            </p>

                        </div>

                        {/* CONTENT */}
                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* SUBJECT */}
                            <div className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                                <div className="flex items-center gap-3 mb-3">
                                    <BookOpen className="text-blue-600" />
                                    <h2 className="text-xl font-bold text-gray-800">
                                        Subject
                                    </h2>
                                </div>

                                <p className="text-gray-600 text-lg">
                                    {exam.subject}
                                </p>
                            </div>

                            {/* DURATION */}
                            <div className="bg-purple-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                                <div className="flex items-center gap-3 mb-3">
                                    <Clock3 className="text-purple-600" />
                                    <h2 className="text-xl font-bold text-gray-800">
                                        Duration
                                    </h2>
                                </div>

                                <p className="text-gray-600 text-lg">
                                    {exam.duration} Minutes
                                </p>
                            </div>

                            {/* TOTAL MARKS */}
                            <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                                <div className="flex items-center gap-3 mb-3">
                                    <FileText className="text-green-600" />
                                    <h2 className="text-xl font-bold text-gray-800">
                                        Total Marks
                                    </h2>
                                </div>

                                <p className="text-gray-600 text-lg">
                                    {exam.totalMarks}
                                </p>
                            </div>

                            {/* PASSING MARKS */}
                            <div className="bg-yellow-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                                <div className="flex items-center gap-3 mb-3">
                                    <Trophy className="text-yellow-600" />
                                    <h2 className="text-xl font-bold text-gray-800">
                                        Passing Marks
                                    </h2>
                                </div>

                                <p className="text-gray-600 text-lg">
                                    {exam.passingMarks}
                                </p>
                            </div>

                        </div>

                        {/* TIME SECTION */}
                        <div className="px-8 pb-8">

                            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6">

                                <div>
                                    <p className="text-gray-500 font-medium">
                                        Start Time
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800">
                                        {exam.startTime}
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-gray-500 font-medium">
                                        End Time
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800">
                                        {exam.endTime}
                                    </h3>
                                </div>

                            </div>



                            {/* BUTTON */}
                            <div className='flex gap-4'>
                                <button className="w-full mt-8 bg-linear-to-r from-blue-600 to-indigo-700 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 text-white py-4 rounded-2xl text-xl font-bold">
                                    Join Exam
                                </button>
                                <button className="w-full mt-8 bg-linear-to-r from-red-600 to-red-900 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 text-white py-4 rounded-2xl text-xl font-bold">
                                    Delete Exam
                                </button>
                            </div>

                        </div>

                    </div>

                ) : (

                    <div className="flex flex-col items-center gap-5">

                        <Loader className="animate-spin h-16 w-16 text-blue-600" />

                        <p className="text-2xl font-bold text-gray-700">
                            Loading Exam...
                        </p>

                    </div>

                )
            }

        </div>
    )
}

export default ExamDetails