


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const JoinExam = () => {
  const{id}=useParams()
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState({});

  const getAllExam = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/question/getAllQuestion",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(res.data.questions);
    } catch (error) {
      console.log(error);
      toast.error("Unable to find exam questions");
    }
  };

  useEffect(() => {
    getAllExam();
  }, []);

  const handleOptionChange = (questionId, option) => {
    setAnswers({
      ...answers,
      [questionId]: option,
    });
  };

  const handleSubmit = () => {
    console.log("Selected Answers:", answers);
    toast.success("Exam submitted successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Heading */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h1 className="text-3xl font-bold text-center text-blue-600">
            Online Examination
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Answer all questions before submitting.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {data?.map((question, index) => (
            <div
              key={question._id}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h2 className="font-semibold text-lg mb-4">
                Q{index + 1}. {question.question}
              </h2>

              <div className="space-y-3">
                {question.options?.map((option, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={question._id}
                      value={option}
                      checked={answers[question._id] === option}
                      onChange={() =>
                        handleOptionChange(question._id, option)
                      }
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        {data.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Submit Exam
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinExam;