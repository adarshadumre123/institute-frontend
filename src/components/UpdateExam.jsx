import React from 'react'
import CreateExam from './CreateExam';
import { useParams } from "react-router-dom";

const UpdateExam = () => {
    const {examId}=useParams();
    
  return (
    <div>
        <CreateExam mode='update' examId={examId}/>
    </div>
  )
}

export default UpdateExam