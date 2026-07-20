import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { UploadCloud, FileText } from 'lucide-react'; // Added for a more premium file input look
import api from '../utils/api';

const Note = () => {
  const { courseId } = useParams()
  const navigate = useNavigate();
  
  const [note, setNote] = useState({
    title: "",
    description: "",
    file: null
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    setNote({
      ...note,
      file: e.target.files[0]
    });
  };

  const uploadNote = async (e) => {
    e.preventDefault();

    if (!note.title) {
      return toast.error("Title is required")
    }
    if (!note.file) {
      return toast.error("Please select a file")
    }
    try {
      setLoading(true)
      const token = localStorage.getItem("token")
      const formData = new FormData()
      formData.append("title", note.title)
      formData.append("description", note.description)
      formData.append("file", note.file)

      const res = await api.post(`/api/v1/note/course/${courseId}/note`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        }
      })

      toast.success(res.data.message)

      setNote({
        title: "",
        description: "",
        file: null
      })
      document.getElementById("file").value = ''
      
      // Optionally redirect back to notes list after success
      navigate(`/course/${courseId}/notes`);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      )
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6 text-[#3D251A]">
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-[#EFE9DF] p-8 shadow-xs">

        {/* Header Block */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FAF6F0] border border-[#EFE9DF] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <UploadCloud className="text-[#A34F26]" size={32} />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-[#3D251A]">
            Upload Note
          </h1>
          <p className="text-sm text-[#65534A] mt-1 font-medium">
            Publish study materials and documents to this course.
          </p>
        </div>

        <form onSubmit={uploadNote} className="space-y-6">

          {/* Title Input */}
          <div>
            <label className="block mb-2 font-black uppercase tracking-wider text-xs text-[#3D251A]">
              Note Title
            </label>
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={handleChange}
              placeholder="e.g., Lecture 1: Introduction to Databases"
              className="w-full bg-[#FAF9F6] border border-[#EFE9DF] rounded-xl p-4 outline-hidden text-[#3D251A] placeholder-[#65534A]/40 font-medium focus:border-[#A34F26] focus:ring-1 focus:ring-[#A34F26] transition-all duration-200"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block mb-2 font-black uppercase tracking-wider text-xs text-[#3D251A]">
              Description (Optional)
            </label>
            <textarea
              rows={4}
              name="description"
              value={note.description}
              onChange={handleChange}
              placeholder="Provide a brief summary of what this document covers..."
              className="w-full bg-[#FAF9F6] border border-[#EFE9DF] rounded-xl p-4 outline-hidden text-[#3D251A] placeholder-[#65534A]/40 font-medium focus:border-[#A34F26] focus:ring-1 focus:ring-[#A34F26] transition-all duration-200 resize-none"
            />
          </div>

          {/* File Picker Wrapper */}
          <div>
            <label className="block mb-2 font-black uppercase tracking-wider text-xs text-[#3D251A]">
              Attachment File
            </label>
            
            <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-[#EFE9DF] hover:border-[#A34F26]/40 rounded-2xl p-6 bg-[#FAF6F0]/50 transition duration-200">
              <FileText size={32} className="text-[#65534A]/40 mb-2" />
              
              <input
                id="file"
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <span className="text-sm font-black text-[#A34F26] tracking-wide uppercase">
                {note.file ? note.file.name : "Select Document File"}
              </span>
              
              <p className="text-xs text-[#65534A]/70 mt-1 font-semibold">
                {note.file ? `${(note.file.size / (1024 * 1024)).toFixed(2)} MB` : "PDF, DOC, DOCX, PPT, PPTX up to 50MB"}
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-black uppercase tracking-wider text-xs text-white transition-all duration-300 shadow-xs ${
              loading
                ? "bg-[#65534A]/30 text-[#3D251A]/40 cursor-not-allowed"
                : "bg-[#A34F26] hover:bg-[#8C3E1A] hover:scale-[1.01]"
            }`}
          >
            {loading ? "Uploading Resources..." : "Upload Note"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Note;