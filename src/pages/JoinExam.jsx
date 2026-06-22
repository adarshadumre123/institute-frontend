// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { toast } from 'sonner';


// const JoinExam = () => {
//     const[data,setData]=useState([]);
//     const getAllExam=async()=>{
//         const token = localStorage.getItem("token")
//         try {
//             const res = await axios.get("http://localhost:8000/api/v1/question/getAllQuestion",{
//                  headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//             })
//             setData(res.data.question)
//         } catch (error) {
//             toast.error("unable to find exam questions")
//         }
//     }
    
//   return (
//     <div>
//         {
//   data?.map((question) => (
//     <div key={question._id}>
//       {question.question}
//     </div>
//   ))
// }
//     </div>
//   )
// }

// export default JoinExam


import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const JoinExam = () => {
  const [data, setData] = useState([]);

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
      toast.error("Unable to find exam questions");
    }
  };

  useEffect(() => {
    getAllExam();
  }, []);

  return (
    <div>
      {data.map((question) => (
        <div key={question._id}>
          {question.set}
        </div>
      ))}
    </div>
  );
};

export default JoinExam;