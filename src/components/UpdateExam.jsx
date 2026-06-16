import React from 'react'
import CreateExam from './CreateExam';
import { useParams } from "react-router-dom";

const UpdateExam = () => {
    const {id}=useParams();
  return (
    <div>
        <CreateExam mode='update' examId={id}/>
    </div>
  )
}

export default UpdateExam