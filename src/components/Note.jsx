import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import  axios  from 'axios';


const Note = () => {
  const { courseId } = useParams()
  console.log(courseId)
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
      return toast.error("title is required")
    }
    if (!note.file) {
      return toast.error("please select a file")
    }
    try {
      setLoading(true)
      const token = localStorage.getItem("token")
      const formData = new FormData()
      formData.append("title", note.title)
      formData.append("description", note.description)
      formData.append("file", note.file)

      const res = await axios.post(`http://localhost:8000/api/v1/note/course/${courseId}/note`, formData, {
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
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      )
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Upload Note
        </h1>

        <form onSubmit={uploadNote} className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Note Title
            </label>

            <input
              type="text"
              name="title"
              value={note.title}
              onChange={handleChange}
              placeholder="Enter note title"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={note.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
         

            <input
              id="file"
              type="file"
              accept=".pdf,.doc,.docx,.ppt,.pptx"
              onChange={handleFileChange}
              className="w-full border rounded-lg p-3"
            />

            <p className="text-sm text-gray-500 mt-2">
              Supported formats: PDF, DOC, DOCX, PPT, PPTX
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg py-3 text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Uploading..." : "Upload Note"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Note