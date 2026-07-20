import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Link, useParams } from 'react-router-dom';
import {
  Calendar,
  BookOpen,
  User,
  Mail,
  Video,
  Plus
} from "lucide-react";
import api from "../utils/api";

const GetClass = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const{courseId}=useParams()

  const token = localStorage.getItem("token");

  const getAllClass = async () => {
    try {
      const res = await api.get(
        `/api/v1/class/getAllClass/${courseId}`,
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
  }, [courseId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#FAF9F6] text-lg font-black uppercase tracking-wider text-[#3D251A]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-[#A34F26] border-t-transparent rounded-full animate-spin" />
          <span>Loading Classes...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#3D251A] px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10 pb-6 border-b border-[#EFE9DF]">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#3D251A] text-center sm:text-left">
              Live Classes
            </h1>
            <p className="text-sm text-[#65534A] mt-1 font-semibold text-center sm:text-left">
              Connect in real-time with scheduled live interactive lectures.
            </p>
          </div>
          
          <Link
            to={`/class-create/${courseId}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#A34F26] hover:bg-[#8C3E1A] text-white px-5 py-3 rounded-xl font-black uppercase tracking-wider text-xs shadow-xs transition-all duration-200 hover:scale-[1.01]"
          >
            <Plus size={16} />
            Add Class
          </Link>
        </div>

        {classes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EFE9DF] px-6">
            <div className="w-16 h-16 bg-[#FAF6F0] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#EFE9DF]">
              <Calendar size={28} className="text-[#65534A]/40" />
            </div>
            <p className="text-lg font-bold text-[#3D251A]">No classes scheduled</p>
            <p className="text-sm text-[#65534A] mt-1 font-semibold">
              Check back later or add a new slot to get started.
            </p>
          </div>
        ) : (
          /* Responsive CSS Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((item) => (
              <div
                key={item._id}
                className="bg-white border border-[#EFE9DF] rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Class Title */}
                  <h2 className="text-xl font-black tracking-tight text-[#3D251A] mb-2 leading-snug">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-[#65534A] font-medium mb-6 line-clamp-3">
                    {item.description || "No description provided."}
                  </p>

                  {/* Class Meta Data */}
                  <div className="space-y-3.5 pt-4 border-t border-[#FAF6F0] text-sm text-[#3D251A]/90">
                    
                    {/* Course */}
                    <div className="flex items-start gap-3">
                      <BookOpen size={16} className="text-[#A34F26] mt-0.5 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-black tracking-wider text-[#65534A]/60">Course</span>
                        <span className="font-bold">{item.course?.subject || "N/A"}</span>
                      </div>
                    </div>

                    {/* Teacher */}
                    <div className="flex items-start gap-3">
                      <User size={16} className="text-[#A34F26] mt-0.5 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-black tracking-wider text-[#65534A]/60">Instructor</span>
                        <span className="font-bold">
                          {item.createdBy?.firstName}{" "}{item.createdBy?.lastName}
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-[#A34F26] mt-0.5 shrink-0" />
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-[10px] uppercase font-black tracking-wider text-[#65534A]/60">Contact</span>
                        <span className="font-medium truncate">{item.createdBy?.email}</span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-start gap-3">
                      <Calendar size={16} className="text-[#A34F26] mt-0.5 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-black tracking-wider text-[#65534A]/60">Schedule</span>
                        <span className="font-bold text-[#A34F26]">
                          {new Date(item.classDate).toLocaleString([], {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                          })}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Join Action Link */}
                <a
                  href={item.zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex justify-center items-center gap-2 bg-[#FAF6F0] hover:bg-[#A34F26] text-[#A34F26] hover:text-white border border-[#EFE9DF] hover:border-transparent py-3.5 rounded-xl font-black uppercase tracking-wider text-xs transition-all duration-300"
                >
                  <Video size={16} />
                  Join Class
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetClass;