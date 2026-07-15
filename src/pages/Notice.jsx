import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Megaphone,
  Calendar,
  RefreshCw,
  Bell,
  Maximize2,
} from "lucide-react";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNotice = async () => {
    const token = localStorage.getItem("token");

    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:8000/api/v1/notice/get-notice",
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

          <button
            onClick={getNotice}
            disabled={loading}
            className="p-2.5 hover:bg-white border border-[#EFE9DF] rounded-xl text-[#65534A] transition-colors disabled:opacity-50 bg-white/50"
            title="Refresh Updates"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? "animate-spin text-[#8C3E1A]" : ""}`} />
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-10 h-10 border-4 border-[#8C3E1A] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium text-[#65534A]">Synchronizing feed channels...</p>
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
                    <div className="absolute top-4 right-4 z-10 bg-[#2E1A11]/80 text-[#FAF6F0] backdrop-blur-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-semibold">
                      <Maximize2 size={14} className="text-[#8C3E1A]" />
                      Document View
                    </div>
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

                  {/* Grounded Base Accenting Label */}
                  <div className="mt-auto pt-4 border-t border-[#EFE9DF]/60 text-xs font-mono text-[#65534A]/70 flex justify-between items-center">
                    <span>Priority Bulletin Document System</span>
                    <span className="bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#EFE9DF]">Verified Archive</span>
                  </div>

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