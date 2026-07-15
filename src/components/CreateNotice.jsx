import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'sonner';

const CreateNotice = () => {
  const [notice, setNotice] = useState({
    title: "",
    description: "",
    file: null
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNotice({
      ...notice,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNotice({
        ...notice,
        file: e.target.files[0]
      });
    }
  };

  const uploadNotice = async (e) => {
    e.preventDefault();
    if (!notice.title.trim()) {
      return toast.error("Title is required");
    }
    if (!notice.file) {
      return toast.error("File is required");
    }
    
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", notice.title);
      formData.append("description", notice.description);
      formData.append("file", notice.file);

      const res = await axios.post(`http://localhost:8000/api/v1/notice/upload-notice`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        }
      });

      if (res.data.success) {
        toast.success("Notice created successfully");
        setNotice({
          title: "",
          description: "",
          file: null
        });
        // Safely reset the file input field
        const fileInput = document.getElementById("file");
        if (fileInput) fileInput.value = '';
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
        
        {/* Header Block */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Create New Notice</h2>
          <p className="mt-2 text-blue-100 text-sm md:text-base">Publish information and attach relevant documents</p>
        </div>

        {/* Form Block */}
        <form onSubmit={uploadNotice} className="p-6 md:p-8 space-y-6">
          
          {/* Title Input */}
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-semibold text-slate-700">
              Notice Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={notice.title}
              onChange={handleChange}
              placeholder="e.g., Annual Sports Meet 2026 Schedule"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-800 placeholder-slate-400"
              disabled={loading}
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-semibold text-slate-700">
              Description <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={notice.description}
              onChange={handleChange}
              placeholder="Provide a brief summary or additional details about the notice..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-800 placeholder-slate-400 resize-none"
              disabled={loading}
            />
          </div>

          {/* File Upload Zone */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Attachment <span className="text-rose-500">*</span>
            </label>
            
            <div className="relative group">
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
                disabled={loading}
              />
              
              <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${
                notice.file 
                  ? 'border-emerald-400 bg-emerald-50/30' 
                  : 'border-slate-300 hover:border-indigo-500 bg-slate-50/50 group-hover:bg-slate-50'
              }`}>
                {/* Visual Icon indicator */}
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-sm border border-slate-100 text-slate-500 mb-3 group-hover:text-indigo-600 transition-colors">
                  {notice.file ? (
                    <svg className="h-6 w-6 text-emerald-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  )}
                </div>
                
                <p className="text-sm font-medium text-slate-700">
                  {notice.file ? notice.file.name : "Click to upload or drag & drop"}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {notice.file 
                    ? `Size: ${(notice.file.size / 1024 / 1024).toFixed(2)} MB` 
                    : "PDF, Word, Excel, Images up to 10MB"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 px-4 rounded-lg text-white font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center space-x-2 ${
              loading 
                ? 'bg-slate-400 cursor-not-allowed' 
                : 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99]'
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Publishing Notice...</span>
              </>
            ) : (
              <span>Publish Notice</span>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default CreateNotice;