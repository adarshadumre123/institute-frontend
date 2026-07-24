import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Link } from 'react-router-dom';
import {
  Megaphone,
  Calendar,
  RefreshCw,
  Bell,
  Maximize2,
  Plus,
} from "lucide-react";
import api from "../utils/api";
const Notice = () => {
  const [notice, setNotice] = useState([]);
  const [loading, setLoading] = useState(true);
  const role= localStorage.getItem("role").trim().toLowerCase()
  

  const getNotice = async () => {
    const token = localStorage.getItem("token");

    try {
      setLoading(true);

      const res = await api.get(
        "/api/v1/notice/get-notice",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setNotice(res.data.notice);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load notices"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotice();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#2E1A11] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Top Header Section */}
        <div className="flex items-center justify-between border-b border-[#EFE9DF] pb-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="bg-[#8C3E1A] text-white p-2.5 rounded-xl shadow-sm">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2E1A11]">Notice Board</h1>
              <p className="text-[#65534A] text-sm mt-0.5">High-visibility view for critical board updates.</p>
            </div>
          </div>

{
  role==="student"?(null):(
     <Link to={'/add-notice'}
          className="p-2.5 flex hover:bg-white border border-[#EFE9DF] rounded-xl text-[#65534A] transition-colors disabled:opacity-50 bg-white/50">
            <Plus className='w-5 h-5 '/>
            <p>Add Notice</p>
          </Link>
  )
}

         

        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-10 h-10 border-4 border-[#8C3E1A] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium text-[#65534A]">loading...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && notice.length === 0 && (
          <div className="max-w-md mx-auto text-center py-16 bg-white rounded-2xl border border-[#EFE9DF] p-8 shadow-xs">
            <Bell className="mx-auto h-12 w-12 text-[#65534A]/30 mb-3" />
            <h3 className="text-lg font-bold text-[#2E1A11] mb-1">Clear Bulletin Board</h3>
            <p className="text-[#65534A] text-sm">There are no notices posted at the moment.</p>
          </div>
        )}

        {/* High-Readability Stream Grid Layout */}
        {!loading && notice.length > 0 && (
          <div className="grid grid-cols-1 gap-10">
            {notice.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl border border-[#EFE9DF] shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
              >
                {/* LARGE TEXT-READABLE IMAGE PANEL */}
                {item.image && (
                  <div className="w-full bg-[#FAF6F0] border-b border-[#EFE9DF]/60 relative p-2 sm:p-4 flex justify-center">
                    
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-xs"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content Text Segment */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">

                  {/* Subtle Sub-header Data */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C3E1A] mb-3 uppercase tracking-wider">
                    <Calendar size={14} />
                    <span>Official Notice Details</span>
                  </div>

                  {/* Title Element */}
                  <h2 className="text-2xl font-bold text-[#2E1A11] mb-4 leading-snug tracking-tight group-hover:text-[#8C3E1A] transition-colors">
                    {item.title}
                  </h2>

                  {/* Description Element */}
                  <p className="text-[#65534A] text-base leading-relaxed mb-6 whitespace-pre-line">
                    {item.description}
                  </p>

                  

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Notice;